const express = require('express');

const cors = require('cors');

const app = express();
const port = 3000;

// Location of where the bookings are kept
let bookings = [];

app.use(cors());

// Configure middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.post('/booking', (req, res) => {
    const booking = req.body;

    console.log(booking);
    bookings.push(booking);
});

app.get('/bookings', (req, res) => {
    res.json(bookings);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));