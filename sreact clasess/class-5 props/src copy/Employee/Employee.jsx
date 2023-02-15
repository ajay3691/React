import React, { Component } from 'react'

export class Employee extends Component {
    render() {
        return (
            <div>
                <h2>Employee Component</h2>
                <pre>{JSON.stringify(this.props)}</pre>

                <h4>Employee name : {this.props.emp[0].name}</h4>
                <h4>Employee name : {this.props.emp[1].name}</h4>
                {
                    this.props.emp.map((users) => {
                        return <tr>
                            <li></li>
                         </tr>
                    })
                }
            </div>
        )
    }
}

export default Employee
