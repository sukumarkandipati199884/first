import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  height: 60px;
  background-color: #282c34;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

function Navbar() {
  return (
    <NavbarContainer>
      <h1>SaaS Admin Dashboard</h1>
    </NavbarContainer>
  );
}

export default Navbar;