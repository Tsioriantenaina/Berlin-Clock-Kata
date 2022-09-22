const express = require('express');
const cors = require('cors');

const clockRouter = require('./routes/clockRoute');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());

app.use(clockRouter);

app.listen(3005, () => {
    console.log('App running in port 3005');
})