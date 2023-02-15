import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
//import CompA from './CompA'            //1
//import CompA from './Props/CompA'      //2
//import CompA from './Props-fun/CompA'  //3
import CompA from './PropsFun-Fun/CompA'   //4

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
