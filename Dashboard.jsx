import React from 'react';
import './Dashboard.css';
import KPICards from './KPICards';
import Analytics from './Analytics';
import UserTable from './UserTable';
import ActivityFeed from './ActivityFeed';

function Dashboard() {
  return (
    <div className="dashboard">
      <KPICards />
      <Analytics />
      <UserTable />
      <ActivityFeed />
    </div>
  );
}

export default Dashboard;