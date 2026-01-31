/**
 * Typography Configuration
 * Defines typography settings for the application
 */

import { fontFamily, typography } from './tokens';

export const createTypographyOptions = () => {
  return {
    fontFamily: fontFamily.primary,
    fontSize: 15,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: typography.h1.fontSize,
      fontWeight: typography.h1.fontWeight,
      letterSpacing: typography.h1.letterSpacing,
      lineHeight: typography.h1.lineHeight,
    },
    h2: {
      fontSize: typography.h2.fontSize,
      fontWeight: typography.h2.fontWeight,
      letterSpacing: typography.h2.letterSpacing,
      lineHeight: typography.h2.lineHeight,
    },
    h3: {
      fontSize: typography.h3.fontSize,
      fontWeight: typography.h3.fontWeight,
      letterSpacing: typography.h3.letterSpacing,
      lineHeight: typography.h3.lineHeight,
    },
    h4: {
      fontSize: typography.h4.fontSize,
      fontWeight: typography.h4.fontWeight,
      letterSpacing: typography.h4.letterSpacing,
      lineHeight: typography.h4.lineHeight,
    },
    h5: {
      fontSize: typography.h5.fontSize,
      fontWeight: typography.h5.fontWeight,
      letterSpacing: typography.h5.letterSpacing,
      lineHeight: typography.h5.lineHeight,
    },
    h6: {
      fontSize: typography.h6.fontSize,
      fontWeight: typography.h6.fontWeight,
      letterSpacing: typography.h6.letterSpacing,
      lineHeight: typography.h6.lineHeight,
    },
    body1: {
      fontSize: typography.body1.fontSize,
      fontWeight: typography.body1.fontWeight,
      lineHeight: typography.body1.lineHeight,
    },
    body2: {
      fontSize: typography.body2.fontSize,
      fontWeight: typography.body2.fontWeight,
      lineHeight: typography.body2.lineHeight,
    },
    button: {
      fontSize: typography.button.fontSize,
      fontWeight: typography.button.fontWeight,
      textTransform: 'none' as const,
      letterSpacing: typography.button.letterSpacing,
    },
    caption: {
      fontSize: typography.caption.fontSize,
      fontWeight: typography.caption.fontWeight,
      lineHeight: typography.caption.lineHeight,
    },
  };
};
