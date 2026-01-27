import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from '@mui/material';

interface ConflictResolutionDialogProps {
  open: boolean;
  localIsNewer: boolean;
  onKeepLocal: () => void;
  onUseCloud: () => void;
}

export default function ConflictResolutionDialog({
  open,
  localIsNewer,
  onKeepLocal,
  onUseCloud,
}: ConflictResolutionDialogProps) {
  return (
    <Dialog open={open} maxWidth="sm" fullWidth>
      <DialogTitle>⚠️ Data Conflict Detected</DialogTitle>
      <DialogContent>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Your device has different data than the cloud backup.
          </Typography>

          {localIsNewer ? (
            <Typography variant="body2" color="warning.main" sx={{ mb: 2 }}>
              📱 <strong>Local data is newer</strong> than cloud data
            </Typography>
          ) : (
            <Typography variant="body2" color="info.main" sx={{ mb: 2 }}>
              ☁️ <strong>Cloud data is newer</strong> than local data
            </Typography>
          )}

          <Typography variant="caption" color="text.secondary">
            Choose which version to keep:
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions sx={{ gap: 1, p: 2 }}>
        <Button variant="outlined" onClick={onKeepLocal} fullWidth>
          Keep Local Data
        </Button>
        <Button
          variant="contained"
          onClick={onUseCloud}
          fullWidth
          color={localIsNewer ? 'warning' : 'primary'}
        >
          Use Cloud Data
        </Button>
      </DialogActions>
    </Dialog>
  );
}
