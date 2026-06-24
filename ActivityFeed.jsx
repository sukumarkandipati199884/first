import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function ActivityFeed() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Activity Feed</Typography>
        <Typography variant="body2">Recent activities and updates</Typography>
      </CardContent>
    </Card>
  );
}

export default ActivityFeed;