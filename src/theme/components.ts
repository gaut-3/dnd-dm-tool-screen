/**
 * MUI Component Overrides
 * Centralized styling for all MUI components
 */

import { Components, Theme } from '@mui/material/styles';
import { darkPalette, lightPalette, shadows, spacing, transitions, borderRadius } from './tokens';

export const createComponentOverrides = (isDarkMode: boolean): Components<Theme> => {
  const palette = isDarkMode ? darkPalette : lightPalette;

  return {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          transition: transitions.standard,
        },
        html: {
          height: '100%',
        },
        body: {
          minHeight: '100%',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundImage: 'url(/background2.png)',
        },
        '#root': {
          minHeight: '100vh',
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: palette.background.paper,
          border: `1px solid ${palette.border.secondary}`,
          backdropFilter: 'blur(12px)',
          boxShadow: shadows.md,
          transition: transitions.standard,
          '&:hover': {
            boxShadow: shadows.lg,
            borderColor: palette.border.strong,
            transform: 'translateY(-2px)',
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: palette.background.paper,
          border: `1px solid ${palette.border.secondary}`,
          backdropFilter: 'blur(12px)',
        },
        elevation0: {
          boxShadow: 'none',
        },
        elevation1: {
          boxShadow: shadows.sm,
        },
        elevation2: {
          boxShadow: shadows.md,
        },
        elevation3: {
          boxShadow: shadows.lg,
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: isDarkMode ? 'rgba(21, 30, 44, 0.9)' : 'rgba(255, 251, 246, 0.96)',
            transition: transitions.fast,
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: palette.primary.main,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: palette.primary.main,
              boxShadow: `0 0 12px ${isDarkMode ? 'rgba(232, 180, 64, 0.3)' : 'rgba(168, 108, 26, 0.2)'}`,
            },
          },
          '& .MuiOutlinedInput-input::placeholder': {
            color: palette.text.secondary,
            opacity: 0.7,
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: palette.border.secondary,
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '1rem',
          transition: transitions.fast,
          '&:hover': {
            transform: 'translateY(-2px)',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
        },
        contained: {
          boxShadow: shadows.md,
          '&:hover': {
            boxShadow: shadows.lg,
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
        containedPrimary: {
          background: `linear-gradient(135deg, ${palette.primary.main} 0%, ${palette.primary.dark} 100%)`,
          '&:hover': {
            background: `linear-gradient(135deg, ${palette.primary.light} 0%, ${palette.primary.main} 100%)`,
          },
        },
        containedSecondary: {
          background: `linear-gradient(135deg, ${palette.secondary.main} 0%, ${palette.secondary.dark} 100%)`,
          '&:hover': {
            background: `linear-gradient(135deg, ${palette.secondary.light} 0%, ${palette.secondary.main} 100%)`,
          },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: palette.background.elevated,
          borderColor: palette.border.secondary,
          border: `1px solid ${palette.border.secondary}`,
          transition: transitions.fast,
          '&:hover': {
            backgroundColor: palette.background.paper,
            borderColor: palette.border.strong,
          },
        },
        colorPrimary: {
          backgroundColor: `${palette.primary.main}20`,
          color: palette.primary.main,
        },
        colorSecondary: {
          backgroundColor: `${palette.secondary.main}20`,
          color: palette.secondary.main,
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: isDarkMode ? 'rgba(21, 30, 44, 0.9)' : 'rgba(255, 251, 246, 0.96)',
          transition: transitions.fast,
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        root: {
          borderBottom: `2px solid ${palette.border.secondary}`,
          transition: transitions.standard,
        },
        indicator: {
          backgroundColor: palette.primary.main,
          height: '4px',
          borderRadius: '2px 2px 0 0',
          boxShadow: `0 0 12px ${palette.primary.main}40`,
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: 500,
          transition: transitions.fast,
          color: palette.text.secondary,
          '&:hover': {
            color: palette.primary.main,
            backgroundColor: `${palette.primary.main}10`,
          },
          '&.Mui-selected': {
            color: palette.primary.main,
            fontWeight: 600,
          },
        },
      },
    },

    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: palette.background.paper,
          border: `1px solid ${palette.border.secondary}`,
          backdropFilter: 'blur(12px)',
          boxShadow: shadows.xl,
        },
        backdrop: {
          backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(4px)',
        },
      },
    },

    MuiDialogTitle: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${palette.border.secondary}`,
          fontSize: '1.5rem',
          fontWeight: 700,
          letterSpacing: '0.05em',
        },
      },
    },

    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: palette.primary.main,
        },
      },
    },

    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: palette.border.secondary,
          height: '6px',
          borderRadius: '3px',
        },
        bar: {
          background: `linear-gradient(90deg, ${palette.primary.main} 0%, ${palette.secondary.main} 100%)`,
          borderRadius: '3px',
        },
      },
    },

    MuiAlert: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(8px)',
          border: '1px solid',
          borderRadius: borderRadius.md,
        },
        standardSuccess: {
          backgroundColor: `${palette.success}20`,
          borderColor: palette.success,
          color: palette.success,
        },
        standardWarning: {
          backgroundColor: `${palette.warning}20`,
          borderColor: palette.warning,
          color: palette.warning,
        },
        standardError: {
          backgroundColor: `${palette.error}20`,
          borderColor: palette.error,
          color: palette.error,
        },
        standardInfo: {
          backgroundColor: `${palette.info}20`,
          borderColor: palette.info,
          color: palette.info,
        },
      },
    },

    MuiSnackbar: {
      styleOverrides: {
        root: {
          animation: 'slideIn 0.3s ease-out',
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: transitions.fast,
          '&:hover': {
            backgroundColor: `${palette.primary.main}15`,
            color: palette.primary.main,
          },
        },
      },
    },

    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
        },
      },
    },

    MuiListItem: {
      styleOverrides: {
        root: {
          transition: transitions.fast,
          '&:hover': {
            backgroundColor: palette.border.secondary,
          },
        },
      },
    },

    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: palette.background.paper,
          border: `1px solid ${palette.border.secondary}`,
          backdropFilter: 'blur(8px)',
          '&:before': {
            display: 'none',
          },
          '&.Mui-expanded': {
            margin: 0,
          },
        },
      },
    },

    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          transition: transitions.fast,
          '&:hover': {
            backgroundColor: palette.border.secondary,
          },
          '&.Mui-expanded': {
            borderBottom: `1px solid ${palette.border.secondary}`,
          },
        },
      },
    },

    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          transition: transitions.fast,
        },
      },
    },

    MuiSwitch: {
      styleOverrides: {
        root: {
          '& .MuiSwitch-switchBase.Mui-checked': {
            color: palette.primary.main,
            '& + .MuiSwitch-track': {
              backgroundColor: `${palette.primary.main}50`,
            },
          },
        },
      },
    },

    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: spacing.lg,
          paddingRight: spacing.lg,
          '@media (max-width: 600px)': {
            paddingLeft: spacing.md,
            paddingRight: spacing.md,
          },
        },
      },
    },
  };
};
