import { useState } from 'react';
import {
  TextField,
  Button,
  Card,
  CardContent,
  CardHeader,
  Box,
  Typography,
  Chip,
} from '@mui/material';
import { useGame, DeathSave } from '../../context/GameContext';

export default function DeathSavesTab() {
  const { deathSaves, addDeathSave, removeDeathSave, adjDeath, toggleStable, resetDeath } = useGame();
  const [dsName, setDsName] = useState('');

  const handleAddDeathSave = () => {
    if (!dsName.trim()) return;
    const newDeathSave: DeathSave = {
      name: dsName.trim(),
      successes: 0,
      failures: 0,
      stable: false,
    };
    addDeathSave(newDeathSave);
    setDsName('');
  };

  return (
    <>
      <Typography variant="h6" sx={{ mb: 3 }}>☠️ Death Saves</Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 2, mb: 3 }}>
        <TextField
          fullWidth
          placeholder="Character Name"
          value={dsName}
          onChange={(e) => setDsName(e.target.value)}
          size="small"
        />
        <Button fullWidth variant="contained" color="primary" onClick={handleAddDeathSave}>
          Add
        </Button>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 3 }}>
        {deathSaves.map((deathSave, index) => (
           <Card sx={{
              border: '1px solid #4a5578',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '0 6px 30px rgba(0, 0, 0, 0.7)',
                borderColor: '#6b7ea8',
              },
            }} key={index}>
            <CardHeader title={deathSave.name} />
            <CardContent>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2">
                  <strong>Successes:</strong> {deathSave.successes}/3 &nbsp; <strong>Failures:</strong>{' '}
                  {deathSave.failures}/3
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Chip
                  label={deathSave.stable ? 'Stable' : 'Unstable'}
                  color={deathSave.stable ? 'success' : 'default'}
                />
              </Box>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                <Button
                  size="small"
                  variant="outlined"
                  color="success"
                  onClick={() => adjDeath(index, 'successes', 1)}
                >
                  + Success
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  color="success"
                  onClick={() => adjDeath(index, 'successes', -1)}
                >
                  - Success
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  color="error"
                  onClick={() => adjDeath(index, 'failures', 1)}
                >
                  + Failure
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  color="error"
                  onClick={() => adjDeath(index, 'failures', -1)}
                >
                  - Failure
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => toggleStable(index)}
                >
                  Toggle Stable
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => resetDeath(index)}
                >
                  Reset
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  color="error"
                  onClick={() => removeDeathSave(index)}
                >
                  Remove
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
}
