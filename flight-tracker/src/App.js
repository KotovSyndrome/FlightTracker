import './App.css';
import AirportSearchBar from './AirportSearchBar';
import FlightTable from './FlightTable';
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
        <AirportSearchBar />
        <FlightTable />
    </React.Fragment>
  );
}

export default App;
