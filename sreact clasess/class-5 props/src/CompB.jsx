import React, { Component } from 'react'

export class CompB extends Component {
  render() {
    return (
      <div>
        <hr />
        <h2>Component B</h2>
        <pre>{JSON.stringify(this.props)}</pre>
      </div>
    )
  }
}

export default CompB
