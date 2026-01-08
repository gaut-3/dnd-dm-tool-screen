import { useRef } from 'react';
import {
  Button,
  Box,
  Typography,
} from '@mui/material';
import { useGame } from '../../context/GameContext';

export default function DataTab() {
  const { exportAll, importAll } = useGame();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target?.result as string);
        importAll(data);
        alert('Data imported successfully!');
      } catch (error) {
        alert('Error importing file. Please ensure it\'s a valid JSON file.');
      }
    };
    reader.readAsText(file);

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 3 }}>💾 Data</Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
        Export or import everything: Encounters, Players, Death Saves, Links, Bastions (with notes), Campaign Day,
        sort mode, and dark mode.
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        <Button variant="contained" color="success" onClick={exportAll}>
          Export All
        </Button>
        <input
          ref={fileInputRef}
          type="file"
          id="importFileInput"
          accept="application/json"
          style={{ display: 'none' }}
          onChange={handleImport}
        />
        <Button variant="outlined" color="primary" onClick={() => fileInputRef.current?.click()}>
          Import All (JSON)
        </Button>
      </Box>
      <Box sx={{ mt: 3, fontSize: '0.875rem', color: 'text.secondary' }}>
        Tip: Export creates a <code>dm-screen-export.json</code> file. Import replaces your current data.
      </Box>
    </Box>
  );
}
