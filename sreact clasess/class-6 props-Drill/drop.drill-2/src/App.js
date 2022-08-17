import React from 'react'
import Display from './Components/Display'
import Navbar from './Navbar/Navbar'
class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Display/>
            </div>
        )
    }
}

export default App
