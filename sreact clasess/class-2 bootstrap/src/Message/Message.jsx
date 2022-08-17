import React from 'react'
class Message extends React.Component {
    tname = "Sree Sree"
    taward  = "Padma sree"
    timage  = "https://jsnbooks.com/uploads/2019/Maro-Prasthanam-Telugu-Book-By-Sri-Sri-Sree-Sree.jpg"
    render() {
        return  <div>
            <h1>Telugu poet Name:{this.tname}</h1>
            <h3>Award:{this.taward}</h3>
            <img src={this.timage} alt="telugu great poet" height="50%" />
            <button className="btn btn-success">test</button>
         </div>
        
    }
}

export default Message
