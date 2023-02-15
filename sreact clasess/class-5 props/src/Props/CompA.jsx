// class to class props
import React, { Component } from 'react'
import CompB from './CompB'
export class CompA extends Component {
  msg = "hello World"
  s_name = 'Guna sekhar' 
  s_collage = "Dravidean University"
  village = "kuppam" 
  s_address = ["nadimpalli",'thumsi']

  deatils = {
    tn: "Tamilnadu",
    ap: "Andra Pradesh",
  }
  
  render() {
    return (
      <div>
        <h1>Component A</h1>
       <h2>My world = {this.msg}</h2>
        <h3>student Adress ={this.s_address[1]}</h3>
        <hr />
        <CompB message={this.msg}  collage = {this.s_collage}   state= {this.deatils}/>
    
      </div>
    )
  }
}

export default CompA
