import React from 'react';
import styled from 'styled-components';
import KPICards from './KPICards';
import AnalyticsSection from './AnalyticsSection';
import UserTable from './UserTable';
import ActivityFeed from './ActivityFeed';

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

function Dashboard() {
  return (
    <DashboardContainer>
      <KPICards />
      <AnalyticsSection />
      <UserTable />
      <ActivityFeed />
    </DashboardContainer>
  );
}

export default Dashboard;