import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createFlights(airline, ident, aircraft, status, departure, arrival) {
    return { airline, ident, aircraft, status, departure, arrival };
}

const rows = [
    createFlights('Skywest', 'SKW3537', 'E75L', 'Scheduled (On Time)', 'Wed 05:18PM PDT', 'Wed 05:18PM PDT'),
    createFlights('United', 'UAL2014', 'A320', 'Scheduled (On Time)', 'Wed 04:15PM PDT', 'Wed 05:52PM PDT'),
    createFlights('Southwest', 'SWA2271', 'B737', 'Scheduled (On Time)', 'Wed 03:55PM PDT', 'Wed 05:20PM PDT'),
    createFlights('Skywest', 'SKW6270', 'E75S', 'Scheduled (On Time)', 'Wed 03:34PM PDT', 'Wed 05:07PM PDT'),
    createFlights('JetBlue', 'JBU2835', 'A320', 'Scheduled (On Time)', 'Wed 10:13AM PDT', 'Wed 11:47PM PDT'),
]
    
export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Airline</TableCell>
            <TableCell align="right">Ident</TableCell>
            <TableCell align="right">Aircraft</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Departure</TableCell>
            <TableCell align="right">Arrival</TableCell>
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
              <TableCell align="right">{row.ident}</TableCell>
              <TableCell align="right">{row.aircraft}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.departure}</TableCell>
              <TableCell align="right">{row.arrival}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
