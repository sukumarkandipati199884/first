import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import DashboardContent from './components/DashboardContent';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-layout">
        <Sidebar />
        <DashboardContent />
      </div>
    </div>
  );
}

export default App;
