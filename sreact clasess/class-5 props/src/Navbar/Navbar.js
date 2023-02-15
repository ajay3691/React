import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
        <div>
           <nav className="navbar navbar-dark bg-dark">
               <a className="navbar-brand" href="/home">Props Example</a>    
           </nav>
        </div>
    )
  }
}

export default Navbar
