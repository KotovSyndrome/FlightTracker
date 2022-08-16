// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import data from './FlightData.json';
import { getFlights } from './services.mjs';

let rows = [];

function createFlights(airline, ident, aircraft, status, departure, arrival) {
    return { airline, ident, aircraft, status, departure, arrival };
}

// for (let i = 0; i < data.flights.length; i++) {
//   rows.push(createFlights(data.flights[i].segments[0].operator, data.flights[i].segments[0].ident, data.flights[i].segments[0].aircraft_type, 'Scheduled (On Time)', data.flights[i].segments[0].scheduled_out, data.flights[i].segments[0].scheduled_in));
// }

for (let flight of data.flights) {
  rows.push(createFlights(flight.segments[0].operator, flight.segments[0].ident, flight.segments[0].aircraft_type, 'Scheduled (On Time)', 
  (flight.segments[0].scheduled_out === null ? 'none' : humanReadableDateTime(flight.segments[0].scheduled_out)[0] + ' ' + humanReadableDateTime(flight.segments[0].scheduled_out)[1]),
  (flight.segments[0].scheduled_in === null ? 'none' : humanReadableDateTime(flight.segments[0].scheduled_in)[0] + ' ' + humanReadableDateTime(flight.segments[0].scheduled_in)[1])));
}

function humanReadableDateTime(date_time_string) {
  // let new_date_time = date_time_string.split('T');
  // console.log(new_date_time);
  return date_time_string.split('T');
}

  // let date_arr = {};
  // for (let flight of data.flights) {
  //   date_arr[flight.segments[0].scheduled_out] = humanReadableDateTime(flight.segments[0].scheduled_out);
  // }

// const rows = [
    // createFlights(data.flights[0].segments[0].operator, data.flights[0].segments[0].ident, data.flights[0].segments[0].aircraft_type, 'Scheduled (On Time)', data.flights[0].segments[0].scheduled_out, data.flights[0].segments[0].scheduled_in)
    // createFlights('Skywest', 'SKW3537', 'E75L', 'Scheduled (On Time)', 'Wed 05:18PM PDT', 'Wed 05:18PM PDT'),
    // createFlights('United', 'UAL2014', 'A320', 'Scheduled (On Time)', 'Wed 04:15PM PDT', 'Wed 05:52PM PDT'),
    // createFlights('Southwest', 'SWA2271', 'B737', 'Scheduled (On Time)', 'Wed 03:55PM PDT', 'Wed 05:20PM PDT'),
    // createFlights('Skywest', 'SKW6270', 'E75S', 'Scheduled (On Time)', 'Wed 03:34PM PDT', 'Wed 05:07PM PDT'),
    // createFlights('JetBlue', 'JBU2835', 'A320', 'Scheduled (On Time)', 'Wed 10:13AM PDT', 'Wed 11:47PM PDT'),
// ]
    
export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Airline</TableCell>
            <TableCell align="center">Ident</TableCell>
            <TableCell align="center">Aircraft</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Departure</TableCell>
            <TableCell align="center">Arrival</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.ident}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.airline}
              </TableCell>
              <TableCell align="center">{row.ident}</TableCell>
              <TableCell align="center">{row.aircraft}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">{row.departure}</TableCell>
              <TableCell align="center">{row.arrival}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
