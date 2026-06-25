import React from 'react';
import { Typography, Box } from '@mui/material';

function Transactions() {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4">Transactions</Typography>
      <Typography variant="body1">Here are your recent transactions.</Typography>
    </Box>
  );
}

export default Transactions;
