/**
 * Design Tokens - Centralized color, spacing, and shadow definitions
 * Used across the application for consistency and maintainability
 */

// ============================================================================
// COLOR PALETTE - Dark Mode (Enhanced Medieval Fantasy)
// ============================================================================

export const darkPalette = {
  // Primary colors
  primary: {
    main: '#d6a84f',      // Antique Gold
    light: '#e6c56d',     // Brighter gold
    dark: '#b88933',      // Warm bronze
    darker: '#8f6926',    // Deep bronze
  },
  
  // Secondary colors
  secondary: {
    main: '#3f5e86',      // Steel Blue
    light: '#5677a3',     // Misty blue
    dark: '#2e4666',      // Deep slate
    darker: '#22354f',    // Night slate
  },
  
  // Tertiary colors (magical highlights)
  tertiary: {
    main: '#6aa7bf',      // Arctic blue
    light: '#8fc0d4',     // Light icy blue
    dark: '#4e8aa4',      // Deep teal
  },
  
  // Semantic colors
  success: '#4bb369',     // Verdant green
  warning: '#d08a34',     // Burnished amber
  error: '#d95c5c',       // Crimson red
  info: '#5fa3d1',        // Cool blue
  
  // Background colors
  background: {
    default: '#0b111a',   // Midnight navy
    paper: '#111827',     // Deep indigo
    elevated: '#1a2334',  // Storm blue
  },
  
  // Text colors
  text: {
    primary: '#f7f1e6',   // Warm ivory
    secondary: '#c2b8a6', // Muted parchment
    disabled: '#7e7464',  // Weathered stone
  },
  
  // Borders and dividers
  border: {
    main: 'rgba(214, 168, 79, 0.18)',     // Subtle gold tint
    secondary: 'rgba(63, 94, 134, 0.22)', // Slate tint
    strong: 'rgba(214, 168, 79, 0.38)',   // Stronger gold
  },
  
  divider: 'rgba(63, 94, 134, 0.22)',
};

// ============================================================================
// COLOR PALETTE - Light Mode (Parchment with Vibrant Accents)
// ============================================================================

export const lightPalette = {
  // Primary colors
  primary: {
    main: '#b07a2b',      // Aged brass
    light: '#c9924c',     // Warm brass
    dark: '#8f5f1f',      // Rustic bronze
    darker: '#6f4718',    // Deep bronze
  },
  
  // Secondary colors
  secondary: {
    main: '#46648a',      // Slate blue
    light: '#5f7aa1',     // Muted blue
    dark: '#334d6f',      // Deep slate
  },
  
  // Tertiary colors
  tertiary: {
    main: '#2f86b3',      // Deep teal
    light: '#4f9cc2',     // Lighter teal
    dark: '#236b94',      // Darker teal
  },
  
  // Semantic colors
  success: '#2f7a3a',     // Forest green
  warning: '#c86c1a',     // Burnished orange
  error: '#b83a4a',       // Deep crimson
  info: '#2f86b3',        // Deep teal
  
  // Background colors
  background: {
    default: '#f7f1e5',   // Warm ivory
    paper: '#fff7ec',     // Cream with warmth
    elevated: '#efe5d6',  // Aged parchment
  },
  
  // Text colors
  text: {
    primary: '#2b2016',   // Dark brown
    secondary: '#5f5247', // Medium brown
    disabled: '#9a8c7c',  // Dimmed
  },
  
  // Borders and dividers
  border: {
    main: 'rgba(176, 122, 43, 0.22)',    // Subtle brass tint
    secondary: 'rgba(70, 100, 138, 0.2)', // Slate tint
    strong: 'rgba(176, 122, 43, 0.35)',  // Stronger brass
  },
  
  divider: 'rgba(70, 100, 138, 0.16)',
};

// ============================================================================
// SPACING SYSTEM (based on 8px grid)
// ============================================================================

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  xxl: '32px',
  xxxl: '48px',
};

// ============================================================================
// SHADOWS - Layered depth
// ============================================================================

export const shadows = {
  // Subtle elevation
  sm: '0 2px 8px rgba(0, 0, 0, 0.15)',
  
  // Standard elevation
  md: '0 4px 16px rgba(0, 0, 0, 0.25)',
  
  // Raised elevation
  lg: '0 8px 32px rgba(0, 0, 0, 0.35)',
  
  // High elevation
  xl: '0 12px 48px rgba(0, 0, 0, 0.45)',
  
  // Glow effect - Gold
  glow_gold: '0 0 16px rgba(232, 180, 64, 0.3), 0 0 32px rgba(232, 180, 64, 0.15)',
  
  // Glow effect - Purple
  glow_purple: '0 0 16px rgba(139, 95, 191, 0.3), 0 0 32px rgba(139, 95, 191, 0.15)',
  
  // Inset shadow (for depth)
  inset: 'inset 0 2px 8px rgba(0, 0, 0, 0.2)',
};

// ============================================================================
// BORDER RADIUS
// ============================================================================

export const borderRadius = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
};

// ============================================================================
// TRANSITIONS & ANIMATIONS
// ============================================================================

export const transitions = {
  // Fast interactions
  fast: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
  
  // Standard transitions
  standard: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  
  // Slow transitions
  slow: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  
  // Easing functions
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  },
};

// ============================================================================
// TYPOGRAPHY TOKENS
// ============================================================================

export const fontFamily = {
  primary: '"Cinzel", "Cormorant Garamond", "Garamond", "Georgia", serif',
  secondary: '"Roboto", "Helvetica", "Arial", sans-serif',
};

export const typography = {
  h1: {
    fontSize: '3.5rem',
    fontWeight: 700,
    letterSpacing: '0.1em',
    lineHeight: 1.2,
  },
  h2: {
    fontSize: '2.5rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
    lineHeight: 1.3,
  },
  h3: {
    fontSize: '2rem',
    fontWeight: 700,
    letterSpacing: '0.06em',
    lineHeight: 1.3,
  },
  h4: {
    fontSize: '1.5rem',
    fontWeight: 600,
    letterSpacing: '0.05em',
    lineHeight: 1.4,
  },
  h5: {
    fontSize: '1.25rem',
    fontWeight: 600,
    letterSpacing: '0.03em',
    lineHeight: 1.5,
  },
  h6: {
    fontSize: '1rem',
    fontWeight: 600,
    letterSpacing: '0.02em',
    lineHeight: 1.5,
  },
  body1: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.6,
  },
  body2: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.6,
  },
  button: {
    fontSize: '1rem',
    fontWeight: 600,
    textTransform: 'none',
    letterSpacing: '0.02em',
  },
  caption: {
    fontSize: '0.75rem',
    fontWeight: 500,
    lineHeight: 1.5,
  },
};

// ============================================================================
// Z-INDEX SCALE
// ============================================================================

export const zIndex = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
};
