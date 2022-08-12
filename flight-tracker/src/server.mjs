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
app.get('/api/flights/:to/:from', async (req, res) => {
    console.log('new request boys, order up!');
    console.log('req ', req, 'res ', res);
    console.log('req.params.to', req.params.to, 'req.params.from', req.params.from);
    let data = await getFlights(req.params.to, req.params.from);
    console.log(JSON.parse(JSON.stringify(data)));
    res.send(JSON.parse(JSON.stringify(data)));
})

app.listen(port, () => {
    console.log('Listening on port ' + port);
});