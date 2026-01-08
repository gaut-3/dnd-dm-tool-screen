import {
  Card,
  CardContent,
  CardHeader,
  Box,
  Typography,
} from '@mui/material';

export default function ActionsTab() {
  const actions = [
    { name: 'Attack', description: 'Attack with a weapon or an Unarmed Strike.' },
    { name: 'Dash', description: 'Extra movement equal to your Speed.' },
    { name: 'Disengage', description: 'Movement doesn\'t provoke Opportunity Attacks.' },
    { name: 'Dodge', description: 'Disadvantage against you; Advantage on Dex saves.' },
    { name: 'Help', description: 'Aid a creature\'s ability check or attack roll.' },
    { name: 'Hide', description: 'Dexterity (Stealth) check to become unseen.' },
    { name: 'Influence', description: 'Charisma or Wisdom check to change attitude.' },
    { name: 'Magic', description: 'Cast a spell, use a magic item, or magical feature.' },
    { name: 'Ready', description: 'Prepare a trigger-based action.' },
    { name: 'Search', description: 'Wisdom-based perception/insight/medicine/survival.' },
    { name: 'Study', description: 'Intelligence-based arcana/history/investigation/etc.' },
    { name: 'Utilize', description: 'Use a nonmagical object.' },
  ];

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 3 }}>
      {actions.map((action, index) => (
         <Card sx={{
              border: '1px solid #4a5578',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '0 6px 30px rgba(0, 0, 0, 0.7)',
                borderColor: '#6b7ea8',
              },
            }} key={index}>
          <CardHeader title={action.name} />
          <CardContent>
            <Typography variant="body2">{action.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
