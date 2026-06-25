import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Analytics Dashboard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Here you can view the analytics of your events.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Dashboard;
