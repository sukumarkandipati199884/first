import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #f4f4f4;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <ul>
        <li>Dashboard</li>
        <li>Analytics</li>
        <li>Users</li>
        <li>Activity</li>
      </ul>
    </SidebarContainer>
  );
}

export default Sidebar;