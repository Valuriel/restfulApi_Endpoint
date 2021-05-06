import React from 'react';

import Table from 'react-bootstrap/Table'

export const BookingsTable = () => {
    return (
        
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
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>5</td>
                  <td>Helsinki</td>
                  <td>5 h</td>
                  <td>450 €</td>
                  <td>Finland</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                
              </tbody>
            </Table>
        
    );
};

export default BookingsTable;