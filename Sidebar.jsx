import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

function Sidebar() {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        <ListItem button>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;