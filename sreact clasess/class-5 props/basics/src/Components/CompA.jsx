import React, { Component } from 'react'
import CompB from './CompB'
export class CompA extends Component {
    msg = "Good Morning"
  render() {
    return (
      <div>
       <h1>{this.msg}</h1>
       <CompB abcd={this.msg} />
      </div>
    )
  }
}

export default CompA
