# AGENTS.md - Development Guidelines for AI Coding Agents

This guide contains essential information for AI agents developing in the `dnd-dm-react` repository.

## Project Overview

A modern React 18 + TypeScript application for D&D 5e Dungeon Master utilities. Features include encounter tracking, player management, death saves, combat actions, feats database, and Firestore-based data persistence.

## Build, Lint, and Test Commands

### Development
- **Start dev server**: `npm run dev` - Runs Vite dev server on http://localhost:5173
- **Build for production**: `npm run build` - Compiles TypeScript and bundles with Vite
- **Preview production build**: `npm run preview` - Locally preview the production build
- **Lint code**: `npm run lint` - Runs ESLint with strict settings (no warnings allowed)

### Running Individual Tests
The project does not have a test suite configured yet. If unit tests are added, they should follow Jest conventions:
- `npm test -- [path/to/test.ts]` - Run a specific test file
- `npm test -- --testNamePattern="pattern"` - Run tests matching a name pattern

## Code Style Guidelines

### Imports and Module Organization
- **Import order**: React/external libraries → relative imports → types
- **Use named exports** for components, utilities, and context hooks (prefer over default exports)
- **ESM modules**: Project uses `"type": "module"` in package.json; always use ES6 import syntax
- **Absolute paths not configured**: Use relative imports like `'../../context/GameContext'`
- **Import destructuring**: Prefer destructuring for multiple imports from same module:
  ```typescript
  import { useState, useEffect } from 'react';
  import { TextField, Button, Card } from '@mui/material';
  ```

### Formatting and Spacing
- **Indentation**: 2 spaces (ESLint enforced)
- **Line length**: Keep reasonable; ESLint will catch issues
- **Semicolons**: Always use semicolons (ESLint enforced)
- **Trailing commas**: Use in multi-line objects/arrays for cleaner diffs
- **Quotes**: Double quotes preferred (ESLint enforced)

### TypeScript and Type Safety
- **Enable strict mode**: Project uses `"strict": true` - all types must be explicit
- **Type exports**: Export interfaces and types alongside implementations:
  ```typescript
  export interface Character {
    name: string;
    hp: number;
    maxHp: number;
    // ...
  }
  ```
- **Avoid `any`**: Use proper typing or `unknown` with type guards
- **Unused variables/parameters**: Not allowed; use `_prefix` for intentionally unused variables
  - Example: `const [_syncStatus, _setSyncStatus] = useState<SyncStatus>('idle');`
- **No implicit returns**: Always specify return types for functions:
  ```typescript
  function addCharacter(character: Character): void { }
  export async function syncToFirebase(): Promise<void> { }
  ```

### Naming Conventions
- **Components**: PascalCase (e.g., `EncounterTab.tsx`, `LoginPage.tsx`)
- **Utilities/Services**: camelCase (e.g., `syncManager.ts`, `firebase.ts`)
- **Hooks**: camelCase, prefixed with `use` (e.g., `useGame`, `useAuth`)
- **Constants**: UPPER_SNAKE_CASE for true constants
- **Context objects**: Use descriptive PascalCase for context creators (e.g., `GameContext`, `AuthContext`)
- **State variables**: camelCase (e.g., `activeTab`, `formData`, `darkMode`)

### React and Hooks Patterns
- **Functional components only**: No class components
- **Custom hooks**: Place in context files or utility files; export for reuse
- **Hook usage**: Follow Rules of Hooks - always at top level, same order every render
- **Default exports for components**: Main component exports use default export:
  ```typescript
  export default function EncounterTab() { }
  ```
- **Context providers**: Wrap multiple contexts at app root via `App.tsx`
- **State management**: Use React Context API (GameContext, AuthContext) - no Redux

### Error Handling
- **Firebase errors**: Catch and convert to user-friendly messages:
  ```typescript
  try {
    await syncToFirebase();
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Sync failed';
    console.error('Sync error:', errorMessage);
    onError(errorMessage);
  }
- **Null/undefined checks**: Use optional chaining (`?.`) and nullish coalescing (`??`):
  ```typescript
  const ac = formData.ac ? parseInt(formData.ac) : null;
  const initiative = character.initiative || 0;
  ```
- **Input validation**: Always validate user input before operations:
  ```typescript
  if (!formData.name.trim() || !formData.hp) return;
  ```

### Comments and Documentation
- **JSDoc for public functions**: Document parameters and return types:
  ```typescript
  /**
   * Start auto-sync with 5-minute interval
   */
  startAutoSync(getGameState, onStatusChange, onError): void
  ```
- **Explain why, not what**: Comments should explain business logic, not repeat the code
- **TODO comments**: Include context and ticket reference if available

## Project Structure

```
src/
├── components/tabs/        # UI tab components (EncounterTab, PlayersTab, etc.)
├── context/               # React Context (GameContext, AuthContext)
├── services/              # Firebase, sync manager
├── pages/                 # Full pages (LoginPage)
├── App.tsx               # Main app with theme setup
└── main.tsx              # React root entry point
```

## Dependencies
- **React 18**: UI framework
- **TypeScript 5**: Type safety
- **Vite 5**: Build tool and dev server
- **@mui/material**: Component library
- **Firebase 12**: Authentication and Firestore
- **Bootstrap 5**: CSS framework (legacy, being phased out)

## ESLint Configuration

ESLint runs with maximum strictness:
- `--max-warnings 0`: No warnings allowed to pass lint
- Reports unused disable directives
- Enforces all rules in configured rulesets

**Before committing**, ensure: `npm run lint` passes with no warnings or errors.

## TypeScript Configuration

Key compiler options enabled:
- `strict: true` - All strict checks enabled
- `noUnusedLocals: true` - Unused variables not allowed
- `noUnusedParameters: true` - Unused parameters not allowed
- `noFallthroughCasesInSwitch: true` - Switch cases must return/break
- `jsx: react-jsx` - New JSX transform
- `skipLibCheck: true` - Skip library type checking for speed

## Common Patterns in Codebase

### State Management with Context
```typescript
const { encounter, addCharacter, removeCharacter } = useGame();
```

### Form Handling
```typescript
const [formData, setFormData] = useState({ name: '', hp: '' });
const handleInputChange = (field: string, value: string) => {
  setFormData((prev) => ({ ...prev, [field]: value }));
};
```

### Async Operations with Status
```typescript
type SyncStatus = 'idle' | 'syncing' | 'synced' | 'error';
const [syncStatus, setSyncStatus] = useState<SyncStatus>('idle');
```

## Before Making Changes

1. Run `npm run lint` to ensure code style compliance
2. Check `tsconfig.json` for all enabled strict options
3. Verify no `any` types are introduced
4. Test builds with `npm run build` before committing
5. Ensure no unused imports or variables remain

## CI/CD and Deployment

GitHub Actions (`.github/workflows/`) automatically:
1. Runs `npm run lint` on all PRs and pushes
2. Runs `npm run build` to verify production build
3. Deploys to Firebase Hosting on main branch
4. Requires all checks to pass before merge

## Quick Reference Checklist

- [ ] Follow ESLint rules (run `npm run lint`)
- [ ] Use TypeScript strict mode
- [ ] Export types alongside implementations
- [ ] Avoid `any` types
- [ ] Validate user input
- [ ] Use meaningful variable names
- [ ] Add JSDoc for public functions
- [ ] Handle errors explicitly
- [ ] Test build: `npm run build`
