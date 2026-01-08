import { useState } from 'react';
import {
  TextField,
  Button,
  Card,
  CardContent,
  CardHeader,
  Box,
  Typography,
} from '@mui/material';
import { useGame, Player } from '../../context/GameContext';

export default function PlayersTab() {
  const { players, addPlayer, removePlayer, updatePlayer } = useGame();
  const [formData, setFormData] = useState({
    playerName: '',
    playerPP: '',
    playerPI: '',
    playerAC: '',
  });

  const [editData, setEditData] = useState<Record<number, Player>>({});

  const handleAddPlayer = () => {
    const name = formData.playerName.trim();
    if (!name) return;

    const newPlayer: Player = {
      name,
      pp: formData.playerPP ? parseInt(formData.playerPP) : null,
      pi: formData.playerPI ? parseInt(formData.playerPI) : null,
      ac: formData.playerAC ? parseInt(formData.playerAC) : null,
    };

    addPlayer(newPlayer);
    setFormData({
      playerName: '',
      playerPP: '',
      playerPI: '',
      playerAC: '',
    });
  };

  return (
    <>
      <Typography variant="h6" sx={{ mb: 3 }}>👥 Players (Passive & AC)</Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 2, mb: 3 }}>
        <TextField
          fullWidth
          placeholder="Name"
          value={formData.playerName}
          onChange={(e) => setFormData((prev) => ({ ...prev, playerName: e.target.value }))}
          size="small"
        />
        <TextField
          fullWidth
          type="number"
          placeholder="Passive Perception"
          value={formData.playerPP}
          onChange={(e) => setFormData((prev) => ({ ...prev, playerPP: e.target.value }))}
          size="small"
        />
        <TextField
          fullWidth
          type="number"
          placeholder="Passive Insight"
          value={formData.playerPI}
          onChange={(e) => setFormData((prev) => ({ ...prev, playerPI: e.target.value }))}
          size="small"
        />
        <TextField
          fullWidth
          type="number"
          placeholder="Armor Class (AC)"
          value={formData.playerAC}
          onChange={(e) => setFormData((prev) => ({ ...prev, playerAC: e.target.value }))}
          size="small"
        />
        <Button fullWidth variant="contained" color="primary" onClick={handleAddPlayer}>
          Add Player
        </Button>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 3 }}>
        {players.map((player, index) => (
           <Card sx={{
              border: '1px solid #4a5578',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '0 6px 30px rgba(0, 0, 0, 0.7)',
                borderColor: '#6b7ea8',
              },
            }} key={index}>
            <CardHeader title={player.name} />
            <CardContent>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>Passive Perception:</strong> {player.pp ?? '-'}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>Passive Insight:</strong> {player.pi ?? '-'}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                <strong>AC:</strong> {player.ac ?? '-'}
              </Typography>

              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: 1, mb: 2 }}>
                <TextField
                  placeholder="Name"
                  defaultValue={player.name}
                  onChange={(e) =>
                    setEditData((prev) => ({
                      ...prev,
                      [index]: { ...player, name: e.target.value },
                    }))
                  }
                  size="small"
                />
                <TextField
                  type="number"
                  placeholder="PP"
                  defaultValue={player.pp ?? ''}
                  onChange={(e) =>
                    setEditData((prev) => ({
                      ...prev,
                      [index]: { ...player, pp: e.target.value ? parseInt(e.target.value) : null },
                    }))
                  }
                  size="small"
                />
                <TextField
                  type="number"
                  placeholder="PI"
                  defaultValue={player.pi ?? ''}
                  onChange={(e) =>
                    setEditData((prev) => ({
                      ...prev,
                      [index]: { ...player, pi: e.target.value ? parseInt(e.target.value) : null },
                    }))
                  }
                  size="small"
                />
                <TextField
                  type="number"
                  placeholder="AC"
                  defaultValue={player.ac ?? ''}
                  onChange={(e) =>
                    setEditData((prev) => ({
                      ...prev,
                      [index]: { ...player, ac: e.target.value ? parseInt(e.target.value) : null },
                    }))
                  }
                  size="small"
                />
              </Box>

              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => {
                    const updated = editData[index] || player;
                    updatePlayer(index, updated);
                  }}
                >
                  Save
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  color="error"
                  onClick={() => removePlayer(index)}
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
