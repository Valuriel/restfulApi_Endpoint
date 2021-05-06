'use strict';

const express = require('express');

const path = require('path');
const app = express();
const port = 3001;
const cors = require('cors');

let bookings = [
    {
        "email_id": "lee@marvel.com",
        "dateOfCreation": "01-01-2021",
        "venueName": "Hilton Hotel",
        "people": "4",
        "eventData": "05-01-2021",   
        "eventDuration": "4 h",
        "totalPrice": 720,
        "country": "Finland"
    },
    {
        "email_id": "vader@starwars.com",
        "dateOfCreation": "06-06-2021",
        "venueName": "force chamber",
        "people": "2",
        "eventData": "08-08-2021",
        "eventDuration": "6 h",
        "totalPrice": 1000,
        "country": "Far far away"
    },
    {
        "email_id": "picard@enterprise.com",
        "dateOfCreation": "30-11-2221",
        "venueName": "USS Enterprise",
        "people": "10",
        "eventData": "09-12-2221",
        "eventDuration": "10 h",
        "totalPrice": 2500,
        "country": "Outer space"
    }
];

// app.use('/', express.static(path.join(__dirname, '../codingexercise/src/')));

app.use(cors());

app.get('/', (req, res) => {
    res.send(bookings);
});

app.listen(port, () => console.log(`Hello World app listening on port ${port}!`));