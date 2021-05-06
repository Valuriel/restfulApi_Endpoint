import React, {Component} from 'react';
import BookingsTable from './components/BookingsTable';

class App extends Component {
  render() {
    return (
      <div class="card">
        <h1>Your bookings!</h1>
            <BookingsTable />
      </div>
    );
  }
};

export default App;
