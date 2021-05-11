import React from "react";
import axios from "axios";

import Table from "react-bootstrap/Table";
import { useState } from "react";

export default function Bookings() {
  const [bookings, setBookings] = useState([]); 
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  // API call
  const getAll = () => {
    axios
      .get(`http://localhost:3001/`)
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getPage = () => {
    axios
      .get(`http://localhost:3001/bookings?page=${page}&limit=${limit}`)
      .then((response) => {
        setBookings(response.data.results);
      });
  };
 //rendering the buttons and the table with onclick funtionality
  return (
    <div>
      <center>
        <h1>Bookings List</h1>
        <button onClick={() => getAll()}>View All</button>
        <button
          onClick={() => {
            setPage(1);
            getPage();
          }}
        >
          View By Page
        </button>
        <button
          onClick={() => {
            setPage(page + 1);
            getPage();
          }}
        >
          Next Page
        </button>
        <button
          onClick={() => {
            setPage(page - 1);
            getPage();
          }}
        >
          Previous Page
        </button>
        <p> current page {page}</p>
      </center>
      <div>
        
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Email</th>
              <th>Created Date</th>
              <th>Venu Name</th>
              <th>Amount of People</th>
              <th>Event Data</th>
              <th>Event Duration</th>
              <th>Total Price</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => (
              <tr key={i}>
                <td>{booking.email_id}</td>
                <td>{booking.dateOfCreation}</td>
                <td>{booking.venueName}</td>
                <td>{booking.people}</td>
                <td>{booking.eventData}</td>
                <td>{booking.eventDuration}</td>
                <td>{booking.totalPrice}</td>
                <td>{booking.country}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}


