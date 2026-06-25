import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const Sidebar = () => {
  return (
    <List component="nav">
      <ListItem button>
        <ListItemText primary="Create Event" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Manage Attendees" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Analytics Dashboard" />
      </ListItem>
    </List>
  );
};

export default Sidebar;
