import { getFlights } from '/services.js'
const express = require('express');
const app = express();
const port = 3000;

app.get('/api/flights/:to/:from', (req, res) => {
    console.log('req ', req, 'res ', res);
    res.send(getFlights(req.params.to, req.params.from));
})

app.listen(port);