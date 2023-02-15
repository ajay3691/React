// class..
import React, { Component } from 'react'

class CompB extends Component {
    render() {
        return (
            <div>
                <hr />
                <h2>Coponent B</h2>

                <pre>{JSON.stringify(this.props)}</pre>
                <h3> {this.props.message}</h3>
                {/* <pre>{JSON.stringify(this.props.details)}</pre> */}
                <h2>{this.props.details.emp_Id}</h2>
            </div>
        )
    }
}

export default CompB
