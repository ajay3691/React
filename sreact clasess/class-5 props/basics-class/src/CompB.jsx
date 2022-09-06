import React, { Component } from 'react'

export class props2 extends Component {
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.props)}</pre>
        <h2>my = {this.props.msg}</h2>
        <h3> collage = {this.props.clg}</h3>
        <h3>state = {this.props.Ap.ap}</h3>
        <h3>state = {this.props.Ap.tn}</h3>
      </div>
    )
  }
}

export default props2
