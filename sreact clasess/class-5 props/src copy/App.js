import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import User from './User/User'
export class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
         <User/>
      </div>
    )
  }
}

export default App
