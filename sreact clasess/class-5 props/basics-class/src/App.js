import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import CompA from './Components/CompA'

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <CompA/>
      </div>
    )
  }
}

export default App
