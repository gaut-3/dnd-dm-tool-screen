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
    main: '#e8b440',      // Vibrant Gold
    light: '#f0c85a',     // Lighter gold
    dark: '#d4a038',      // Darker gold
    darker: '#c09030',    // Very dark gold
  },
  
  // Secondary colors
  secondary: {
    main: '#8b5fbf',      // Deep Purple
    light: '#a876d4',     // Lighter purple
    dark: '#6f4fa6',      // Darker purple
    darker: '#5a3d8f',    // Very dark purple
  },
  
  // Tertiary colors (magical highlights)
  tertiary: {
    main: '#4da6ff',      // Bright Azure
    light: '#6bb5ff',     // Lighter azure
    dark: '#3d94e8',      // Darker azure
  },
  
  // Semantic colors
  success: '#51cf66',     // Vibrant green
  warning: '#ffa500',     // Bright orange
  error: '#ff6b6b',       // Crimson red
  info: '#4da6ff',        // Azure blue
  
  // Background colors
  background: {
    default: '#0a0e13',   // Darker black-navy
    paper: '#0f1419',     // Deep navy
    elevated: '#151d2b',  // Slightly lighter for depth
  },
  
  // Text colors
  text: {
    primary: '#f0f4fa',   // Light, highly readable
    secondary: '#b0b9c8', // Soft gray
    disabled: '#5a6374',  // Dimmed
  },
  
  // Borders and dividers
  border: {
    main: 'rgba(232, 180, 64, 0.15)',    // Subtle gold tint
    secondary: 'rgba(139, 95, 191, 0.15)', // Purple tint
    strong: 'rgba(232, 180, 64, 0.3)',   // Stronger gold
  },
  
  divider: 'rgba(139, 95, 191, 0.15)',
};

// ============================================================================
// COLOR PALETTE - Light Mode (Parchment with Vibrant Accents)
// ============================================================================

export const lightPalette = {
  // Primary colors
  primary: {
    main: '#a86c1a',      // Rich Leather Brown
    light: '#c9844a',     // Lighter brown
    dark: '#8d5b14',      // Darker brown
    darker: '#6d4610',    // Very dark brown
  },
  
  // Secondary colors
  secondary: {
    main: '#6a4ba1',      // Jewel Purple
    light: '#8b6bb8',     // Lighter purple
    dark: '#5a3d8f',      // Darker purple
  },
  
  // Tertiary colors
  tertiary: {
    main: '#1e7ac2',      // Deep Blue
    light: '#4a95d4',     // Lighter blue
    dark: '#1a5fa6',      // Darker blue
  },
  
  // Semantic colors
  success: '#2f7a3a',     // Forest green
  warning: '#d97706',     // Deep orange
  error: '#c41e3a',       // Deep crimson
  info: '#1e7ac2',        // Deep blue
  
  // Background colors
  background: {
    default: '#faf7f2',   // Warm ivory
    paper: '#fff9f3',     // Cream with warmth
    elevated: '#f5f0e8',  // Slightly darker for depth
  },
  
  // Text colors
  text: {
    primary: '#1f1a13',   // Dark brown
    secondary: '#6b5d4f', // Medium brown
    disabled: '#a69a8f',  // Dimmed
  },
  
  // Borders and dividers
  border: {
    main: 'rgba(168, 108, 26, 0.2)',    // Subtle brown tint
    secondary: 'rgba(106, 75, 161, 0.2)', // Purple tint
    strong: 'rgba(168, 108, 26, 0.35)',  // Stronger brown
  },
  
  divider: 'rgba(106, 75, 161, 0.15)',
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
