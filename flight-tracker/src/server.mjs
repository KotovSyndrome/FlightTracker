import { getFlights } from './services.mjs'
import express from 'express';
import cors from 'cors';
const app = express();
const port = 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
console.log('server started!');
app.use(
    cors({
        credentials: true,
        'Access-Control-Allow-Origin': '*',
    })
)
app.get('/api/flights/:to/:from', (req, res) => {
    console.log('req ', req, 'res ', res);
    console.log('req.params.to', req.params.to, 'req.params.from', req.params.from);
    res.send(getFlights(req.params.to, req.params.from));
})

app.listen(port, () => {
    console.log('Listening on port ' + port);
});