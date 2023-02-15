import React from 'react'
class Message extends React.Component {

    state = {
        message: "Hello"
    }
    changeMessageHandler = () => {
        this.setState({ message: "Hello,Mr Rahul Gandhi" })
       // console.log("Test case two")
    }

    render() {
       // console.log("Test case one")
        return <div>
            <h1>Wish Messaage:{this.state.message}</h1>
            <button onClick={this.changeMessageHandler}>Change Buddy</button>
        </div>
    }
}
export default Message