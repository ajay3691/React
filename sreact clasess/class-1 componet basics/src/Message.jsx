import React, { Component } from 'react'

export class Message extends Component {
  aname = 'Mahakavi Sree Sree'
  astate = 'Andra Pradesh '
    Telugu = {
      aadress : "Konda veedu", 
      aAward : "Padmasree"
    }

  render() {
    return (
      <div>
        <h1>Author Name = {this.aname}</h1>
        <h2>adress = {this.Telugu.aadress}</h2>
      </div>
    )
  }
}

export default Message
// class comonent