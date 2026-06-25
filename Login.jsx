import React from 'react';
import { TextField, Button, Box } from '@mui/material';

function Login() {
  return (
    <Box sx={{ mt: 8 }}>
      <TextField label="Username" variant="outlined" fullWidth margin="normal" />
      <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" />
      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Login
      </Button>
    </Box>
  );
}

export default Login;
