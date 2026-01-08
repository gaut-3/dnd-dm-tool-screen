# D&D DM Screen & Encounter Tracker - React Version

A modern React conversion of the D&D Dungeon Master Screen and Encounter Tracker application. This tool provides comprehensive utilities for D&D 5e campaign management.

## Features

- **Encounter Tracking**: Add creatures, track HP, initiative, AC, and conditions
- **Player Management**: Track passive perception, insight, and AC for all party members
- **Death Saves**: Manage death saving throws for downed characters
- **Combat Actions**: Quick reference for all combat actions
- **Feats Database**: Searchable, categorized D&D 5e feats
- **Useful Links**: Store and manage campaign-related links
- **Bastions**: Full D&D 2024/2025 bastion mechanics with facilities and orders
- **Dark Mode**: Toggle between light and dark themes
- **Data Export/Import**: Backup and restore all campaign data

## Tech Stack

- React 18
- TypeScript
- Vite
- Bootstrap 5
- Context API for state management

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   └── tabs/
│       ├── EncounterTab.tsx
│       ├── PlayersTab.tsx
│       ├── DeathSavesTab.tsx
│       ├── ActionsTab.tsx
│       ├── FeatsTab.tsx
│       ├── LinksTab.tsx
│       ├── BastionTab.tsx
│       └── DataTab.tsx
├── context/
│   └── GameContext.tsx          # Global state management
├── App.tsx                      # Main component
├── main.tsx                     # Entry point
└── index.css                    # Global styles
```

## State Management

The application uses React Context API (`GameContext`) to manage:
- Encounter data
- Players
- Death saves
- Links
- Bastions
- Campaign day counter
- Dark mode preference
- Sort preferences

All state is automatically persisted to localStorage.

## Usage Tips

1. **Encounter Tab**: Add creatures and track their status during combat. Use "Sort by" to switch between initiative and alphabetical order.

2. **Initiative**: Roll initiative using the 🎲 button, or set it manually when adding a creature.

3. **Abilities**: Track spell uses, limited actions, and abilities per creature. Add custom abilities with max uses.

4. **Bastions**: Track bastion activities with 7-day turns. Use the day counter and "Process Turns" button to advance time.

5. **Export/Import**: Use the Data tab to backup your campaign. Exports create a JSON file you can restore later.

6. **Dark Mode**: Toggle the dark mode switch in the top-right to switch themes. Your preference is saved.

## Conversion Notes

This React version maintains full feature parity with the original vanilla JavaScript application while providing:
- Better component organization
- Improved state management
- Type safety with TypeScript
- Modern React patterns (hooks, context API)

## Future Enhancements

Potential improvements could include:
- Local database support (IndexedDB)
- Multi-session support
- Character templates
- Advanced combat calculations
- Audio notifications
- Collaborative features
