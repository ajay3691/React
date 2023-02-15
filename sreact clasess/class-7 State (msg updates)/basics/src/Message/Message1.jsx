import React from 'react'
class Message extends React.Component {
    constructor(props) {
        super(props);
       // console.log("const - First") // Constructor allways first excute
    }
    message = "Hello"

    MessageHandler= ()=> {
       // console.log('handleer.third')  // ofter render excute
        this.message = 'Hello, Good Morning'
        this.forceUpdate()
    }

    render() {
        //console.log("render - Second") // rendor method.. second excute
        return <div>
            <h1>Message Component</h1>
            <h3>Wish Message: {this.message}</h3>
            <button onClick={this.MessageHandler}>GM</button>
            <button>GN</button>
        </div>
    }
}
export default Message