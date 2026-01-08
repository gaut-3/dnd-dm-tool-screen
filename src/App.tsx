import { GameProvider, useGame } from './context/GameContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import EncounterTab from './components/tabs/EncounterTab';
import PlayersTab from './components/tabs/PlayersTab';
import DeathSavesTab from './components/tabs/DeathSavesTab';
import ActionsTab from './components/tabs/ActionsTab';
import FeatsTab from './components/tabs/FeatsTab';
import LinksTab from './components/tabs/LinksTab';
import BastionTab from './components/tabs/BastionTab';
import DataTab from './components/tabs/DataTab';
import LoginPage from './pages/LoginPage';
import { useState } from 'react';
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
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

type SyncStatus = 'idle' | 'syncing' | 'synced' | 'error';

function AppContent() {
  const { darkMode, toggleDarkMode } = useGame();
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState(0);
  const [_localSyncStatus, _setLocalSyncStatus] = useState<SyncStatus>('idle');

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      ...(darkMode && {
        background: {
          default: '#0f1419',
          paper: '#1a202c',
        },
        divider: '#2d3748',
        primary: {
          main: '#64b5f6',
        },
      }),
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            ...(darkMode && {
              backgroundColor: '#252d48',
              border: '1px solid #4a5578',
              boxShadow: '0 4px 24px rgba(0, 0, 0, 0.6)',
              '&:hover': {
                boxShadow: '0 8px 36px rgba(0, 0, 0, 0.8)',
                borderColor: '#6b7ea8',
              },
            }),
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            ...(darkMode && {
              backgroundColor: '#1a202c',
              backgroundImage: 'linear-gradient(135deg, #1a202c 0%, #232f45 100%)',
              border: '1px solid #2d3748',
            }),
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            ...(darkMode && {
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#2d3748',
                borderColor: '#4a5568',
                '&:hover fieldset': {
                  borderColor: '#63b3ed',
                },
              },
              '& .MuiOutlinedInput-input': {
                color: '#e2e8f0',
              },
            }),
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            ...(darkMode && {
              textTransform: 'none',
            }),
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            ...(darkMode && {
              backgroundColor: '#2d3748',
              color: '#e2e8f0',
            }),
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            ...(darkMode && {
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#2d3748',
                borderColor: '#4a5568',
              },
            }),
          },
        },
      },
    },
  });

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const getSyncStatusColor = () => {
    switch (_localSyncStatus) {
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
    switch (_localSyncStatus) {
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
                icon={_localSyncStatus === 'syncing' ? <CircularProgress size={20} /> : undefined}
              />
              <Button
                size="small"
                variant="outlined"
                onClick={() => {
                  // Sync will be implemented with auth
                }}
                disabled={_localSyncStatus === 'syncing'}
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

function App() {
  return (
    <AuthProvider>
      <GameProvider>
        <AppWithAuth />
      </GameProvider>
    </AuthProvider>
  );
}

export default App;
