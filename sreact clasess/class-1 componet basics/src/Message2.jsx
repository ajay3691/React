import React from 'react'

const Message2 = () => {
   let apcm = 'Nara Chanadrababu Naidu'
    let ap = {
    astate : 'Andra pradesh',
    aAward : 'Best CM'
    }
  return (
    <div>
      <h2>Ravan maharaj</h2>
      <h3>{apcm}</h3>
      <h3>{ap.aAward}</h3>
    </div>
  )
}

export default Message2
