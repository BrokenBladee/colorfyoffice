import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import NavBar from  './components/NavBar'
import Calendar from './components/Calendar/Calendar'
import { v4 as idv4 } from 'uuid';

//The main class that combines every other class and creates the Website
class App extends Component {
  //State that contains an Array
  state = {
    //The array contains five objects each representing one day with the variables id, name and date 
    days: [
      {
        id: 1,
        name: 'Monday',
        date: '20.07.20'
      },
      {
        id: 2,
        name: 'Tuesday',
        date: '21.07.20'
      },
      {
        id: 3,
        name: 'Wednesday',
        date: '22.07.20'
      },
      {
        id: 4,
        name: 'Thursday',
        date: '23.07.20'
      },
      {
        id: 5,
        name: 'Friday',
        date: '24.07.20'
      }
    ],
    entries:[
      {
        idEntry: idv4(),
        firstName: 'John',
        lastName:'doe',
        reason: 'idk'
      },
      {
        idEntry: idv4(),
        firstName: 'John',
        lastName:'Doe',
        reason: 'idk'
      }
    ]
  }

  delEntry = (idEntry) =>{
    this.setState({entries:[...this.state.entries.filter(entry => entry.idEntry !== idEntry)]})
  }

  assignN = (firstName, lastName, reason2) =>{
    console.log(firstName, lastName, reason2)
    const newEntry = {
      idEntry: idv4(),
      firstName,
      lastName,
      reason: reason2, 
    }
    this.setState({entries: [...this.state.entries, newEntry]})
  }

  render(){
    return (
      //The div that implemnts the Header, NavBar and the Calender that contains the days 
      <div className="App">
        <Header />
        <NavBar />
        {/* the array "days" is transfered to Calender so it has access to the content of it*/}
        <Calendar days={this.state.days} entries={this.state.entries} delEntry={this.delEntry} assignN={this.assignN} />
      </div>
    );
  }
}
export default App;
