import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Paper,
  Button,
  CircularProgress,
  TextField,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useGame } from '../context/GameContext';
import { useAuth } from '../context/AuthContext';

export default function NotesViewPage() {
  const { characterIndex } = useParams<{ characterIndex: string }>();
  const { encounter } = useGame();
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  // Set page title
  useEffect(() => {
    if (characterIndex !== undefined) {
      const index = parseInt(characterIndex, 10);
      if (!isNaN(index) && index >= 0 && index < encounter.length) {
        const character = encounter[index];
        document.title = `Notes - ${character.name} | DM Screen`;
      } else {
        document.title = 'Character Not Found | DM Screen';
      }
    }

    // Reset title when unmounting
    return () => {
      document.title = 'DM Screen & Tools';
    };
  }, [characterIndex, encounter]);

  // Handle loading state
  if (authLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  // Handle not authenticated
  if (!user) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Authentication Required
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Please log in to view character notes.
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate('/')}
            startIcon={<ArrowBackIcon />}
          >
            Go to Login
          </Button>
        </Paper>
      </Container>
    );
  }

  // Parse and validate character index
  const index = characterIndex ? parseInt(characterIndex, 10) : NaN;

  // Handle invalid index
  if (isNaN(index) || index < 0 || index >= encounter.length) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom color="error">
            Character Not Found
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            The character you're looking for doesn't exist or may have been deleted.
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate('/')}
            startIcon={<ArrowBackIcon />}
          >
            Back to Main App
          </Button>
        </Paper>
      </Container>
    );
  }

  const character = encounter[index];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        py: 2,
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 3,
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Box>
            <Typography variant="h4" component="h1" gutterBottom>
              {character.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Read-only view • HP: {character.hp}/{character.maxHp} • AC: {character.ac ?? '-'} • Initiative: {character.initiative || 0}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              variant="outlined"
              onClick={() => window.location.reload()}
              startIcon={<RefreshIcon />}
              size="small"
            >
              Refresh
            </Button>
            <Button
              variant="contained"
              onClick={() => navigate('/')}
              startIcon={<ArrowBackIcon />}
              size="small"
            >
              Back to App
            </Button>
          </Box>
        </Box>

        {/* Notes Content */}
        <Paper
          sx={{
            p: 3,
            minHeight: 'calc(100vh - 200px)',
          }}
        >
          {character.notes && character.notes.trim() ? (
            <TextField
              fullWidth
              multiline
              value={character.notes}
              InputProps={{
                readOnly: true,
                sx: {
                  fontFamily: 'Consolas, Monaco, "Courier New", monospace',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  '& .MuiInputBase-input': {
                    cursor: 'text',
                    userSelect: 'text',
                  },
                },
              }}
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'transparent',
                  },
                  '&:hover fieldset': {
                    borderColor: 'transparent',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'transparent',
                  },
                },
              }}
            />
          ) : (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '300px',
              }}
            >
              <Typography variant="h6" color="text.secondary">
                No notes available for this character
              </Typography>
            </Box>
          )}
        </Paper>

        {/* Footer Info */}
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Typography variant="caption" color="text.secondary">
            This is a read-only view. To edit notes, go back to the main app and use "View/Edit Notes".
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
