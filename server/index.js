'use strict';

const express = require('express');
const fs = require('fs');

const path = require('path');
const app = express();
const port = 3001;
const cors = require('cors');

let bookingsData = fs.readFileSync('bookings.json');
let bookings = JSON.parse(bookingsData);

app.use(cors());

app.get('/', (req, res) => {
    res.send(bookings);
});

app.listen(port, () => console.log(`Hello World app listening on port ${port}!`));