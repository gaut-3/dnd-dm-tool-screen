import { useState } from 'react';
import {
  TextField,
  Button,
  Card,
  CardContent,
  CardHeader,
  Box,
  LinearProgress,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useGame, Character } from '../../context/GameContext';

export default function EncounterTab() {
  const {
    encounter,
    sortBy,
    toggleSort,
    addCharacter,
    removeCharacter,
    applyAdjustment,
    rollInitiative,
    copyEncounter,
    addAbility,
    adjustAbility,
    removeAbility,
    updateCondition,
  } = useGame();

  const [formData, setFormData] = useState({
    name: '',
    hp: '',
    initiativeMod: '',
    initiative: '',
    ac: '',
    charStatus: '',
  });

  const [adjustments, setAdjustments] = useState<Record<number, number>>({});
  const [abilityInputs, setAbilityInputs] = useState<Record<number, { name: string; max: string }>>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddCharacter = () => {
    if (!formData.name.trim() || !formData.hp) return;

    const newChar: Character = {
      name: formData.name.trim(),
      hp: parseInt(formData.hp),
      maxHp: parseInt(formData.hp),
      initiative: formData.initiative ? parseInt(formData.initiative) : 0,
      initiativeMod: formData.initiativeMod ? parseInt(formData.initiativeMod) : 0,
      charStatus: formData.charStatus.trim(),
      ac: formData.ac ? parseInt(formData.ac) : null,
      abilities: [],
    };

    addCharacter(newChar);
    setFormData({
      name: '',
      hp: '',
      initiativeMod: '',
      initiative: '',
      ac: '',
      charStatus: '',
    });
  };

  const sorted = encounter
    .map((char, i) => ({ ...char, originalIndex: i }))
    .sort((a, b) =>
      sortBy === 'initiative'
        ? (b.initiative || 0) - (a.initiative || 0)
        : (a.name || '').localeCompare(b.name || '')
    );

  return (
    <Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 2, mb: 3 }}>
        <TextField
          fullWidth
          placeholder="Name"
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          size="small"
        />
        <TextField
          fullWidth
          type="number"
          placeholder="HP"
          value={formData.hp}
          onChange={(e) => handleInputChange('hp', e.target.value)}
          size="small"
        />
        <TextField
          fullWidth
          type="number"
          placeholder="Init Mod"
          value={formData.initiativeMod}
          onChange={(e) => handleInputChange('initiativeMod', e.target.value)}
          size="small"
        />
        <TextField
          fullWidth
          type="number"
          placeholder="Initiative (optional)"
          value={formData.initiative}
          onChange={(e) => handleInputChange('initiative', e.target.value)}
          size="small"
        />
        <TextField
          fullWidth
          type="number"
          placeholder="AC (optional)"
          value={formData.ac}
          onChange={(e) => handleInputChange('ac', e.target.value)}
          size="small"
        />
        <TextField
          fullWidth
          placeholder="Status (e.g., Poisoned)"
          value={formData.charStatus}
          onChange={(e) => handleInputChange('charStatus', e.target.value)}
          size="small"
        />
        <Button fullWidth variant="contained" color="primary" onClick={handleAddCharacter}>
          Add
        </Button>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h6">Encounter</Typography>
        <Button size="small" variant="outlined" onClick={toggleSort}>
          Sort by: {sortBy.charAt(0).toUpperCase() + sortBy.slice(1)}
        </Button>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 2 }}>
        {sorted.map((char) => {
          const percent = Math.round((char.hp / char.maxHp) * 100);
          const progressColor = percent > 60 ? 'success' : percent > 30 ? 'warning' : 'error';
          const statusColor = char.hp === 0 ? 'error' : 'success';

          return (
            <Card sx={{
              border: '1px solid #4a5578',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '0 6px 30px rgba(0, 0, 0, 0.7)',
                borderColor: '#6b7ea8',
              },
            }} key={char.originalIndex}>
              <CardHeader title={char.name} />
              <CardContent>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2">AC: <strong>{char.ac ?? '-'}</strong></Typography>
                  <Typography variant="body2">Initiative: <strong>{char.initiative || 0}</strong> (mod: {char.initiativeMod >= 0 ? '+' : ''}{char.initiativeMod || 0})</Typography>
                  <Typography variant="body2">HP: <strong>{char.hp} / {char.maxHp}</strong></Typography>
                  <Box sx={{ my: 1 }}>
                    <LinearProgress variant="determinate" value={percent} color={progressColor} />
                    <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', mt: 0.5 }}>{percent}%</Typography>
                  </Box>
                  <Typography variant="body2">
                    Status:{' '}
                    <Typography component="span" sx={{ color: statusColor === 'error' ? 'error.main' : 'success.main' }}>
                      {char.hp === 0 ? 'Down' : 'OK'}
                    </Typography>
                  </Typography>
                  <Typography variant="body2">Condition: {char.charStatus || 'None'}</Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                  <TextField
                    type="number"
                    placeholder="Adjust HP"
                    value={adjustments[char.originalIndex] || ''}
                    onChange={(e) =>
                      setAdjustments((prev) => ({ ...prev, [char.originalIndex]: parseInt(e.target.value) || 0 }))
                    }
                    size="small"
                    sx={{ flex: 1 }}
                  />
                  <Button
                    variant="outlined"
                    onClick={() => {
                      applyAdjustment(char.originalIndex, adjustments[char.originalIndex] || 0);
                      setAdjustments((prev) => ({ ...prev, [char.originalIndex]: 0 }));
                    }}
                    size="small"
                  >
                    Apply
                  </Button>
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={() => rollInitiative(char.originalIndex)}
                  >
                    🎲 Roll Initiative
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    color="success"
                    onClick={() => copyEncounter(char.originalIndex)}
                  >
                    Copy
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    color="error"
                    onClick={() => removeCharacter(char.originalIndex)}
                  >
                    Remove
                  </Button>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" sx={{ mb: 1 }}>Abilities & Spells</Typography>
                  <List sx={{ mb: 1 }}>
                    {(char.abilities || []).map((ab, abilityIdx) => (
                      <ListItem
                        key={abilityIdx}
                        sx={{ py: 0.5, px: 1, border: '1px solid #e0e0e0', mb: 0.5, borderRadius: 1 }}
                        secondaryAction={
                          <Box sx={{ display: 'flex', gap: 0.5 }}>
                            <IconButton
                              edge="end"
                              size="small"
                              onClick={() => adjustAbility(char.originalIndex, abilityIdx, -1)}
                            >
                              -
                            </IconButton>
                            <IconButton
                              edge="end"
                              size="small"
                              onClick={() => adjustAbility(char.originalIndex, abilityIdx, 1)}
                            >
                              +
                            </IconButton>
                            <IconButton
                              edge="end"
                              size="small"
                              onClick={() => removeAbility(char.originalIndex, abilityIdx)}
                            >
                              <DeleteIcon fontSize="small" />
                            </IconButton>
                          </Box>
                        }
                      >
                        <ListItemText primary={`${ab.name} (${ab.used}/${ab.max})`} />
                      </ListItem>
                    ))}
                  </List>

                  <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                    <TextField
                      type="text"
                      placeholder="Name"
                      value={abilityInputs[char.originalIndex]?.name || ''}
                      onChange={(e) =>
                        setAbilityInputs((prev) => ({
                          ...prev,
                          [char.originalIndex]: { ...prev[char.originalIndex], name: e.target.value },
                        }))
                      }
                      size="small"
                      sx={{ flex: 1 }}
                    />
                    <TextField
                      type="number"
                      placeholder="Max"
                      value={abilityInputs[char.originalIndex]?.max || ''}
                      onChange={(e) =>
                        setAbilityInputs((prev) => ({
                          ...prev,
                          [char.originalIndex]: { ...prev[char.originalIndex], max: e.target.value },
                        }))
                      }
                      size="small"
                      sx={{ maxWidth: '80px' }}
                    />
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => {
                        const input = abilityInputs[char.originalIndex];
                        if (input?.name && input?.max) {
                          addAbility(char.originalIndex, {
                            name: input.name,
                            max: parseInt(input.max),
                            used: 0,
                          });
                          setAbilityInputs((prev) => ({
                            ...prev,
                            [char.originalIndex]: { name: '', max: '' },
                          }));
                        }
                      }}
                    >
                      Add
                    </Button>
                  </Box>
                </Box>

                <TextField
                  fullWidth
                  type="text"
                  placeholder="Update Condition"
                  onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    if (e.key === 'Enter') {
                      updateCondition(char.originalIndex, e.currentTarget.value);
                      e.currentTarget.value = '';
                    }
                  }}
                  size="small"
                />
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
}
