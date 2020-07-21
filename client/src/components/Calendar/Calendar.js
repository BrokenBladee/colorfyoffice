import React, { Component } from 'react'
import '../../App.css'
import Day from './Day'
import PropTypes from 'prop-types'

//The class for the whole week that is displayed
export class Calendar extends Component {
  render() {
    
    return (
      //A div that displays every day in a flexbox
      <div className="md:flex justify-center flex-wrap mx-auto h-auto">
        {/* An arrow function that creates a new array that creates one day for each entry in the array from "App.js"  */}
        {this.props.days.map((day)=>(
          <Day key={day.id} day={day}  />
        ))}
      </div>
    )
  }
}

//PropTypes
Calendar.propTypes = {
  days: PropTypes.array.isRequired
}

export default Calendar
