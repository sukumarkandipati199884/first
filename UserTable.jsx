import React from 'react';

function UserTable() {
  return (
    <div className="user-table">
      <h2>Users</h2>
      <table>
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
      </table>
    </div>
  );
}

export default UserTable;
