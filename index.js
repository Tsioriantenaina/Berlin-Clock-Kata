const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello berlin");
})

app.post('/api/clock', (req, res) => {
    res.status(200).json({message: "0000000000"});
})


app.listen(3005, () => {
    console.log('App running in port 3005');
})