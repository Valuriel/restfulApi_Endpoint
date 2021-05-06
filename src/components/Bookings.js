import React, { Component } from 'react';
import axios from "axios";

import Table from 'react-bootstrap/Table';
// import BookingData from './data/bookings.json';

const API = "http://localhost:3001/";


class Bookings extends Component {

    state = {
        bookings: [
            // {
            //     "email_id": "lee@marvel.com",
            //     "dateOfCreation": "01-01-2021",
            //     "venueName": "Hilton Hotel",
            //     "people": "4",
            //     "eventData": "05-01-2021",   
            //     "eventDuration": "4 h",
            //     "totalPrice": 720,
            //     "country": "Finland"
            // },
            // {
            //     "email_id": "vader@starwars.com",
            //     "dateOfCreation": "06-06-2021",
            //     "venueName": "force chamber",
            //     "people": "2",
            //     "eventData": "08-08-2021",
            //     "eventDuration": "6 h",
            //     "totalPrice": 1000,
            //     "country": "Far far away"
            // },
            // {
            //     "email_id": "picard@enterprise.com",
            //     "dateOfCreation": "30-11-2221",
            //     "venueName": "USS Enterprise",
            //     "people": "10",
            //     "eventData": "09-12-2221",
            //     "eventDuration": "10 h",
            //     "totalPrice": 2500,
            //     "country": "Outer space"
            // }
        ]
      };
    
      componentDidMount() {
        // fetch('./data/bookings.json')
        // .then(res => res.json())
        // .then((bookings) => {
        //   this.setState({ bookings })
          console.table(this.state.bookings)
        // })
        // .catch(console.log)

      axios
      .get(API, {
        // params: {
        //   _limit: 15,
        // },
      })
      .then((response) => {
        // this.setState({ posts: response.data, isLoading: false })
        console.log(response);
        this.setState({bookings: response.data});
      }
      );
      }

    render() {
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
                        <td>{bookings[booking].dateOfCreation}</td>
                        <td>{bookings[booking].email_id}</td>
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