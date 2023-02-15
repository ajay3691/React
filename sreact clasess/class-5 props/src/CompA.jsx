import React, { Component } from 'react'
import CompB from './CompB'
export class CompA extends Component {
  eid = 101
  ename = 'rahul '
  esal = 45000
  
  render() {
    return (
      <div>
        <h2>Component A</h2>
        <CompB one={"Good morning"} two={"Good evening"} />
      </div>
    )
  }
}

export default CompA
