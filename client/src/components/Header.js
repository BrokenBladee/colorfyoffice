import React, { Component } from 'react'
import '../App.css'

export class Header extends Component {
  render() {
    return (
      <header class="flex flex-wrap bg-gray-500 text-5xl text-white shadow justify-between px-4">
        <div class=""> Colorfy Office Schedule</div>
         {/* <div> Events</div>
          <button class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white ml-2 mt-4 md:mt-0 mb-4 md:mb-0 self-center">Login</button>  */}
     </header>
    )
  }
}

export default Header;
