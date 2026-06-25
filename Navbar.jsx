import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Job Portal</h1>
      <div className="links">
        <Link to="/">Dashboard</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/applications">Applications</Link>
      </div>
    </nav>
  );
}

export default Navbar;
