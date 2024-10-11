import React from 'react';
import { Typography, Box } from '@mui/material';

export default function ItemCountBar() {
  return (
    <Box
      sx={{
        display: 'flex',
        width:{lg:'97.5%',md:'95%',xl:'93%',sm:'100%',xs:'105%'},
        marginLeft:{lg:'1%',md:'2%',xs:'1%'},
        alignItems: 'center',
        padding: '8px',
        backgroundColor: '#3f4752',
      }}
    >
      <Typography
        variant="body1"
        sx={{ color: '#D9D9D9' }}
        aria-label="Form endotracheal, 85 items"
      >
        Form endotracheal 85 items
      </Typography>
    </Box>
  );
}

