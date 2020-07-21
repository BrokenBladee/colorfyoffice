import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Calendar from './components/Calendar/Calendar';

import { Provider } from 'react-redux';
import store from './store';

//The main class that combines every other class and creates the Website
class App extends Component {
  //State that contains an Array
  state = {
    //The array contains five objects each representing one day with the variables id, name and date
    days: [
      {
        id: 1,
        name: 'Monday',
        date: '20.07.20',
      },
      {
        id: 2,
        name: 'Tuesday',
        date: '21.07.20',
      },
      {
        id: 3,
        name: 'Wednesday',
        date: '22.07.20',
      },
      {
        id: 4,
        name: 'Thursday',
        date: '23.07.20',
      },
      {
        id: 5,
        name: 'Friday',
        date: '24.07.20',
      },
    ],
  };

  render() {
    return (
      //The div that implemnts the Header, NavBar and the Calender that contains the days
      <Provider store={store}>
        <div className='App'>
          <Header />
          <NavBar />
          {/* the array "days" is transfered to Calender so it has access to the content of it*/}
          <Calendar days={this.state.days} />
        </div>
      </Provider>
    );
  }
}
export default App;
