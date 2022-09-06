import React from 'react'

function CompB(props) {
  return (
    <div>
      <hr />
      <pre>{JSON.stringify(props)}</pre>
      <h4>my book = {props.book} </h4>
      <h5>emp adress = {props.emp.eadress[1]}</h5>
    </div>
  )
}

export default CompB
