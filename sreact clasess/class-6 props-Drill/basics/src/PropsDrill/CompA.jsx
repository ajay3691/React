import React, { Component } from 'react'
import CompB from './CompB'
class CompA extends Component {
    ename = "Rahul Gandhi"
    eloc = ["Wayanad", "New Delhi"]
    render() {
        return (
            <div>
                <h1>Andra Pradesh</h1>
                <hr />
               { <h2> {this.ename}</h2>}
                <CompB raja={this.ename} loc={this.eloc} />
            </div>
        )
    }
}

export default CompA
