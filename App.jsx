import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Transactions from './components/Transactions';
import Profile from './components/Profile';
import './App.css';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
