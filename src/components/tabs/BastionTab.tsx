import { useState } from 'react';
import {
  TextField,
  Button,
  Card,
  CardContent,
  CardHeader,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  ButtonGroup,
  Select,
  MenuItem,
  FormControl,
  Alert,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useGame, Bastion } from '../../context/GameContext';

export default function BastionTab() {
  const {
    bastions,
    currentDay,
    addBastion,
    removeBastion,
    addBastionFacility,
    removeBastionFacility,
    issueBastionOrder,
    saveBastionNote,
    processBastionTurnsManual,
    processSingleBastion,
    advanceDays,
    resetDay,
  } = useGame();

  const [formData, setFormData] = useState({
    bastionName: '',
    bastionOwner: '',
  });
  const [orderInputs, setOrderInputs] = useState<Record<number, string>>({});
  const [facilityInputs, setFacilityInputs] = useState<Record<number, string>>({});
  const [notes, setNotes] = useState<Record<number, string>>({});

  const handleAddBastion = () => {
    const name = formData.bastionName.trim();
    const owner = formData.bastionOwner.trim();
    if (!name || !owner) return;

    const newBastion: Bastion = {
      name,
      owner,
      facilities: [],
      currentOrder: '',
      turnDay: 0,
      lastEvent: '',
      lastProcessedDay: 0,
      note: '',
    };

    addBastion(newBastion);
    setFormData({ bastionName: '', bastionOwner: '' });
  };

  const daysToNextTurn = (bastion: Bastion) => {
    if (bastion.lastProcessedDay === undefined) return 7;
    const e = (currentDay - bastion.lastProcessedDay) % 7;
    return e === 0 ? 7 : 7 - e;
  };

  return (
    <>
      <Typography variant="h6" sx={{ mb: 3 }}>🏰 Bastions</Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', mb: 3, gap: 2 }}>
        <Typography variant="body1">
          <strong>Campaign Day:</strong> {currentDay}
        </Typography>
        <ButtonGroup size="small" variant="outlined">
          <Button onClick={() => advanceDays(1)}>+1 Day</Button>
          <Button onClick={() => advanceDays(7)}>+7 Days</Button>
          <Button onClick={processBastionTurnsManual}>Process Turns (All)</Button>
          <Button onClick={resetDay}>Reset</Button>
        </ButtonGroup>
      </Box>

      <Alert severity="info" sx={{ mb: 3 }}>
        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 'bold' }}>Bastion Rules Summary (D&D 2024/2025):</Typography>
        <Typography variant="body2" component="div">
          <ul style={{ margin: '8px 0' }}>
            <li>Bastions are available at <strong>level 5</strong></li>
            <li>Each Bastion can contain <strong>Basic and Special Facilities</strong></li>
            <li>Every 7 days = 1 <strong>Bastion Turn</strong></li>
            <li>Use Orders like: <em>Craft, Empower, Harvest, Recruit, Research, Trade, Maintain</em></li>
            <li><strong>Maintain</strong> causes a random Bastion Event</li>
          </ul>
        </Typography>
      </Alert>

      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 2, mb: 3 }}>
        <TextField
          fullWidth
          placeholder="Bastion Name"
          value={formData.bastionName}
          onChange={(e) => setFormData((prev) => ({ ...prev, bastionName: e.target.value }))}
          size="small"
        />
        <TextField
          fullWidth
          placeholder="Owner Name"
          value={formData.bastionOwner}
          onChange={(e) => setFormData((prev) => ({ ...prev, bastionOwner: e.target.value }))}
          size="small"
        />
        <Button fullWidth variant="contained" color="primary" onClick={handleAddBastion}>
          Add Bastion
        </Button>
      </Box>

      <Box>
        {bastions.map((bastion, index) => (
           <Card sx={{
              border: '1px solid #4a5578',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '0 6px 30px rgba(0, 0, 0, 0.7)',
                borderColor: '#6b7ea8',
              },
              mb: 3,
            }} key={index}>
            <CardHeader
              title={`${bastion.name} (${bastion.owner})`}
            />
            <CardContent>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2">
                  <strong>Campaign Day:</strong> {currentDay} • <strong>Days to Next Turn:</strong> {daysToNextTurn(bastion)}
                </Typography>
                <Typography variant="body2">
                  <strong>Turn Day:</strong> {bastion.turnDay || 0}
                </Typography>
                <Typography variant="body2">
                  <strong>Order:</strong> {bastion.currentOrder || 'None'}
                </Typography>
                <Typography variant="body2">
                  <strong>Last Event:</strong> {bastion.lastEvent || 'None'}
                </Typography>
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>Facilities:</Typography>
                <List sx={{ border: '1px solid #e0e0e0', borderRadius: 1 }}>
                  {bastion.facilities.length > 0 ? (
                    bastion.facilities.map((facility, fi) => (
                      <ListItem
                        key={fi}
                        secondaryAction={
                          <IconButton
                            edge="end"
                            size="small"
                            onClick={() => removeBastionFacility(index, fi)}
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        }
                      >
                        <ListItemText primary={facility} />
                      </ListItem>
                    ))
                  ) : (
                    <ListItem>
                      <ListItemText primary="No facilities yet." />
                    </ListItem>
                  )}
                </List>

                <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                  <TextField
                    fullWidth
                    placeholder="Facility Name"
                    value={facilityInputs[index] || ''}
                    onChange={(e) => setFacilityInputs((prev) => ({ ...prev, [index]: e.target.value }))}
                    size="small"
                  />
                  <Button
                    variant="outlined"
                    onClick={() => {
                      if (facilityInputs[index]) {
                        addBastionFacility(index, facilityInputs[index]);
                        setFacilityInputs((prev) => ({ ...prev, [index]: '' }));
                      }
                    }}
                  >
                    Add
                  </Button>
                </Box>
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>Notes</Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  placeholder="Notes for this bastion..."
                  value={notes[index] ?? bastion.note}
                  onChange={(e) => setNotes((prev) => ({ ...prev, [index]: e.target.value }))}
                  size="small"
                />
                <Button
                  size="small"
                  variant="outlined"
                  sx={{ mt: 1 }}
                  onClick={() => {
                    saveBastionNote(index, notes[index] ?? bastion.note);
                  }}
                >
                  Save Notes
                </Button>
              </Box>

              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <FormControl size="small" sx={{ minWidth: 150 }}>
                  <Select
                    value={orderInputs[index] || ''}
                    onChange={(e) => setOrderInputs((prev) => ({ ...prev, [index]: e.target.value }))}
                    displayEmpty
                  >
                    <MenuItem value="">-- Select Order --</MenuItem>
                    <MenuItem value="Craft">Craft</MenuItem>
                    <MenuItem value="Empower">Empower</MenuItem>
                    <MenuItem value="Harvest">Harvest</MenuItem>
                    <MenuItem value="Recruit">Recruit</MenuItem>
                    <MenuItem value="Research">Research</MenuItem>
                    <MenuItem value="Trade">Trade</MenuItem>
                    <MenuItem value="Maintain">Maintain</MenuItem>
                  </Select>
                </FormControl>
                <Button
                  variant="outlined"
                  color="success"
                  size="small"
                  onClick={() => {
                    if (orderInputs[index]) {
                      issueBastionOrder(index, orderInputs[index]);
                      setOrderInputs((prev) => ({ ...prev, [index]: '' }));
                    }
                  }}
                >
                  Issue Order
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => processSingleBastion(index)}
                >
                  Process Pending
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  size="small"
                  onClick={() => {
                    if (confirm(`Delete Bastion: ${bastion.name}?`)) {
                      removeBastion(index);
                    }
                  }}
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
