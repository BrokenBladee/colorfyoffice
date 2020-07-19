import React, { Component } from 'react'
import '../App.css'

export class Calendar extends Component {
  render() {
    return (
      <div class="md:flex justify-center flex-wrap mx-auto h-auto">
      
      <div class="days">
        <div class="bg-gray-600 rounded shadow p-2 text-lg text-center "><h2>Monday</h2></div>
        <div class="flex">
            
          <div class="bg-gray-600 rounded shadow p-2 mt-1 flex-grow self-start mr-2 text-sm min-w-9 max-w-9">8:00-12:00 
          </div>
          <div class="flex flex-col bg-gray-600 rounded shadow p-2 mt-1 flex-grow min-h-1">
            Name: Laurin Notemann
            <button class="bg-gray-400 rounded shadow-xl px-4 py-2 self-center mt-3 text-lg hover:bg-gray-700">Assign</button>
          </div>
        </div>
          <div class="flex">
            <div class="bg-gray-600 rounded shadow p-2 mt-1 flex-grow self-start mr-2 text-xs min-w-9 max-w-9">13:00-18:00</div>
            <div class="flex flex-col bg-gray-600 rounded shadow p-2 mt-1 flex-grow min-h-1">
              Name: Laurin Notemann
              <button class="bg-gray-400 rounded shadow-xl px-4 py-2 self-center mt-3 text-lg hover:bg-gray-700">Assign</button>
            </div>
          </div>
      </div>
    

      <div class="days">
        <div class="bg-gray-600 rounded shadow p-2 text-lg text-center "><h2>Tuesday</h2></div>
        <div class="flex">
            
          <div class="bg-gray-600 rounded shadow p-2 mt-1 flex-grow self-start mr-2 text-sm min-w-9 max-w-9">8:00-12:00 
          </div>
          <div class="flex flex-col bg-gray-600 rounded shadow p-2 mt-1 flex-grow min-h-1">
            Name: Laurin Notemann
            <button class="bg-gray-400 rounded shadow-xl px-4 py-2 self-center mt-3 text-lg hover:bg-gray-700">Assign</button>
          </div>
        </div>
          <div class="flex">
            <div class="bg-gray-600 rounded shadow p-2 mt-1 flex-grow self-start mr-2 text-xs min-w-9 max-w-9">13:00-18:00</div>
            <div class="flex flex-col bg-gray-600 rounded shadow p-2 mt-1 flex-grow min-h-1">
              Name: Laurin Notemann
              <button class="bg-gray-400 rounded shadow-xl px-4 py-2 self-center mt-3 text-lg hover:bg-gray-700">Assign</button>
            </div>
          </div>
      </div>
      
      <div class="days">
        <div class="bg-gray-600 rounded shadow p-2 text-lg text-center "><h2>Wednesday</h2></div>
        <div class="flex">
            
          <div class="bg-gray-600 rounded shadow p-2 mt-1 flex-grow self-start mr-2 text-sm min-w-9 max-w-9">8:00-12:00 
          </div>
          <div class="flex flex-col bg-gray-600 rounded shadow p-2 mt-1 flex-grow min-h-1">
            Name: Laurin Notemann
            <button class="bg-gray-400 rounded shadow-xl px-4 py-2 self-center mt-3 text-lg hover:bg-gray-700">Assign</button>
          </div>
        </div>
          <div class="flex">
            <div class="bg-gray-600 rounded shadow p-2 mt-1 flex-grow self-start mr-2 text-xs min-w-9 max-w-9">13:00-18:00</div>
            <div class="flex flex-col bg-gray-600 rounded shadow p-2 mt-1 flex-grow min-h-1">
              Name: Laurin Notemann
              <button class="bg-gray-400 rounded shadow-xl px-4 py-2 self-center mt-3 text-lg hover:bg-gray-700">Assign</button>
            </div>
          </div>
      </div>

      <div class="days">
        <div class="bg-gray-600 rounded shadow p-2 text-lg text-center "><h2>Thursday</h2></div>
        <div class="flex">
            
          <div class="bg-gray-600 rounded shadow p-2 mt-1 flex-grow self-start mr-2 text-sm min-w-9 max-w-9">8:00-12:00 
          </div>
          <div class="flex flex-col bg-gray-600 rounded shadow p-2 mt-1 flex-grow min-h-1">
            Name: Laurin Notemann
            <button class="bg-gray-400 rounded shadow-xl px-4 py-2 self-center mt-3 text-lg hover:bg-gray-700">Assign</button>
          </div>
        </div>
          <div class="flex">
            <div class="bg-gray-600 rounded shadow p-2 mt-1 flex-grow self-start mr-2 text-xs min-w-9 max-w-9">13:00-18:00</div>
            <div class="flex flex-col bg-gray-600 rounded shadow p-2 mt-1 flex-grow min-h-1">
              Name: Laurin Notemann
              <button class="bg-gray-400 rounded shadow-xl px-4 py-2 self-center mt-3 text-lg hover:bg-gray-700">Assign</button>
            </div>
          </div>
      </div>

      <div class="days">
        <div class="bg-gray-600 rounded shadow p-2 text-lg text-center "><h2>Friday</h2></div>
        <div class="flex">
            
          <div class="bg-gray-600 rounded shadow p-2 mt-1 flex-grow self-start mr-2 text-sm min-w-9 max-w-9">8:00-12:00 
          </div>
          <div class="flex flex-col bg-gray-600 rounded shadow p-2 mt-1 flex-grow min-h-1">
            Name: Laurin Notemann
            <button class="bg-gray-400 rounded shadow-xl px-4 py-2 self-center mt-3 text-lg hover:bg-gray-700">Assign</button>
          </div>
        </div>
          <div class="flex">
            <div class="bg-gray-600 rounded shadow p-2 mt-1 flex-grow self-start mr-2 text-xs min-w-9 max-w-9">13:00-18:00</div>
            <div class="flex flex-col bg-gray-600 rounded shadow p-2 mt-1 flex-grow min-h-1">
              Name: Laurin Notemann
              <button class="bg-gray-400 rounded shadow-xl px-4 py-2 self-center mt-3 text-lg hover:bg-gray-700">Assign</button>
            </div>
          </div>
      </div>

      
    </div>
    )
  }
}

export default Calendar
