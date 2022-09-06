import React, { Component } from 'react'
import CompB  from './CompB'
export class CompA extends Component {
  msg = "hello World"
  s_name = 'Guna sekhar' 
  s_collage = "Dravidean University"
  c_address = "kuppam" 
  s_address = ["nadimpalli",'thumsi']

  deatils = {
    tn: "Tamilnadu",
    ap: "Andra Pradesh",
  }

  render() {
    return (
      <div>
        <h1>My world = {this.msg}</h1>
        <h3>atudent Adress ={this.s_address[0]}</h3>
        <CompB msg={this.msg}  clg = {this.s_collage}   Ap= {this.deatils}/>
    
      </div>
    )
  }
}

export default CompA
