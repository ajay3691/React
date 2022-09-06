import React from 'react'

function Message1() {
    let ename = "Guna"
    let details = {
        eid : 101 , 
        esal : 25000,
        eadress : "kuppam" ,
        e2adress : ["nadimpalli",'thumsi']

    }
  return (
    <div>
      <h2> employee Name = {ename}</h2>
      <h3>employee id = {details.eid}</h3>
      <h4>emplyee 2nd adress= {details.e2adress[1]}</h4>
    </div>
  )
}

export default Message1

