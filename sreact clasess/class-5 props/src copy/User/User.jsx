import React, { Component } from 'react'
import Emloyee from '../Employee/Employee'
export class User extends Component {

    users = [{ id: 101, name: "Rahul Gandhi", sal: 45000 },
    { id: 102, name: "Sonia Gandhi", sal: 55000 }]
    render() {
        return (
            <>
                <h2>User Component</h2>
                <hr />
                <Emloyee emp={this.users} />
            </>
        )
    }
}

export default User
