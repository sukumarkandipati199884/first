import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Dashboard() {
  return (
    <Container style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Admin Dashboard
      </Typography>
      <Typography variant="body1">
        Here you can manage users, view statistics, and configure settings.
      </Typography>
    </Container>
  );
}

export default Dashboard;
