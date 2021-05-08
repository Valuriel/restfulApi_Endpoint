import React, { Component } from 'react';
import axios from "axios";

import Table from 'react-bootstrap/Table';

// importing the backend to the frontend
const API = "http://localhost:3001/";


class Bookings extends Component {

    state = {
        bookings: []
      };
    
      componentDidMount() {
        // calling the API
        axios.get(API).then((response) => {
          this.setState({bookings: response.data});
          console.log(response);
          console.table(this.state.bookings)
        }
        );
        }
          
    render() {
      // displaying the JSON data into the table
        const { bookings } = this.state;
        return (

            <div>
                <center><h1>Bookings List</h1></center>
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
                
                {Object.keys(bookings).map((booking) => {
                    return (
                      
                        <tr key={booking}>
                        <td>{bookings[booking].email_id}</td>
                        <td>{bookings[booking].dateOfCreation}</td>             
                        <td>{bookings[booking].venueName}</td>
                        <td>{bookings[booking].people}</td>
                        <td>{bookings[booking].eventData}</td>
                        <td>{bookings[booking].eventDuration}</td>
                        <td>{bookings[booking].totalPrice}</td>
                        <td>{bookings[booking].country}</td>
                        </tr>                   
                    )
                })}
                </tbody> 
                </Table>
                </div>
            </div>
                  )
        }            
}
 
export default Bookings;