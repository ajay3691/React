import React, { Component } from 'react'

export class CompB extends Component {
  render() {
    return (
      <div>
        <h1>Coponent B</h1>

        <pre>{JSON.stringify(this.props)}</pre>

        <h2>student collage = {this.props.collage}</h2>
        <h3>state = {this.props.state.ap}</h3>
        <h3>state = {this.props.state.tn}</h3> 

      </div>
    )
  }
}

export default CompB
