import React from 'react'
import CompB from './CompB'
function CompA () {
  let text = 'Romeo and Juliet'
  let writer = "William Shakespear"
  let deatils = {
   ename : "Rahul",
   esal : 45000,
   eadress: ['New dilhi','Hydrabad']
  }
  return (
    <div>
      <h2>Text Name = {text}</h2>
      <h3>Emplyoyee Name = {deatils.ename}</h3>
      <CompB book={text} emp={deatils}/>
    </div>
  )
}

export default CompA
