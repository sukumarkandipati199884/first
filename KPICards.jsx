import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Card = styled.div`
  flex: 1;
  margin: 0 10px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  text-align: center;
`;

function KPICards() {
  return (
    <CardContainer>
      <Card>
        <h3>Revenue</h3>
        <p>$10,000</p>
      </Card>
      <Card>
        <h3>Users</h3>
        <p>1,200</p>
      </Card>
      <Card>
        <h3>Sessions</h3>
        <p>3,400</p>
      </Card>
    </CardContainer>
  );
}

export default KPICards;