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
  Button,
  Chip,
  CircularProgress,
  Snackbar,
  Alert,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { createAppTheme } from './theme';

function AppContent() {
  const { darkMode, toggleDarkMode, syncStatus, syncError, syncDidUpload, manualSync, conflictState, handleConflictResolution } = useGame();
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastSeverity, setToastSeverity] = useState<'success' | 'error' | 'info'>('success');
  const [showToast, setShowToast] = useState(false);

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

  // Use the modular theme system
  const theme = createAppTheme(darkMode);

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
      <Container maxWidth="lg" sx={{ py: { xs: 2, sm: 4 } }}>
        {/* Header Section with improved spacing */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'stretch', sm: 'center' },
            mb: { xs: 3, sm: 4 },
            gap: { xs: 2, sm: 3 },
            animation: 'slideInUp 0.5s ease-out',
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              textAlign: { xs: 'center', sm: 'left' },
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            🛡️ DM Screen & 🐉 Encounter Tracker
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 1, sm: 2 },
              justifyContent: { xs: 'center', sm: 'flex-end' },
              width: { xs: '100%', sm: 'auto' },
              flexWrap: 'wrap',
            }}
          >
            <FormControlLabel
              control={<Switch checked={darkMode} onChange={toggleDarkMode} />}
              label="🌙 Dark"
              sx={{ whiteSpace: 'nowrap' }}
            />
            <Button
              size="small"
              startIcon={<LogoutIcon />}
              onClick={() => logout()}
              variant="outlined"
              sx={{ whiteSpace: 'nowrap' }}
            >
              Logout
            </Button>
          </Box>
        </Box>

        {/* User Info and Sync Status */}
        {user && (
          <Box
            sx={{
              mb: 3,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 2,
              animation: 'slideInUp 0.6s ease-out',
              '@media (max-width: 600px)': {
                flexDirection: 'column',
              },
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Signed in as: <strong>{user.email}</strong>
            </Typography>
            <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center', flexWrap: 'wrap' }}>
              <Chip
                label={getSyncStatusLabel()}
                color={getSyncStatusColor() as any}
                size="small"
                icon={syncStatus === 'syncing' ? <CircularProgress size={20} /> : undefined}
                sx={{ animation: syncStatus === 'syncing' ? 'pulse 2s infinite' : 'none' }}
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

        {/* Tabs Container */}
        <Paper
          sx={{
            borderRadius: 2,
            animation: 'slideInUp 0.7s ease-out',
            overflow: 'hidden',
          }}
        >
          <Tabs value={activeTab} onChange={handleTabChange} variant="scrollable" scrollButtons="auto">
            {tabs.map((tab, index) => (
              <Tab key={index} label={tab.label} />
            ))}
          </Tabs>

          <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
            {tabs[activeTab].component}
          </Box>
        </Paper>

        {/* Toast Notifications */}
        <Snackbar
          open={showToast}
          autoHideDuration={4000}
          onClose={() => setShowToast(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert
            onClose={() => setShowToast(false)}
            severity={toastSeverity}
            sx={{
              width: '100%',
              animation: 'slideInUp 0.3s ease-out',
            }}
          >
            {toastMessage}
          </Alert>
        </Snackbar>

        {/* Conflict Resolution Dialog */}
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
