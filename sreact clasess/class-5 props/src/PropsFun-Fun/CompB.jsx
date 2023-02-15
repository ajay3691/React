import React from 'react'

const CompB = (props) => {
  return (
    <div>
      <h2>Component B</h2>
      <hr />
      <pre>{JSON.stringify(props)}</pre>

      <h3> wish: {props.message}</h3>
      <h3> movie: {props.movie}</h3>
    </div>
  )
}

export default CompB
