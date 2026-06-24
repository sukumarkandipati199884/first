import React from 'react';
import styled from 'styled-components';
import KPISection from './KPISection';
import AnalyticsSection from './AnalyticsSection';
import UserTable from './UserTable';
import ActivityFeed from './ActivityFeed';

const DashboardContainer = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

function Dashboard() {
  return (
    <DashboardContainer>
      <KPISection />
      <AnalyticsSection />
      <UserTable />
      <ActivityFeed />
    </DashboardContainer>
  );
}

export default Dashboard;