import React from 'react'

const Table = ({formdata,deletehandler}) => {
  return (
    <div>
      <table className='table table-hover table-striped'>
      <thead>
        <tr>
          <th>Sl.No</th>
          <th>NAME</th>
          <th>ROLE</th>
          <th>AGE</th>
          <th>OPERATIONS</th>
        </tr>
      </thead>
      <tbody>
        {
          formdata.map((om,index)=>{
            return <tr>
                 <td>{index+1}</td>
                 <td>{om.form.name}</td>
                 <td>{om.form.role}</td>
                 <td>{om.form.age}</td>
                 <td><button onClick={()=>deletehandler(index)}>delete</button></td>
            </tr>
          })
        }
      </tbody>
    </table>
    </div>
  )
}

export default Table
