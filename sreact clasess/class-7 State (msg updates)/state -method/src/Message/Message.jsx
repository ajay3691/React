import React from 'react'
class Message extends React.Component {
   /*  constructor(props) {
        super(props);
    } */

    state = {
        message: "Hello"
    }
    changeMessageHandler = () => {
        this.setState({ message: "Hello,Mr Rahul Gandhi" })
    }

    render() {
        return <div>
            <h1>Wish Messaage:{this.state.message}</h1>
            <button onClick={this.changeMessageHandler}>Change Buddy</button>
        </div>
    }
}
export default Message