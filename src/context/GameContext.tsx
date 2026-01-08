import { ReactNode, createContext, useContext, useState, useEffect } from 'react';

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
};

export function GameProvider({ children }: { children: ReactNode }) {
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

  // Sync state
  const [syncStatus, setSyncStatus] = useState<'idle' | 'syncing' | 'synced' | 'error'>('idle');
  const [syncError, setSyncError] = useState<string | null>(null);

  const manualSync = async () => {
    // This will be implemented when auth is available
    // For now, it's a placeholder
    console.log('Manual sync triggered');
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
      });
    },
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
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
