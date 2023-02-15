import React from 'react'
import Counter from './Counter/Counter3'
//import Product from './Product/Product1'
import Navbar from './Navbar/Navbar'

class App extends React.Component {
    render() {
        return <div>
            <Navbar />
            <h1></h1>
            <hr />
            <Counter />
            {/* <Product/> */}
        </div>
    }
}
export default App