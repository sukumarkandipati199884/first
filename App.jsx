import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import JobListings from './components/JobListings';
import Applications from './components/Applications';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/jobs" element={<JobListings />} />
            <Route path="/applications" element={<Applications />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
