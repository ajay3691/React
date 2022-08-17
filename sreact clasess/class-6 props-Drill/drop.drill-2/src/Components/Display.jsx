import React, { Component } from 'react'
import User from './User'
class Display extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h1>Govinda</h1>
                        <User/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Display
