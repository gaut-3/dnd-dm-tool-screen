/**
 * Theme Factory
 * Creates a complete MUI theme with all customizations
 */

import { createTheme, Theme } from '@mui/material/styles';
import { createPaletteOptions } from './palette';
import { createTypographyOptions } from './typography';
import { createComponentOverrides } from './components';

export const createAppTheme = (isDarkMode: boolean): Theme => {
  const paletteOptions = createPaletteOptions(isDarkMode);
  const typographyOptions = createTypographyOptions();
  const componentOverrides = createComponentOverrides(isDarkMode);

  const theme = createTheme(
    {
      palette: paletteOptions,
      typography: typographyOptions,
      components: componentOverrides,
    },
    {
      palette: paletteOptions,
    }
  );

  return theme;
};
