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
    // Initial sync
    this.syncToFirebase(getGameState, onStatusChange, onError);

    // Set up 5-minute auto-sync
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
