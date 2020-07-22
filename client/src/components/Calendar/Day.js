import React, { Component } from 'react';
import '../../App.css';
import PropTypes from 'prop-types';
import ABtn from './AssignBtn';

//The class for one Day that are displayed on the Website
export class Day extends Component {
  state = {
    id1: 'ab',
    id2: 'ad',
  };
  render() {
    return (
      //Creating a div that contains one day with the name, date and both time-windows. which displays the entries and has a button designed with Tailwind
      <div className='bg-gray-400 rounded m-8 p-2 shadow-xl self-start'>
        {/*The Head of every day that displays the name and the date of the day */}
        <div className='bg-gray-600 rounded shadow p-2 text-lg text-center '>
          {/*this.props.day.name and this.props.day.date are objects that are created in Calender.js*/}
          <h2>
            {this.props.day.name} {this.props.day.date}
          </h2>
        </div>

        {/*A flexbox that contains the time and every entry of the window and the button to assign */}
        <div className='flex'>
          {/*A that contains the time */}
          <div className='bg-gray-600 rounded shadow p-2 mt-1 flex-grow self-start mr-2 text-sm min-w-9 max-w-9'>
            8:00-12:00
          </div>

          {/* A list that contains every entry made by the assign button */}
          <div className='flex flex-col bg-gray-600 rounded shadow p-2 mt-1 flex-grow flex-shrink min-h-1'>
            {/* <Entries entries={this.props.entries} delEntry={this.props.delEntry} /> */}

            {/* Button: to be continued */}
            <ABtn id={this.id1} />
          </div>
        </div>
        {/* Same as the Flexbox above */}
        <div className='flex'>
          <div className='bg-gray-600 rounded shadow p-2 mt-1 flex-grow self-start mr-2 text-xs min-w-9 max-w-9'>
            13:00-17:00
          </div>
          <div className='flex flex-col bg-gray-600 rounded shadow p-2 mt-1 flex-grow min-h-1'>
            {/* <Entries entries={this.props.entries} delEntry={this.props.delEntry} /> */}
            <ABtn id={this.id2} />
          </div>
        </div>
      </div>
    );
  }
}

//PropTypes
Day.propTypes = {
  day: PropTypes.object.isRequired,
};

export default Day;
