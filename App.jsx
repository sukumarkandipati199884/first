import React from 'react';
import { Container, Grid } from '@mui/material';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import KPISection from './components/KPISection';
import AnalyticsSection from './components/AnalyticsSection';
import UserTable from './components/UserTable';
import ActivityFeed from './components/ActivityFeed';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <KPISection />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <AnalyticsSection />
          </Grid>
          <Grid item xs={12}>
            <UserTable />
          </Grid>
          <Grid item xs={12}>
            <ActivityFeed />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;