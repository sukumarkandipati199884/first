import React from 'react';
import styled from 'styled-components';

const KPIContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const KPICard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  flex: 1;
  margin: 0 10px;
`;

function KPISection() {
  return (
    <KPIContainer>
      <KPICard>
        <h3>Revenue</h3>
        <p>$50,000</p>
      </KPICard>
      <KPICard>
        <h3>Users</h3>
        <p>1,200</p>
      </KPICard>
      <KPICard>
        <h3>Sessions</h3>
        <p>3,500</p>
      </KPICard>
    </KPIContainer>
  );
}

export default KPISection;