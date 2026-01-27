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

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#f4c77a' : '#8d5b2c',
      },
      secondary: {
        main: darkMode ? '#79b7d9' : '#3d6f8f',
      },
      background: {
        default: darkMode ? '#0b0f14' : '#f6efe6',
        paper: darkMode ? '#111822' : '#fbf6ef',
      },
      divider: darkMode ? 'rgba(152, 180, 214, 0.18)' : 'rgba(93, 72, 50, 0.2)',
    },
    typography: {
      fontFamily: '"Cinzel", "Cormorant Garamond", "Garamond", "Georgia", serif',
      h3: {
        fontWeight: 700,
        letterSpacing: '0.06em',
      },
      h5: {
        fontWeight: 600,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: darkMode ? '#0b0f14' : '#f6efe6',
            backgroundImage: `linear-gradient(135deg, rgba(9, 12, 18, 0.82) 0%, rgba(13, 18, 26, 0.68) 40%, rgba(20, 26, 36, 0.6) 100%), url(${backgroundImageUrl})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            color: darkMode ? '#e7eef8' : '#1f1a13',
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
            backgroundColor: darkMode ? 'rgba(18, 26, 40, 0.82)' : 'rgba(253, 249, 242, 0.88)',
            border: darkMode ? '1px solid rgba(148, 183, 222, 0.25)' : '1px solid rgba(155, 115, 71, 0.3)',
            boxShadow: darkMode ? '0 10px 30px rgba(3, 6, 12, 0.7)' : '0 12px 28px rgba(39, 29, 17, 0.18)',
            backdropFilter: 'blur(6px)',
            '&:hover': {
              boxShadow: darkMode ? '0 14px 36px rgba(3, 6, 12, 0.8)' : '0 16px 34px rgba(39, 29, 17, 0.24)',
              borderColor: darkMode ? 'rgba(196, 222, 244, 0.35)' : 'rgba(155, 115, 71, 0.45)',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: darkMode ? 'rgba(13, 19, 29, 0.84)' : 'rgba(253, 249, 242, 0.9)',
            backgroundImage: darkMode
              ? 'linear-gradient(145deg, rgba(20, 28, 41, 0.92) 0%, rgba(12, 18, 28, 0.95) 100%)'
              : 'linear-gradient(145deg, rgba(255, 252, 248, 0.96) 0%, rgba(245, 236, 224, 0.92) 100%)',
            border: darkMode ? '1px solid rgba(152, 180, 214, 0.22)' : '1px solid rgba(155, 115, 71, 0.24)',
            backdropFilter: 'blur(8px)',
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              backgroundColor: darkMode ? 'rgba(21, 30, 44, 0.9)' : 'rgba(255, 251, 246, 0.96)',
              borderColor: darkMode ? 'rgba(148, 183, 222, 0.3)' : 'rgba(155, 115, 71, 0.3)',
              '&:hover fieldset': {
                borderColor: darkMode ? '#f4c77a' : '#8d5b2c',
              },
            },
            '& .MuiOutlinedInput-input': {
              color: darkMode ? '#e7eef8' : '#2b2117',
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 600,
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            backgroundColor: darkMode ? 'rgba(26, 36, 54, 0.92)' : 'rgba(253, 247, 238, 0.96)',
            color: darkMode ? '#e7eef8' : '#2b2117',
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              backgroundColor: darkMode ? 'rgba(21, 30, 44, 0.9)' : 'rgba(255, 251, 246, 0.96)',
              borderColor: darkMode ? 'rgba(148, 183, 222, 0.3)' : 'rgba(155, 115, 71, 0.3)',
            },
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          root: {
            borderBottom: darkMode ? '1px solid rgba(148, 183, 222, 0.2)' : '1px solid rgba(155, 115, 71, 0.2)',
          },
          indicator: {
            backgroundColor: darkMode ? '#f4c77a' : '#8d5b2c',
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 600,
            color: darkMode ? 'rgba(230, 238, 248, 0.82)' : 'rgba(43, 33, 23, 0.78)',
            '&.Mui-selected': {
              color: darkMode ? '#f7d9a4' : '#8d5b2c',
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
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4, gap: 2 }}>
          <Typography variant="h3" component="h1" sx={{ textAlign: 'center', flex: 1 }}>
            🛡️ DM Screen & 🐉 Encounter Tracker
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
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
