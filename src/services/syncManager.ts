import { doc, setDoc, getDoc, Timestamp } from 'firebase/firestore';
import { db } from './firebase';
import { GameState } from '../context/GameContext';

interface SyncData extends GameState {
  lastSync: Timestamp;
}

type SyncStatus = 'idle' | 'syncing' | 'synced' | 'error';

export class SyncManager {
  private syncInterval: ReturnType<typeof setInterval> | null = null;
  private lastSyncHash: string = '';
  private isSyncing: boolean = false;
  private userId: string;

  constructor(userId: string) {
    this.userId = userId;
  }

  /**
   * Start auto-sync with 5-minute interval
   */
  startAutoSync(
    getGameState: () => GameState,
    onStatusChange: (status: SyncStatus) => void,
    onError: (error: string) => void
  ) {
    // Set up 5-minute auto-sync (no initial sync on page reload)
    this.syncInterval = setInterval(() => {
      const currentHash = this.hashGameState(getGameState());
      if (currentHash !== this.lastSyncHash) {
        this.syncToFirebase(getGameState, onStatusChange, onError);
      }
    }, 5 * 60 * 1000); // 5 minutes
  }

  /**
   * Stop auto-sync
   */
  stopAutoSync() {
    if (this.syncInterval) {
      clearInterval(this.syncInterval);
      this.syncInterval = null;
    }
  }

  /**
   * Manual sync trigger
   */
  async manualSync(
    getGameState: () => GameState,
    onStatusChange: (status: SyncStatus) => void,
    onError: (error: string) => void
  ) {
    return this.syncToFirebase(getGameState, onStatusChange, onError);
  }

  /**
   * Sync game state to Firestore
   */
  private async syncToFirebase(
    getGameState: () => GameState,
    onStatusChange: (status: SyncStatus) => void,
    onError: (error: string) => void
  ) {
    if (this.isSyncing) return;

    try {
      this.isSyncing = true;
      onStatusChange('syncing');

      const gameState = getGameState();
      const currentHash = this.hashGameState(gameState);

      // Only sync if data changed
      if (currentHash === this.lastSyncHash) {
        onStatusChange('idle');
        return;
      }

      const syncData: SyncData = {
        ...gameState,
        lastSync: Timestamp.now(),
      };

       await setDoc(doc(db, 'users', this.userId), syncData, { merge: false });

       this.lastSyncHash = currentHash;
       // Update sync timestamp for conflict detection
       localStorage.setItem(`lastSync_${this.userId}`, new Date().toISOString());
       onStatusChange('synced');

      // Reset to idle after 2 seconds
      setTimeout(() => onStatusChange('idle'), 2000);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Sync failed';
      console.error('Sync error:', errorMessage);
      onError(errorMessage);
      onStatusChange('error');
    } finally {
      this.isSyncing = false;
    }
  }

   /**
    * Load game state from Firestore
    */
   async loadFromFirebase(): Promise<GameState | null> {
     try {
       const docSnap = await getDoc(doc(db, 'users', this.userId));

       if (docSnap.exists()) {
         const data = docSnap.data() as SyncData;
         this.lastSyncHash = this.hashGameState(data);
         return data;
       }

       return null;
     } catch (error) {
       const errorMessage = error instanceof Error ? error.message : 'Failed to load from Firebase';
       console.error('Load error:', errorMessage);
       throw error;
     }
   }

   /**
    * Load game state from Firestore with conflict detection
    * Returns remote data and conflict info for user decision
    */
   async loadWithConflictResolution(
     localGameState: GameState
   ): Promise<{
     remoteData: GameState | null;
     hasConflict: boolean;
     localIsNewer: boolean;
   }> {
     try {
       const docSnap = await getDoc(doc(db, 'users', this.userId));

       if (!docSnap.exists()) {
         return { remoteData: null, hasConflict: false, localIsNewer: false };
       }

       const remoteData = docSnap.data() as SyncData;
       const remoteLastSync = remoteData.lastSync?.toDate() || new Date(0);

       // Get local last-sync timestamp (stored when we last synced successfully)
       const localLastSyncStr = localStorage.getItem(`lastSync_${this.userId}`);
       const localLastSync = localLastSyncStr ? new Date(localLastSyncStr) : new Date(0);

       // Check if both have meaningful data by comparing against initial empty state
       const emptyState = {
         encounter: [],
         players: [],
         deathSaves: [],
         links: [],
         bastions: [],
         currentDay: 0,
         sortBy: 'initiative',
         darkMode: false,
         currentRound: 0,
         currentTurnIndex: -1,
       };

       const localHasData = JSON.stringify(localGameState) !== JSON.stringify(emptyState);
       const remoteHasData = remoteData && (remoteData.encounter?.length > 0 || remoteData.players?.length > 0 || remoteData.deathSaves?.length > 0);

       // Conflict = both have data AND sync times differ
       const hasConflict = localHasData && remoteHasData && remoteLastSync !== localLastSync;
       const localIsNewer = localLastSync > remoteLastSync;

       // Cache the remote hash for next sync
       this.lastSyncHash = this.hashGameState(remoteData);

       return {
         remoteData: remoteData || null,
         hasConflict,
         localIsNewer,
       };
     } catch (error) {
       console.error('Conflict resolution error:', error);
       throw error;
     }
   }

   /**
    * Update lastSync timestamp in localStorage after successful sync
    */
   updateLastSyncTime(): void {
     localStorage.setItem(`lastSync_${this.userId}`, new Date().toISOString());
   }

  /**
   * Create hash of game state for change detection
   */
  private hashGameState(gameState: GameState): string {
    return JSON.stringify({
      encounter: gameState.encounter,
      players: gameState.players,
      deathSaves: gameState.deathSaves,
      links: gameState.links,
      bastions: gameState.bastions,
      currentDay: gameState.currentDay,
      sortBy: gameState.sortBy,
      darkMode: gameState.darkMode,
    });
  }

  /**
   * Handle conflict resolution (last-write-wins)
   */
  async resolveConflict(localData: GameState, remoteLastSync: Timestamp): Promise<GameState> {
    try {
      const localLastSync = localData ? new Date(localStorage.getItem(`lastSync_${this.userId}`) || 0) : new Date(0);
      const remoteTime = remoteLastSync.toDate();

      // Last-write-wins: if remote is newer, use remote
      if (remoteTime > localLastSync) {
        const remoteData = await this.loadFromFirebase();
        return remoteData || localData;
      }

      // Local is newer or equal, use local
      return localData;
    } catch (error) {
      console.error('Conflict resolution error:', error);
      return localData;
    }
  }
}
