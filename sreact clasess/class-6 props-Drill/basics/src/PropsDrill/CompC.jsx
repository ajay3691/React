import React, { Component } from 'react'
import CompD from './CompD'
class CompC extends Component {
    render() {
        return (
            <div>
                <h1>Kuppam</h1>
                <pre>{JSON.stringify(this.props)}</pre>
                <hr />
                <CompD name2={this.props.name1} />
                <h2>my name={this.props.name1}</h2>
            </div>
        )
    }
}

export default CompC
