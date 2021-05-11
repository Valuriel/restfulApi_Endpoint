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

// pagination setup
app.get('/bookings', (req, res) => {
    const page = parseInt(req.query.page);
    const limit =  parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    if(endIndex < bookings.length) {
        results.next = {
            page: page + 1,
            limit: limit
        };
    };

    if(startIndex > 0) {
        results.previous = {
            page: page - 1,
            limit: limit
        };
    };

    results.results = bookings.slice(startIndex, endIndex);
    res.send(results)
})

// start server
app.listen(port, () => console.log(`Hello World app listening on port ${port}!`));