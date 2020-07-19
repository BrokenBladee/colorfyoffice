import React, { Component } from 'react'

export class Entries extends Component {
  render() {
    return (
      <ul className= "flex-shrink">
        {this.props.entries.map((entry)=>(
          <li key={entry.idEntry} className="m-3 ">{entry.firstName} {entry.lastName} {entry.reason}<button onClick={this.props.delEntry.bind(this, entry.idEntry)} className="bg-gray-700 px-2 rounded-full curser-pointer float-right">x</button></li>
        ))}
        
        
        {/* <li>h1 <button className="bg-gray-700 px-2 mr-3 rounded-full curser-pointer float-right">x</button></li>
        <li>2</li> */}
      </ul>
    )
  }
}

export default Entries
