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
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useGame, Character, playerToCharacter } from '../../context/GameContext';

type FormMode = 'manual' | 'fromPlayers';

export default function EncounterTab() {
  const {
    encounter,
    players,
    currentRound,
    currentTurnIndex,
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
    startCombat,
    nextTurn,
    previousTurn,
    endRound,
    resetCombat,
  } = useGame();

  const [formMode, setFormMode] = useState<FormMode>('manual');
  const [selectedPlayerIndex, setSelectedPlayerIndex] = useState<number | ''>('');
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
    if (formMode === 'manual') {
      // Manual mode: require name and HP
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
    } else {
      // From Players mode: require selected player only, HP is optional
      if (selectedPlayerIndex === '') return;

      const player = players[selectedPlayerIndex as number];
      if (!player) return;

      const baseChar = playerToCharacter(player);
      const newChar: Character = {
        ...baseChar,
        hp: formData.hp ? parseInt(formData.hp) : 0,
        maxHp: formData.hp ? parseInt(formData.hp) : 0,
        initiative: formData.initiative ? parseInt(formData.initiative) : 0,
        initiativeMod: formData.initiativeMod ? parseInt(formData.initiativeMod) : 0,
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
      setSelectedPlayerIndex('');
    }
  };

    const sorted = encounter
      .map((char, i) => ({ ...char, originalIndex: i }))
      .sort((a, b) =>
        sortBy === 'initiative'
          ? (b.initiative || 0) - (a.initiative || 0)
          : (a.name || '').localeCompare(b.name || '')
      );

    const getCurrentTurnSortedIndex = () => {
      if (currentTurnIndex === -1) return -1;
      return sorted.findIndex((char) => char.originalIndex === currentTurnIndex);
    };
    const currentTurnSortedIndex = getCurrentTurnSortedIndex();

    return (
      <Box>
        {/* Mode Toggle Buttons */}
        <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
          <Button
            variant={formMode === 'manual' ? 'contained' : 'outlined'}
            onClick={() => {
              setFormMode('manual');
              setSelectedPlayerIndex('');
              setFormData({
                name: '',
                hp: '',
                initiativeMod: '',
                initiative: '',
                ac: '',
                charStatus: '',
              });
            }}
          >
            Manual
          </Button>
          <Button
            variant={formMode === 'fromPlayers' ? 'contained' : 'outlined'}
            onClick={() => {
              setFormMode('fromPlayers');
              setFormData({
                name: '',
                hp: '',
                initiativeMod: '',
                initiative: '',
                ac: '',
                charStatus: '',
              });
            }}
          >
            From Players
          </Button>
        </Box>

        {/* Form Section - Conditional based on mode */}
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 2, mb: 3 }}>
          {formMode === 'manual' ? (
            <>
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
            </>
          ) : (
            <>
              {/* From Players Mode */}
              <FormControl fullWidth size="small">
                <InputLabel>Select Player</InputLabel>
                <Select
                  value={selectedPlayerIndex}
                  label="Select Player"
                  onChange={(e) => setSelectedPlayerIndex(e.target.value as number | '')}
                >
                  {players.map((player, idx) => (
                    <MenuItem key={idx} value={idx}>
                      {player.name} {player.ac === null ? '(No AC)' : `(AC ${player.ac})`}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                fullWidth
                type="number"
                placeholder="HP (optional)"
                value={formData.hp}
                onChange={(e) => handleInputChange('hp', e.target.value)}
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
                placeholder="Init Mod (optional)"
                value={formData.initiativeMod}
                onChange={(e) => handleInputChange('initiativeMod', e.target.value)}
                size="small"
              />
              <Button fullWidth variant="contained" color="primary" onClick={handleAddCharacter} sx={{ gridColumn: 'span 2' }}>
                Add from Player
              </Button>
            </>
          )}
        </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2, mb: 3, flexWrap: 'wrap' }}>
        {/* Left: Encounter Title + Round/Turn Info */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Encounter
          </Typography>
          {currentRound > 0 && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 1 }}>
              <Typography variant="body2">
                Round: <strong>{currentRound}</strong>
              </Typography>
              {currentTurnSortedIndex >= 0 && sorted[currentTurnSortedIndex] && (
                <Typography variant="body2">
                  | Current Turn: <strong>🎯 {sorted[currentTurnSortedIndex].name}</strong>
                </Typography>
              )}
            </Box>
          )}
        </Box>

        {/* Right: Control Buttons */}
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {currentRound === 0 ? (
            <Button size="small" variant="contained" onClick={startCombat}>
              Start Combat
            </Button>
          ) : (
            <>
              <Button size="small" variant="outlined" onClick={previousTurn} startIcon={<ChevronLeftIcon />}>
                Prev
              </Button>
              <Button size="small" variant="outlined" onClick={nextTurn} endIcon={<ChevronRightIcon />}>
                Next
              </Button>
              <Button size="small" variant="outlined" onClick={endRound}>
                End Round
              </Button>
              <Button size="small" variant="outlined" color="error" onClick={resetCombat}>
                Reset
              </Button>
            </>
          )}
          <Button size="small" variant="outlined" onClick={toggleSort}>
            Sort: {sortBy.charAt(0).toUpperCase() + sortBy.slice(1)}
          </Button>
        </Box>
      </Box>

       <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 2 }}>
        {sorted.map((char, index) => {
            const percent = char.maxHp === 0 ? 0 : Math.round((char.hp / char.maxHp) * 100);
            const progressColor = percent > 60 ? 'success' : percent > 30 ? 'warning' : 'error';
           const statusColor = char.hp === 0 ? 'error' : 'success';

           return (
             <Card sx={{
               border: currentTurnSortedIndex === index && currentRound > 0 
                 ? '2px solid gold' 
                 : '1px solid #4a5578',
               boxShadow: currentTurnSortedIndex === index && currentRound > 0
                 ? '0 0 20px rgba(255, 215, 0, 0.5)'
                 : '0 4px 20px rgba(0, 0, 0, 0.5)',
               transition: 'all 0.3s ease',
               '&:hover': {
                 boxShadow: '0 6px 30px rgba(0, 0, 0, 0.7)',
                 borderColor: '#6b7ea8',
               },
             }} key={char.originalIndex}>
               <CardHeader 
                 title={
                   currentTurnSortedIndex === index && currentRound > 0
                     ? `${char.name} 🎯`
                     : char.name
                 } 
               />
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

                <Box sx={{ mb: 2 }}>
                  {/* Row 1: DMG / Input / Heal */}
                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 1 }}>
                    <Button
                      size="small"
                      variant="outlined"
                      color="error"
                      onClick={() => {
                        const val = adjustments[char.originalIndex] || 0;
                        applyAdjustment(char.originalIndex, -val);
                        setAdjustments((prev) => ({ ...prev, [char.originalIndex]: 0 }));
                      }}
                    >
                      DMG
                    </Button>
                    <TextField
                      type="number"
                      placeholder=""
                      value={adjustments[char.originalIndex] ?? ''}
                      onChange={(e) =>
                        setAdjustments((prev) => ({ ...prev, [char.originalIndex]: parseInt(e.target.value) || 0 }))
                      }
                      size="small"
                      sx={{ flex: 1 }}
                      inputProps={{ style: { textAlign: 'center' } }}
                    />
                    <Button
                      size="small"
                      variant="outlined"
                      color="success"
                      onClick={() => {
                        const val = adjustments[char.originalIndex] || 0;
                        applyAdjustment(char.originalIndex, val);
                        setAdjustments((prev) => ({ ...prev, [char.originalIndex]: 0 }));
                      }}
                    >
                      Heal
                    </Button>
                  </Box>

                  {/* Row 2: Special Action Buttons */}
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                      size="small"
                      variant="outlined"
                      color="success"
                      onClick={() => applyAdjustment(char.originalIndex, char.maxHp - char.hp)}
                    >
                      Heal Max
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      color="error"
                      onClick={() => applyAdjustment(char.originalIndex, 0 - char.hp)}
                    >
                      ×0
                    </Button>
                  </Box>
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
