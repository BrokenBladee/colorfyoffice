import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import NavBar from  './components/NavBar'
import Calendar from './components/Calendar'

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header />
        <NavBar />
        <Calendar />
      </div>
    );
}
}
export default App;
