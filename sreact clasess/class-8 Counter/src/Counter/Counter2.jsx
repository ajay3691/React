import React, { Component } from 'react'

export class Counter1 extends Component {
    state = {
        qty: 1
    }
    decrHandler = () => {
        this.setState({ qty: this.state.qty - 1 })
    }
    incrHandler = () => {
        this.setState({ qty: this.state.qty + 1 })
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="crad">
                                <div className="card-header">
                                    <h5>Qty:{this.state.qty}</h5>
                                </div>
                                <div className="card-body">
                                    <button class="btn btn-success mr-5" onClick={this.incrHandler}>incr</button>
                                    <button class="btn btn-warning" onClick={this.decrHandler}>decr</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </>
        )
    }
}

export default Counter1
