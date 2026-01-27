import { ReactNode, createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { SyncManager } from '../services/syncManager';
import { useAuth } from './AuthContext';

export interface Character {
  name: string;
  hp: number;
  maxHp: number;
  initiative: number;
  initiativeMod: number;
  charStatus: string;
  ac: number | null;
  abilities: Ability[];
}

export interface Ability {
  name: string;
  max: number;
  used: number;
}

export interface Player {
  name: string;
  pp: number | null;
  pi: number | null;
  ac: number | null;
}

export interface DeathSave {
  name: string;
  successes: number;
  failures: number;
  stable: boolean;
}

export interface Link {
  name: string;
  url: string;
}

export interface Bastion {
  name: string;
  owner: string;
  facilities: string[];
  currentOrder: string;
  turnDay: number;
  lastEvent: string;
  lastProcessedDay: number;
  note: string;
}

export interface GameState {
  encounter: Character[];
  players: Player[];
  deathSaves: DeathSave[];
  links: Link[];
  bastions: Bastion[];
  currentDay: number;
  sortBy: 'initiative' | 'name';
  darkMode: boolean;
  currentRound: number;
  currentTurnIndex: number;
}

interface GameContextType extends GameState {
  // Encounter actions
  addCharacter: (char: Character) => void;
  removeCharacter: (index: number) => void;
  updateCharacter: (index: number, char: Character) => void;
  applyAdjustment: (index: number, delta: number) => void;
  rollInitiative: (index: number) => void;
  copyEncounter: (index: number) => void;
  addAbility: (index: number, ability: Ability) => void;
  removeAbility: (charIndex: number, abilityIndex: number) => void;
  adjustAbility: (charIndex: number, abilityIndex: number, delta: number) => void;
   updateCondition: (index: number, condition: string) => void;
   toggleSort: () => void;
   startCombat: () => void;
   nextTurn: () => void;
   previousTurn: () => void;
   endRound: () => void;
   resetCombat: () => void;

   // Player actions
  addPlayer: (player: Player) => void;
  removePlayer: (index: number) => void;
  updatePlayer: (index: number, player: Player) => void;

  // Death Save actions
  addDeathSave: (deathSave: DeathSave) => void;
  removeDeathSave: (index: number) => void;
  adjDeath: (index: number, key: 'successes' | 'failures', delta: number) => void;
  toggleStable: (index: number) => void;
  resetDeath: (index: number) => void;

  // Link actions
  addLink: (link: Link) => void;
  removeLink: (index: number) => void;
  updateLink: (index: number, link: Link) => void;

  // Bastion actions
  addBastion: (bastion: Bastion) => void;
  removeBastion: (index: number) => void;
  addBastionFacility: (index: number, facility: string) => void;
  removeBastionFacility: (bastionIndex: number, facilityIndex: number) => void;
  issueBastionOrder: (index: number, order: string) => void;
  saveBastionNote: (index: number, note: string) => void;
  processBastionTurnsManual: () => void;
  processSingleBastion: (index: number) => void;
  advanceDays: (days: number) => void;
  resetDay: () => void;

  // General actions
  toggleDarkMode: () => void;
  exportAll: () => void;
  importAll: (data: GameState) => void;

  // Sync actions
  syncStatus: 'idle' | 'syncing' | 'synced' | 'error';
  syncError: string | null;
  manualSync: () => Promise<void>;

  // Conflict resolution
  conflictState: {
    open: boolean;
    localIsNewer: boolean;
    remoteData: GameState | null;
  } | null;
  handleConflictResolution: (useCloud: boolean) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

const STORAGE_KEYS = {
  encounter: 'dndEncounter',
  players: 'players',
  deathSaves: 'deathSaves',
  links: 'links',
  bastions: 'bastions',
  currentDay: 'currentDay',
  sortBy: 'sortBy',
  darkMode: 'darkMode',
  currentRound: 'currentRound',
  currentTurnIndex: 'currentTurnIndex',
};

const INITIAL_STATE: GameState = {
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

export function GameProvider({ children }: { children: ReactNode }) {
   const { user } = useAuth();
     const [state, setState] = useState<GameState>(() => {
      try {
        return {
          encounter: JSON.parse(localStorage.getItem(STORAGE_KEYS.encounter) || '[]'),
          players: JSON.parse(localStorage.getItem(STORAGE_KEYS.players) || '[]'),
          deathSaves: JSON.parse(localStorage.getItem(STORAGE_KEYS.deathSaves) || '[]'),
          links: JSON.parse(localStorage.getItem(STORAGE_KEYS.links) || '[]'),
          bastions: JSON.parse(localStorage.getItem(STORAGE_KEYS.bastions) || '[]'),
          currentDay: parseInt(localStorage.getItem(STORAGE_KEYS.currentDay) || '0'),
          sortBy: (localStorage.getItem(STORAGE_KEYS.sortBy) || 'initiative') as 'initiative' | 'name',
          darkMode: localStorage.getItem(STORAGE_KEYS.darkMode) === 'true',
          currentRound: parseInt(localStorage.getItem(STORAGE_KEYS.currentRound) || '0'),
          currentTurnIndex: parseInt(localStorage.getItem(STORAGE_KEYS.currentTurnIndex) || '-1'),
        };
      } catch {
        return INITIAL_STATE;
     }
   });

   // Persist state changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.encounter, JSON.stringify(state.encounter));
  }, [state.encounter]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.players, JSON.stringify(state.players));
  }, [state.players]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.deathSaves, JSON.stringify(state.deathSaves));
  }, [state.deathSaves]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.links, JSON.stringify(state.links));
  }, [state.links]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.bastions, JSON.stringify(state.bastions));
  }, [state.bastions]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.currentDay, String(state.currentDay));
   }, [state.currentDay]);

   useEffect(() => {
     localStorage.setItem(STORAGE_KEYS.sortBy, state.sortBy);
   }, [state.sortBy]);

   useEffect(() => {
     localStorage.setItem(STORAGE_KEYS.darkMode, state.darkMode ? 'true' : 'false');
   }, [state.darkMode]);

   useEffect(() => {
     localStorage.setItem(STORAGE_KEYS.currentRound, String(state.currentRound));
   }, [state.currentRound]);

   useEffect(() => {
     localStorage.setItem(STORAGE_KEYS.currentTurnIndex, String(state.currentTurnIndex));
   }, [state.currentTurnIndex]);

      // Sync state
      const [syncStatus, setSyncStatus] = useState<'idle' | 'syncing' | 'synced' | 'error'>('idle');
      const [syncError, setSyncError] = useState<string | null>(null);

      // Conflict resolution state
      const [conflictState, setConflictState] = useState<{
        open: boolean;
        localIsNewer: boolean;
        remoteData: GameState | null;
      } | null>(null);

    // Use ref to maintain SyncManager instance across renders
    const syncManagerRef = useRef<SyncManager | null>(null);

      // Keep a ref to current state so callbacks always get latest state
      const stateRef = useRef<GameState>(state);
      useEffect(() => {
        stateRef.current = state;
      }, [state]);

      // Initialize SyncManager when user authenticates (only once)
      useEffect(() => {
        if (user?.uid) {
          // Only create SyncManager if it doesn't exist
          if (!syncManagerRef.current) {
            syncManagerRef.current = new SyncManager(user.uid);

            // Load data from Firestore (source of truth) on first login
            (async () => {
              try {
                const resolution = await syncManagerRef.current!.loadWithConflictResolution(state);
                
                if (resolution.hasConflict) {
                  // Show dialog and wait for user decision
                  setConflictState({
                    open: true,
                    localIsNewer: resolution.localIsNewer,
                    remoteData: resolution.remoteData,
                  });
                  // Don't start sync yet - wait for user decision
                } else if (resolution.remoteData) {
                  // No conflict, just load remote data (Firestore is source of truth)
                  setState({
                    encounter: resolution.remoteData.encounter || [],
                    players: resolution.remoteData.players || [],
                    deathSaves: resolution.remoteData.deathSaves || [],
                    links: resolution.remoteData.links || [],
                    bastions: resolution.remoteData.bastions || [],
                    currentDay: resolution.remoteData.currentDay || 0,
                    sortBy: resolution.remoteData.sortBy || 'initiative',
                    darkMode: resolution.remoteData.darkMode || false,
                    currentRound: resolution.remoteData.currentRound || 0,
                    currentTurnIndex: resolution.remoteData.currentTurnIndex || -1,
                  });
                  syncManagerRef.current!.updateLastSyncTime();
                  // Now start auto-sync
                  syncManagerRef.current!.startAutoSync(
                    () => stateRef.current,
                    setSyncStatus,
                    setSyncError
                  );
                } else {
                  // No remote data, start with local (first time)
                  syncManagerRef.current!.startAutoSync(
                    () => stateRef.current,
                    setSyncStatus,
                    setSyncError
                  );
                }
              } catch (error) {
                console.error('Failed to load from Firebase:', error);
                setSyncError('Failed to load cloud data, using local data');
                syncManagerRef.current!.startAutoSync(
                  () => stateRef.current,
                  setSyncStatus,
                  setSyncError
                );
              }
            })();
          }

          return () => {
            // Don't stop sync on unmount, let it continue
          };
        } else {
          // Stop sync if user logs out
          if (syncManagerRef.current) {
            syncManagerRef.current.stopAutoSync();
            syncManagerRef.current = null;
          }
        }
      }, [user?.uid]);

     const manualSync = useCallback(async (): Promise<void> => {
       if (!syncManagerRef.current) {
         setSyncError('Sync manager not initialized');
         return;
       }
       // Use stateRef to get latest state
       await syncManagerRef.current.manualSync(
         () => stateRef.current,
         setSyncStatus,
         setSyncError
       );
      }, []);

     /**
      * Handle user decision on conflict (keep local or use cloud)
      */
     const handleConflictResolution = useCallback((useCloud: boolean) => {
       if (useCloud && conflictState?.remoteData) {
         // Use cloud data
         setState({
           encounter: conflictState.remoteData.encounter || [],
           players: conflictState.remoteData.players || [],
           deathSaves: conflictState.remoteData.deathSaves || [],
           links: conflictState.remoteData.links || [],
           bastions: conflictState.remoteData.bastions || [],
           currentDay: conflictState.remoteData.currentDay || 0,
           sortBy: conflictState.remoteData.sortBy || 'initiative',
           darkMode: conflictState.remoteData.darkMode || false,
           currentRound: conflictState.remoteData.currentRound || 0,
           currentTurnIndex: conflictState.remoteData.currentTurnIndex || -1,
         });
         setSyncError('Using cloud data');
         syncManagerRef.current?.updateLastSyncTime();
       } else {
         // Keep local data - will sync to cloud on next sync
         setSyncError('Keeping local data. It will sync to cloud.');
       }
       
       setConflictState(null);
       
       // Start auto-sync after conflict resolution
       if (syncManagerRef.current) {
         syncManagerRef.current.startAutoSync(
           () => stateRef.current,
           setSyncStatus,
           setSyncError
         );
       }
     }, [conflictState]);

     /**
      * Get the original index of the first creature when sorted by current sortBy mode
      */
     const getFirstCreatureInSortOrder = (encounter: Character[], sortBy: 'initiative' | 'name'): number => {
       if (encounter.length === 0) return 0;

       const sorted = encounter
         .map((char, i) => ({ ...char, originalIndex: i }))
         .sort((a, b) =>
           sortBy === 'initiative'
             ? (b.initiative || 0) - (a.initiative || 0)
             : (a.name || '').localeCompare(b.name || '')
         );

       return sorted[0].originalIndex;
     };

   const value: GameContextType = {
     ...state,

    // Encounter actions
    addCharacter: (char) => {
      setState((prev) => ({ ...prev, encounter: [...prev.encounter, char] }));
    },
    removeCharacter: (index) => {
      setState((prev) => ({
        ...prev,
        encounter: prev.encounter.filter((_, i) => i !== index),
      }));
    },
    updateCharacter: (index, char) => {
      setState((prev) => {
        const updated = [...prev.encounter];
        updated[index] = char;
        return { ...prev, encounter: updated };
      });
    },
    applyAdjustment: (index, delta) => {
      setState((prev) => {
        const updated = [...prev.encounter];
        const char = updated[index];
        char.hp = Math.min(Math.max(0, char.hp + delta), char.maxHp);
        return { ...prev, encounter: updated };
      });
    },
    rollInitiative: (index) => {
      setState((prev) => {
        const updated = [...prev.encounter];
        const d20 = Math.floor(Math.random() * 20) + 1;
        const mod = updated[index].initiativeMod || 0;
        updated[index].initiative = d20 + mod;
        return { ...prev, encounter: updated };
      });
    },
    copyEncounter: (index) => {
      setState((prev) => {
        const base = prev.encounter[index];
        let suffix = 'a';
        const names = prev.encounter.map((c) => c.name);
        let newName = `${base.name} (${suffix})`;
        while (names.includes(newName)) {
          suffix = String.fromCharCode(suffix.charCodeAt(0) + 1);
          newName = `${base.name} (${suffix})`;
        }
        return {
          ...prev,
          encounter: [
            ...prev.encounter,
            { ...base, name: newName, abilities: [...(base.abilities || [])] },
          ],
        };
      });
    },
    addAbility: (index, ability) => {
      setState((prev) => {
        const updated = [...prev.encounter];
        updated[index].abilities = [...(updated[index].abilities || []), ability];
        return { ...prev, encounter: updated };
      });
    },
    removeAbility: (charIndex, abilityIndex) => {
      setState((prev) => {
        const updated = [...prev.encounter];
        updated[charIndex].abilities = updated[charIndex].abilities.filter((_, i) => i !== abilityIndex);
        return { ...prev, encounter: updated };
      });
    },
    adjustAbility: (charIndex, abilityIndex, delta) => {
      setState((prev) => {
        const updated = [...prev.encounter];
        const ability = updated[charIndex].abilities[abilityIndex];
        ability.used = Math.min(Math.max(0, ability.used + delta), ability.max);
        return { ...prev, encounter: updated };
      });
    },
    updateCondition: (index, condition) => {
      setState((prev) => {
        const updated = [...prev.encounter];
        updated[index].charStatus = condition;
        return { ...prev, encounter: updated };
      });
    },
     toggleSort: () => {
       setState((prev) => ({
         ...prev,
         sortBy: prev.sortBy === 'initiative' ? 'name' : 'initiative',
       }));
     },
      startCombat: () => {
        setState((prev) => ({
          ...prev,
          currentRound: 1,
          currentTurnIndex: prev.encounter.length > 0 ? getFirstCreatureInSortOrder(prev.encounter, prev.sortBy) : -1,
        }));
      },
     nextTurn: () => {
       setState((prev) => {
         if (prev.encounter.length === 0 || prev.currentRound === 0) return prev;
         const nextIndex = (prev.currentTurnIndex + 1) % prev.encounter.length;
         const nextRound = nextIndex === 0 ? prev.currentRound + 1 : prev.currentRound;
         return {
           ...prev,
           currentTurnIndex: nextIndex,
           currentRound: nextRound,
         };
       });
     },
     previousTurn: () => {
       setState((prev) => {
         if (prev.encounter.length === 0 || prev.currentRound === 0) return prev;
         const prevIndex = (prev.currentTurnIndex - 1 + prev.encounter.length) % prev.encounter.length;
         return { ...prev, currentTurnIndex: prevIndex };
       });
     },
      endRound: () => {
        setState((prev) => {
          if (prev.encounter.length === 0) return prev;
          return {
            ...prev,
            currentRound: prev.currentRound + 1,
            currentTurnIndex: getFirstCreatureInSortOrder(prev.encounter, prev.sortBy),
          };
        });
      },
     resetCombat: () => {
       setState((prev) => ({
         ...prev,
         currentRound: 0,
         currentTurnIndex: -1,
       }));
     },

     // Player actions
    addPlayer: (player) => {
      setState((prev) => ({ ...prev, players: [...prev.players, player] }));
    },
    removePlayer: (index) => {
      setState((prev) => ({
        ...prev,
        players: prev.players.filter((_, i) => i !== index),
      }));
    },
    updatePlayer: (index, player) => {
      setState((prev) => {
        const updated = [...prev.players];
        updated[index] = player;
        return { ...prev, players: updated };
      });
    },

    // Death Save actions
    addDeathSave: (deathSave) => {
      setState((prev) => ({ ...prev, deathSaves: [...prev.deathSaves, deathSave] }));
    },
    removeDeathSave: (index) => {
      setState((prev) => ({
        ...prev,
        deathSaves: prev.deathSaves.filter((_, i) => i !== index),
      }));
    },
    adjDeath: (index, key, delta) => {
      setState((prev) => {
        const updated = [...prev.deathSaves];
        updated[index][key] = Math.min(3, Math.max(0, (updated[index][key] || 0) + delta));
        return { ...prev, deathSaves: updated };
      });
    },
    toggleStable: (index) => {
      setState((prev) => {
        const updated = [...prev.deathSaves];
        updated[index].stable = !updated[index].stable;
        return { ...prev, deathSaves: updated };
      });
    },
    resetDeath: (index) => {
      setState((prev) => {
        const updated = [...prev.deathSaves];
        updated[index] = { ...updated[index], successes: 0, failures: 0, stable: false };
        return { ...prev, deathSaves: updated };
      });
    },

    // Link actions
    addLink: (link) => {
      setState((prev) => ({ ...prev, links: [...prev.links, link] }));
    },
    removeLink: (index) => {
      setState((prev) => ({
        ...prev,
        links: prev.links.filter((_, i) => i !== index),
      }));
    },
    updateLink: (index, link) => {
      setState((prev) => {
        const updated = [...prev.links];
        updated[index] = link;
        return { ...prev, links: updated };
      });
    },

    // Bastion actions
    addBastion: (bastion) => {
      setState((prev) => ({ ...prev, bastions: [...prev.bastions, bastion] }));
    },
    removeBastion: (index) => {
      setState((prev) => ({
        ...prev,
        bastions: prev.bastions.filter((_, i) => i !== index),
      }));
    },
    addBastionFacility: (index, facility) => {
      setState((prev) => {
        const updated = [...prev.bastions];
        updated[index].facilities = [...(updated[index].facilities || []), facility];
        return { ...prev, bastions: updated };
      });
    },
    removeBastionFacility: (bastionIndex, facilityIndex) => {
      setState((prev) => {
        const updated = [...prev.bastions];
        updated[bastionIndex].facilities = updated[bastionIndex].facilities.filter(
          (_, i) => i !== facilityIndex
        );
        return { ...prev, bastions: updated };
      });
    },
    issueBastionOrder: (index, order) => {
      setState((prev) => {
        const updated = [...prev.bastions];
        updated[index].currentOrder = order;
        return { ...prev, bastions: updated };
      });
    },
    saveBastionNote: (index, note) => {
      setState((prev) => {
        const updated = [...prev.bastions];
        updated[index].note = note;
        return { ...prev, bastions: updated };
      });
    },
    processBastionTurnsManual: () => {
      setState((prev) => {
        const updated = [...prev.bastions];
        updated.forEach((b) => {
          if (b.lastProcessedDay === undefined) {
            b.lastProcessedDay = 0;
          }
          while (prev.currentDay - b.lastProcessedDay >= 7) {
            b.lastProcessedDay += 7;
            b.turnDay = (b.turnDay || 0) + 7;
            b.lastEvent =
              b.currentOrder === 'Maintain' ? getRandomBastionEvent() : b.lastEvent || 'None';
          }
        });
        return { ...prev, bastions: updated };
      });
    },
    processSingleBastion: (index) => {
      setState((prev) => {
        const updated = [...prev.bastions];
        const b = updated[index];
        if (!b) return prev;
        if (b.lastProcessedDay === undefined) b.lastProcessedDay = 0;
        while (prev.currentDay - b.lastProcessedDay >= 7) {
          b.lastProcessedDay += 7;
          b.turnDay = (b.turnDay || 0) + 7;
          b.lastEvent = b.currentOrder === 'Maintain' ? getRandomBastionEvent() : b.lastEvent || 'None';
        }
        return { ...prev, bastions: updated };
      });
    },
    advanceDays: (days) => {
      if (!Number.isFinite(days) || days <= 0) return;
      setState((prev) => ({ ...prev, currentDay: prev.currentDay + days }));
    },
    resetDay: () => {
      setState((prev) => ({
        ...prev,
        currentDay: 0,
        bastions: prev.bastions.map((b) => ({ ...b, lastProcessedDay: 0 })),
      }));
    },

    // General actions
    toggleDarkMode: () => {
      setState((prev) => ({ ...prev, darkMode: !prev.darkMode }));
    },
    exportAll: () => {
      const payload = {
        version: 3,
        exportedAt: new Date().toISOString(),
        ...state,
      };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'dm-screen-export.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    },
      importAll: (data) => {
       setState({
         encounter: data.encounter || [],
         players: data.players || [],
         deathSaves: data.deathSaves || [],
         links: data.links || [],
         bastions: data.bastions || [],
         currentDay: data.currentDay || 0,
         sortBy: data.sortBy || 'initiative',
         darkMode: data.darkMode || false,
         currentRound: data.currentRound || 0,
         currentTurnIndex: data.currentTurnIndex || -1,
       });
     },

     // Sync actions
     syncStatus,
     syncError,
     manualSync,

     // Conflict resolution
     conflictState,
     handleConflictResolution,
   };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

/**
 * Convert a Player to a Character snapshot
 * Creates an independent character copy with only name and ac from player
 */
export function playerToCharacter(player: Player): Character {
  return {
    name: player.name,
    hp: 0, // User must provide HP
    maxHp: 0, // User must provide HP
    initiative: 0,
    initiativeMod: 0, // Players roll initiative themselves
    charStatus: '',
    ac: player.ac,
    abilities: [],
  };
}

export function useGame() {
   const context = useContext(GameContext);
   if (context === undefined) {
     throw new Error('useGame must be used within GameProvider');
   }
   return context;
}

function getRandomBastionEvent(): string {
  const events = [
    "Bandits attack your Bastion!",
    "A wandering trader brings rare goods.",
    "A magical anomaly appears — arcane research spds up!",
    "Your bastion gains +10 gp from trade.",
    "One facility gets sabotaged!",
    "An NPC asks for sanctuary.",
    "Nothing happens this turn.",
    "You find a hidden vault: gain 1 uncommon magic item!",
  ];
  return events[Math.floor(Math.random() * events.length)];
}
