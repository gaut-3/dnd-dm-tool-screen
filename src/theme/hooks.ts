/**
 * Theme Hooks
 * Custom hooks for accessing theme values and utilities
 */

import { useTheme as muiUseTheme } from '@mui/material/styles';
import { Theme } from '@mui/material/styles';
import { darkPalette, lightPalette, spacing, shadows, transitions, borderRadius } from './tokens';

export const useAppTheme = (): Theme => {
  return muiUseTheme();
};

export const useThemeTokens = () => {
  const theme = useAppTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return {
    palette: isDarkMode ? darkPalette : lightPalette,
    spacing,
    shadows,
    transitions,
    borderRadius,
    isDarkMode,
  };
};

/**
 * Get glassmorphism style properties
 */
export const useGlassmorphismStyle = () => {
  const { palette } = useThemeTokens();

  return {
    backgroundColor: palette.background.paper,
    backdropFilter: 'blur(12px)',
    border: `1px solid ${palette.border.secondary}`,
  };
};

/**
 * Get card elevation style
 */
export const useCardElevation = () => {
  const { shadows: shadowTokens } = useThemeTokens();

  return {
    boxShadow: shadowTokens.md,
    '&:hover': {
      boxShadow: shadowTokens.lg,
    },
  };
};
