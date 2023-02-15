import React, { Component } from 'react'

export class Counter1 extends Component {
    state = {
        qty: 1
    }
    decrHandler = ()=>{
        this.setState({qty:this.state.qty - 1})
    }
    incrHandler = ()=>{
        this.setState({qty:this.state.qty + 1})
    }

    render() {
        return (
            <>
            <h1>Counter Component</h1>
            <h2>Qty : {this.state.qty}</h2>
            <button onClick={this.incrHandler}>incr</button>
            <button onClick={this.decrHandler}>decr</button>

            </>
        )
    }
}

export default Counter1
