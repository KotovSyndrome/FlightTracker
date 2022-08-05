import './App.css';
import AirportSearchBar from './AirportSearchBar.jsx';
import FlightTable from './FlightTable.jsx';
import React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
        <AirportSearchBar />
        <FlightTable />
    </React.Fragment>
  );
}

export default App;
