/**
 * Palette Configuration
 * Converts design tokens into MUI palette format
 */

import { PaletteOptions } from '@mui/material/styles';
import { darkPalette, lightPalette } from './tokens';

export const createPaletteOptions = (isDarkMode: boolean): PaletteOptions => {
  const palette = isDarkMode ? darkPalette : lightPalette;

  return {
    mode: isDarkMode ? 'dark' : 'light',
    primary: {
      main: palette.primary.main,
      light: palette.primary.light,
      dark: palette.primary.dark,
      contrastText: isDarkMode ? '#0a0e13' : '#ffffff',
    },
    secondary: {
      main: palette.secondary.main,
      light: palette.secondary.light,
      dark: palette.secondary.dark,
      contrastText: isDarkMode ? '#0a0e13' : '#ffffff',
    },
    success: {
      main: palette.success,
      light: isDarkMode ? '#69e081' : '#4caf50',
      dark: isDarkMode ? '#3db654' : '#2e7d32',
    },
    warning: {
      main: palette.warning,
      light: isDarkMode ? '#ffb946' : '#ffb74d',
      dark: isDarkMode ? '#cc8400' : '#f57c00',
    },
    error: {
      main: palette.error,
      light: isDarkMode ? '#ff9999' : '#ef5350',
      dark: isDarkMode ? '#d94545' : '#c62828',
    },
    info: {
      main: palette.info,
      light: isDarkMode ? '#6bb5ff' : '#64b5f6',
      dark: isDarkMode ? '#3d94e8' : '#1976d2',
    },
    background: {
      default: palette.background.default,
      paper: palette.background.paper,
    },
    text: {
      primary: palette.text.primary,
      secondary: palette.text.secondary,
      disabled: palette.text.disabled,
    },
    divider: palette.divider,
  };
};
