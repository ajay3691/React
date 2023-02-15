import React, { Component } from 'react'

class Counter extends Component {
    state = {
        name: "Realme c2",
        image: 'https://rukminim1.flixcart.com/image/312/312/l0jwbrk0/mobile/a/p/r/-original-imagcb64gwkhzdk5.jpeg?q=70',
        price: 8000,
        qty: 1,

    }
    incrHandler = () => {
        this.setState({ qty: this.state.qty + 1 })
    }
    decrHandler = () => {
        this.setState({ qty: this.state.qty - 1 })
    }
    render() {
        return <div className="container mt-5">
            <div className="row">
                <div className="col-md-8">
                    <table className="table table-hover">
                        <thead className="bg-dark text-white">
                            <th>Name</th>
                            <th>image</th>
                            <th>Price</th>
                            <th>QTY</th>
                            <th>Total price</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.name}</td>
                                <td><img src={this.state.image} height="80px" alt="Buy mobile phone" /></td>
                                <td>{this.state.price}</td>
                                <td> <i className="fa fa-minus-circle" onClick={this.decrHandler}></i> {this.state.qty} <i onClick={this.incrHandler} className="fa fa-plus-square"></i> </td>
                                <td>{this.state.qty * this.state.price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    }
}

export default Counter
