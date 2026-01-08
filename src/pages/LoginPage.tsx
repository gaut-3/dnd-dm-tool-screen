import React, { useState } from 'react';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Divider,
  Alert,
  CircularProgress,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const { login, signup, loginWithGoogle, loading, error } = useAuth();
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null);

    try {
      if (isSignup) {
        if (password !== confirmPassword) {
          setLocalError('Passwords do not match');
          return;
        }
        if (password.length < 6) {
          setLocalError('Password must be at least 6 characters');
          return;
        }
        await signup(email, password);
      } else {
        await login(email, password);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Authentication failed';
      setLocalError(errorMessage);
    }
  };

  const handleGoogleLogin = async () => {
    setLocalError(null);
    try {
      await loginWithGoogle();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Google login failed';
      setLocalError(errorMessage);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          py: 4,
        }}
      >
        <Card
          sx={{
            border: '1px solid #4a5578',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
            width: '100%',
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h4" component="h1" sx={{ mb: 1, textAlign: 'center', fontWeight: 'bold' }}>
              🛡️ DM Screen
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, textAlign: 'center', color: 'text.secondary' }}>
              {isSignup ? 'Create a new account' : 'Sign in to your account'}
            </Typography>

            {(error || localError) && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error || localError}
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                required
                disabled={loading}
              />

              <TextField
                label="Password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                required
                disabled={loading}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                        disabled={loading}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              {isSignup && (
                <TextField
                  label="Confirm Password"
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  fullWidth
                  required
                  disabled={loading}
                />
              )}

              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={loading}
                sx={{ mt: 2, textTransform: 'none', fontSize: '1rem' }}
              >
                {loading ? <CircularProgress size={24} /> : isSignup ? 'Sign Up' : 'Sign In'}
              </Button>
            </Box>

            <Divider sx={{ my: 3 }}>OR</Divider>

            <Button
              variant="outlined"
              fullWidth
              onClick={handleGoogleLogin}
              disabled={loading}
              sx={{ textTransform: 'none', fontSize: '1rem', mb: 2 }}
            >
              {loading ? <CircularProgress size={24} /> : '🔐 Sign in with Google'}
            </Button>

            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Typography variant="body2">
                {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
                <Button
                  variant="text"
                  onClick={() => {
                    setIsSignup(!isSignup);
                    setLocalError(null);
                    setPassword('');
                    setConfirmPassword('');
                  }}
                  disabled={loading}
                  sx={{ textTransform: 'none', p: 0 }}
                >
                  {isSignup ? 'Sign In' : 'Sign Up'}
                </Button>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
