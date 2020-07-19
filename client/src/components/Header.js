import React, { Component } from 'react'
import '../App.css'


//The header with the title: "Colorfy Office Schedule"
export class Header extends Component {
  render() {
    return (
      //Creating a header with the Tailwind framework
      <header className="flex flex-wrap bg-gray-500 text-5xl text-white shadow justify-between px-4">
        {/* The Text that is displayed on the website */}
        <div className="">Colorfy Office Schedule</div>
         {/* <div> Events</div>
          <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white ml-2 mt-4 md:mt-0 mb-4 md:mb-0 self-center">Login</button>  */}
     </header>
    )
  }
}

export default Header;
