import React from 'react'
import Message from './Message/Message1' 
import Navbar from './Navbar/Navbar'
//import Employee from './Employee/Employee'
//import Counter from './Counter/Counter'
class App extends React.Component {
    render() {
        return <div>
            <Navbar />
            <hr />

            <Message />
            {/* <Counter /> */}
        </div>
    }
}
export default App