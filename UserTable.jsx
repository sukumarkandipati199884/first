import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f4f4f4;
  }
`;

function UserTable() {
  return (
    <TableContainer>
      <h2>Users</h2>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td>Active</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>jane@example.com</td>
            <td>Inactive</td>
          </tr>
        </tbody>
      </Table>
    </TableContainer>
  );
}

export default UserTable;