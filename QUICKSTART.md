# Quick Start Guide - D&D DM Screen React

## 📦 Project Created At
`/home/c228060/private-repos/dnd-dm-react`

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
cd /home/c228060/private-repos/dnd-dm-react
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```
This will start a local dev server (usually at `http://localhost:5173`)

### Step 3: Open in Browser
Navigate to the local URL shown in your terminal

## 📋 What You Have

A complete React + TypeScript D&D Dungeon Master utility with:

### 8 Functional Tabs
- ⚔️ **Encounter** - Manage monsters/enemies with HP, initiative, abilities
- 👥 **Players** - Track party member AC, passive perception/insight
- ☠️ **Death Saves** - Manage death saving throws
- 🎲 **Actions** - Quick reference for combat actions
- 📚 **Feats** - Searchable database of 70+ D&D 5e feats
- 🔗 **Links** - Store campaign-related links
- 🏰 **Bastions** - D&D 2024/2025 bastion mechanics
- 💾 **Data** - Export/import campaign backup

### Features
✅ Dark mode toggle  
✅ Automatic data persistence to localStorage  
✅ Type-safe with TypeScript  
✅ Responsive Bootstrap 5 UI  
✅ Full export/import capability  
✅ 8 creature abilities management  

## 🛠️ Build for Production
```bash
npm run build
```
Creates optimized files in `dist/` folder ready for deployment

## 📁 File Structure

```
src/
├── App.tsx                          # Main app with tab navigation
├── main.tsx                         # React entry point
├── index.css                        # All styles + dark mode
├── App.module.css                   # App-specific styles
├── context/
│   └── GameContext.tsx              # State management (2400+ lines)
└── components/
    └── tabs/
        ├── EncounterTab.tsx         # Creature management
        ├── PlayersTab.tsx           # Party management
        ├── DeathSavesTab.tsx        # Death saves
        ├── ActionsTab.tsx           # Combat actions
        ├── FeatsTab.tsx             # Feats database
        ├── LinksTab.tsx             # Link management
        ├── BastionTab.tsx           # Bastion mechanics
        └── DataTab.tsx              # Export/import
```

## 🔑 Key Technologies

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Bootstrap 5** - CSS framework
- **Context API** - State management

## 💾 Data Persistence

All your data is automatically saved to browser localStorage:
- Encounters/creatures
- Players
- Death saves
- Links
- Bastions (with notes)
- Campaign day counter
- Theme preference
- Sort preference

## ⚙️ Configuration Files Included

- `package.json` - Dependencies & scripts
- `vite.config.ts` - Build configuration
- `tsconfig.json` - TypeScript configuration
- `tsconfig.node.json` - Node TypeScript config
- `.gitignore` - Git ignore rules
- `index.html` - HTML template
- `README.md` - Full documentation
- `CONVERSION_NOTES.md` - Detailed conversion info

## 🎯 Next Steps

1. **Install & Run**
   ```bash
   npm install && npm run dev
   ```

2. **Test Features**
   - Add some encounters
   - Toggle dark mode
   - Export data

3. **Customize**
   - Modify styles in `src/index.css`
   - Add new components in `src/components/`
   - Extend `GameContext.tsx` for new features

4. **Deploy**
   ```bash
   npm run build
   # Upload dist/ folder to your hosting
   ```

## 📖 Full Documentation

See `README.md` for complete feature documentation and `CONVERSION_NOTES.md` for technical details.

## ✨ Highlights

This React version includes:
- **No jQuery** - Clean React/TypeScript
- **Better Organization** - Component-based architecture
- **Type Safety** - Full TypeScript coverage
- **Modern Patterns** - Hooks, Context API, React best practices
- **Responsive** - Works on mobile, tablet, desktop
- **Dark Mode** - Professional dark theme included
- **Data Export** - Full backup/restore functionality

---

**Ready to play!** 🎲
