import React, { Component } from 'react'
import '../App.css'

//The navbar that contains the button previous and next week currently only displayed without any function
export class NavBar extends Component {
  render() {
    return(
    //Creating the navbar as a flexbox and adjusted with Tailwind
    <nav className="flex items-center justify-between flex-wrap bg-gray-700 shadow p-2">
      {/*Previous Week button designed with Tailwind */}
      <button className="ml-2 text-white hover:bg-white hover:text-black hover:rounded">Previous Week</button>
      {/*Next Week button designes with Tailwind */}
      <button className="mr-2 text-white hover:bg-white hover:text-black hover:rounded">Next Week</button>
    </nav>
    )
  }
}

export default NavBar
