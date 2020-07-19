import React, { Component } from 'react'
import '../App.css'

export class NavBar extends Component {
  render() {
    return(
    <nav class="flex items-center justify-between flex-wrap bg-gray-700 shadow p-2">
      <button class="ml-2 text-white hover:bg-white hover:text-black hover:rounded">Previous Week</button>
      <button class="mr-2 text-white hover:bg-white hover:text-black hover:rounded">Next Week</button>
    </nav>
    )
  }
}

export default NavBar
