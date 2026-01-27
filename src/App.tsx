import { GameProvider, useGame } from './context/GameContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import EncounterTab from './components/tabs/EncounterTab';
import PlayersTab from './components/tabs/PlayersTab';
import DeathSavesTab from './components/tabs/DeathSavesTab';
import ActionsTab from './components/tabs/ActionsTab';
import FeatsTab from './components/tabs/FeatsTab';
import LinksTab from './components/tabs/LinksTab';
import BastionTab from './components/tabs/BastionTab';
import NPCNameGeneratorTab from './components/tabs/NPCNameGeneratorTab';
import DataTab from './components/tabs/DataTab';
import ConflictResolutionDialog from './components/ConflictResolutionDialog';
import LoginPage from './pages/LoginPage';
import { useState, useEffect, ReactNode } from 'react';
import {
  Container,
  Box,
  Tabs,
  Tab,
  Typography,
  FormControlLabel,
  Switch,
  Paper,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Button,
  Chip,
  CircularProgress,
  Snackbar,
  Alert,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

function AppContent() {
   const { darkMode, toggleDarkMode, syncStatus, syncError, syncDidUpload, manualSync, conflictState, handleConflictResolution } = useGame();
   const { user, logout } = useAuth();
   const [activeTab, setActiveTab] = useState(0);
   const [toastMessage, setToastMessage] = useState<string | null>(null);
   const [toastSeverity, setToastSeverity] = useState<'success' | 'error' | 'info'>('success');
   const [showToast, setShowToast] = useState(false);
   const backgroundImageUrl = new URL('../backgrounds/background2.png', import.meta.url).toString();

    // Show toast notifications for sync status
    useEffect(() => {
      if (syncStatus === 'synced' && syncDidUpload) {
        setToastMessage('✓ Data synced successfully');
        setToastSeverity('success');
        setShowToast(true);
      } else if (syncStatus === 'error' && syncError) {
        setToastMessage(`✕ Sync failed: ${syncError}`);
        setToastSeverity('error');
        setShowToast(true);
      }
    }, [syncStatus, syncError, syncDidUpload]);

  const themeColors = darkMode
    ? {
        background: '#0b0f14',
        paper: '#111822',
        surface: 'rgba(14, 20, 31, 0.86)',
        panel: 'rgba(18, 26, 40, 0.82)',
        border: 'rgba(148, 183, 222, 0.24)',
        borderStrong: 'rgba(196, 222, 244, 0.35)',
        accent: '#f4c77a',
        accentStrong: '#f7d9a4',
        secondary: '#79b7d9',
        text: '#e7eef8',
        textMuted: 'rgba(230, 238, 248, 0.78)',
        shadow: 'rgba(3, 6, 12, 0.6)',
        glow: 'rgba(48, 71, 96, 0.6)',
        tabActive: 'rgba(26, 36, 54, 0.9)',
        tabHover: 'rgba(24, 34, 52, 0.7)',
      }
    : {
        background: '#f6efe6',
        paper: '#fbf6ef',
        surface: 'rgba(255, 250, 242, 0.92)',
        panel: 'rgba(253, 249, 242, 0.9)',
        border: 'rgba(155, 115, 71, 0.28)',
        borderStrong: 'rgba(155, 115, 71, 0.45)',
        accent: '#8d5b2c',
        accentStrong: '#a5652f',
        secondary: '#3d6f8f',
        text: '#2b2117',
        textMuted: 'rgba(43, 33, 23, 0.72)',
        shadow: 'rgba(39, 29, 17, 0.16)',
        glow: 'rgba(170, 122, 72, 0.24)',
        tabActive: 'rgba(255, 248, 236, 0.96)',
        tabHover: 'rgba(248, 239, 224, 0.82)',
      };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: themeColors.accent,
      },
      secondary: {
        main: themeColors.secondary,
      },
      background: {
        default: themeColors.background,
        paper: themeColors.paper,
      },
      divider: themeColors.border,
      text: {
        primary: themeColors.text,
        secondary: themeColors.textMuted,
      },
    },
    typography: {
      fontFamily: '"EB Garamond", "Garamond", "Georgia", serif',
      h1: {
        fontFamily: '"Cinzel", "Cormorant Garamond", "Garamond", "Georgia", serif',
        fontWeight: 700,
        letterSpacing: '0.05em',
      },
      h2: {
        fontFamily: '"Cinzel", "Cormorant Garamond", "Garamond", "Georgia", serif',
        fontWeight: 700,
        letterSpacing: '0.05em',
      },
      h3: {
        fontFamily: '"Cinzel", "Cormorant Garamond", "Garamond", "Georgia", serif',
        fontWeight: 700,
        letterSpacing: '0.06em',
      },
      h4: {
        fontFamily: '"Cinzel", "Cormorant Garamond", "Garamond", "Georgia", serif',
        fontWeight: 700,
        letterSpacing: '0.04em',
      },
      h5: {
        fontFamily: '"Cinzel", "Cormorant Garamond", "Garamond", "Georgia", serif',
        fontWeight: 600,
      },
      h6: {
        fontFamily: '"Cinzel", "Cormorant Garamond", "Garamond", "Georgia", serif',
        fontWeight: 600,
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.6,
      },
      body2: {
        fontSize: '0.95rem',
        lineHeight: 1.55,
      },
      subtitle1: {
        fontSize: '1.02rem',
        lineHeight: 1.55,
      },
      subtitle2: {
        fontSize: '0.95rem',
        lineHeight: 1.5,
        fontWeight: 600,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: themeColors.background,
            backgroundImage: `radial-gradient(circle at top, ${
              darkMode
                ? 'rgba(6, 8, 12, 0.95)'
                : 'rgba(255, 248, 236, 0.92)'
            } 0%, ${
              darkMode
                ? 'rgba(6, 8, 12, 0.35)'
                : 'rgba(245, 236, 224, 0.4)'
            } 55%, ${
              darkMode
                ? 'rgba(6, 8, 12, 0.85)'
                : 'rgba(229, 214, 196, 0.55)'
            } 100%), linear-gradient(135deg, ${
              darkMode
                ? 'rgba(10, 14, 20, 0.88)'
                : 'rgba(253, 247, 238, 0.9)'
            } 0%, ${
              darkMode
                ? 'rgba(16, 22, 32, 0.7)'
                : 'rgba(243, 233, 219, 0.82)'
            } 60%, ${
              darkMode
                ? 'rgba(12, 16, 24, 0.82)'
                : 'rgba(233, 220, 203, 0.7)'
            } 100%), url(${backgroundImageUrl})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            color: themeColors.text,
            minHeight: '100%',
          },
          '#root': {
            minHeight: '100%',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: themeColors.panel,
            border: `1px solid ${themeColors.border}`,
            borderRadius: 16,
            boxShadow: `0 16px 32px ${themeColors.shadow}`,
            backdropFilter: 'blur(6px)',
            '&:hover': {
              boxShadow: `0 20px 36px ${themeColors.shadow}`,
              borderColor: themeColors.borderStrong,
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: themeColors.surface,
            backgroundImage: darkMode
              ? 'linear-gradient(145deg, rgba(20, 28, 41, 0.92) 0%, rgba(12, 18, 28, 0.95) 100%)'
              : 'linear-gradient(145deg, rgba(255, 252, 248, 0.96) 0%, rgba(245, 236, 224, 0.92) 100%)',
            border: `1px solid ${themeColors.border}`,
            borderRadius: 18,
            backdropFilter: 'blur(8px)',
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              backgroundColor: darkMode ? 'rgba(21, 30, 44, 0.9)' : 'rgba(255, 251, 246, 0.96)',
              borderColor: themeColors.border,
              '&:hover fieldset': {
                borderColor: themeColors.accent,
              },
              '&.Mui-focused fieldset': {
                borderColor: themeColors.accentStrong,
                boxShadow: `0 0 0 3px ${themeColors.glow}`,
              },
            },
            '& .MuiOutlinedInput-input': {
              color: themeColors.text,
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: 12,
            letterSpacing: '0.02em',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            backgroundColor: darkMode ? 'rgba(26, 36, 54, 0.92)' : 'rgba(253, 247, 238, 0.96)',
            color: themeColors.text,
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              backgroundColor: darkMode ? 'rgba(21, 30, 44, 0.9)' : 'rgba(255, 251, 246, 0.96)',
              borderColor: themeColors.border,
            },
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          root: {
            borderBottom: 'none',
            padding: '6px',
            borderRadius: 18,
            backgroundColor: themeColors.panel,
            boxShadow: `inset 0 0 0 1px ${themeColors.border}`,
          },
          indicator: {
            display: 'none',
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 600,
            minHeight: 44,
            borderRadius: 14,
            margin: '4px',
            padding: '8px 18px',
            color: themeColors.textMuted,
            transition: 'all 0.2s ease',
            '&:hover': {
              color: themeColors.text,
              backgroundColor: themeColors.tabHover,
            },
            '&.Mui-selected': {
              color: themeColors.accent,
              backgroundColor: themeColors.tabActive,
              boxShadow: `0 8px 16px ${themeColors.shadow}`,
            },
          },
        },
      },
    },
  });

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

   const getSyncStatusColor = () => {
     switch (syncStatus) {
       case 'synced':
         return 'success';
       case 'syncing':
         return 'info';
       case 'error':
         return 'error';
       default:
         return 'default';
     }
   };

   const getSyncStatusLabel = () => {
     switch (syncStatus) {
       case 'synced':
         return '✓ Synced';
       case 'syncing':
         return '⟳ Syncing...';
       case 'error':
         return '✕ Error';
       default:
         return 'Offline';
     }
   };

   const tabs = [
     { label: 'Encounter', component: <EncounterTab /> },
     { label: 'Players', component: <PlayersTab /> },
     { label: 'Death Saves', component: <DeathSavesTab /> },
     { label: 'Actions', component: <ActionsTab /> },
     { label: 'Feats', component: <FeatsTab /> },
     { label: 'NPCs', component: <NPCNameGeneratorTab /> },
     { label: 'Links', component: <LinksTab /> },
     { label: 'Bastions', component: <BastionTab /> },
     { label: 'Data', component: <DataTab /> },
   ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 4, animation: 'containerFadeIn 600ms ease both' }}>
        <Paper
          elevation={0}
          sx={{
            mb: 4,
            px: { xs: 2, sm: 3 },
            py: { xs: 2, sm: 2.5 },
            borderRadius: 3,
            boxShadow: `0 18px 40px ${themeColors.shadow}`,
            border: `1px solid ${themeColors.border}`,
            backgroundColor: themeColors.panel,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: { xs: 'stretch', sm: 'center' },
              gap: 2,
            }}
          >
            <Typography
              variant="h3"
              component="h1"
              sx={{ textAlign: { xs: 'center', sm: 'left' }, flex: { sm: 1 } }}
            >
              🛡️ DM Screen & 🐉 Encounter Tracker
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                flexWrap: 'wrap',
                justifyContent: { xs: 'center', sm: 'flex-end' },
                width: { xs: '100%', sm: 'auto' },
              }}
            >
              <FormControlLabel
                control={<Switch checked={darkMode} onChange={toggleDarkMode} />}
                label="🌙 Dark Mode"
              />
              <Button
                size="small"
                startIcon={<LogoutIcon />}
                onClick={() => logout()}
                variant="outlined"
              >
                Logout
              </Button>
            </Box>
          </Box>
        </Paper>

        {user && (
          <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              Signed in as: <strong>{user.email}</strong>
            </Typography>
             <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
               <Chip
                 label={getSyncStatusLabel()}
                 color={getSyncStatusColor() as any}
                 size="small"
                 icon={syncStatus === 'syncing' ? <CircularProgress size={20} /> : undefined}
               />
               <Button
                 size="small"
                 variant="outlined"
                 onClick={manualSync}
                 disabled={syncStatus === 'syncing'}
               >
                 Sync Now
               </Button>
             </Box>
          </Box>
        )}

         <Paper sx={{ borderRadius: 2 }}>
           <Tabs value={activeTab} onChange={handleTabChange} variant="scrollable" scrollButtons="auto">
             {tabs.map((tab, index) => (
               <Tab key={index} label={tab.label} />
             ))}
           </Tabs>

           <Box sx={{ p: 3 }}>
             {tabs[activeTab].component}
           </Box>
         </Paper>

          <Snackbar
            open={showToast}
            autoHideDuration={4000}
            onClose={() => setShowToast(false)}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          >
            <Alert
              onClose={() => setShowToast(false)}
              severity={toastSeverity}
              sx={{ width: '100%' }}
            >
              {toastMessage}
            </Alert>
          </Snackbar>

          {conflictState && (
            <ConflictResolutionDialog
              open={conflictState.open}
              localIsNewer={conflictState.localIsNewer}
              onKeepLocal={() => handleConflictResolution(false)}
              onUseCloud={() => handleConflictResolution(true)}
            />
          )}
        </Container>
     </ThemeProvider>
  );
}

function AppWithAuth() {
   const { user, loading } = useAuth();
 
   if (loading) {
     return (
       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
         <CircularProgress />
       </Box>
     );
   }
 
   if (!user) {
     return <LoginPage />;
   }
 
   return <AppContent />;
}

/**
 * Wrapper that ensures GameProvider only mounts after auth is initialized
 */
function GameProviderWithAuthGuard({ children }: { children: ReactNode }) {
  const { loading } = useAuth();
  
  // Don't render GameProvider until auth is ready to avoid useAuth() errors
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }
  
  return <GameProvider>{children}</GameProvider>;
}

function App() {
  return (
    <AuthProvider>
      <GameProviderWithAuthGuard>
        <AppWithAuth />
      </GameProviderWithAuthGuard>
    </AuthProvider>
  );
}

export default App;
