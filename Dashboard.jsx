import React from 'react';
import KPISection from './KPISection';
import AnalyticsSection from './AnalyticsSection';
import UserTable from './UserTable';
import ActivityFeed from './ActivityFeed';

function Dashboard() {
  return (
    <div className="dashboard">
      <KPISection />
      <AnalyticsSection />
      <UserTable />
      <ActivityFeed />
    </div>
  );
}

export default Dashboard;
