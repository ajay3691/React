import React, { Component } from 'react'
import Employee from './Employee'
class User extends Component {
    uid = 101;
    loc = ['Bangalore', 'New Delhi']
    details = {
        name: "Rahul Gandhi",
        email: "rahul@gmail.com"
    }
    render() {
        return <div className="row">
            <div className="col-md-6 bg-light">
                User Comp
               <h3>name={this.details.name}</h3> 
            </div>
            <div className="col-md-6 bg-primary">
                hey na raja
                <h3>user Id={this.uid}</h3>

               <Employee prop1={this.uid} prop2={this.loc} jai={this.details}/>
            </div>
        </div>
    }
}

export default User
