import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li>Dashboard</li>
        <li>Analytics</li>
        <li>Users</li>
        <li>Activity</li>
      </ul>
    </aside>
  );
}

export default Sidebar;