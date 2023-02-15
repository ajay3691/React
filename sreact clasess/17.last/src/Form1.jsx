import React, { useState } from 'react'
const Form1 = () => {
  const[form,setForm]=useState({
                  name:"",
                  role:"",
                  age:""
 })
//  const[formdata,setFormdata]=useState([])
 const updatehandler=(event)=>{
 setForm({...form,[event.target.name]:event.target.value})
 }
 const submithandler=(event)=>{
console.log(form)
event.preventDefault()
 }
  return (
   <div className="container">
    <pre>{JSON.stringify(form)}</pre>
    <center><h1 >Crickters Data</h1></center>
    <table>
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
       <form onSubmit={submithandler}>
       <tr>
            <td>
                INDEX
            </td>
            <td>
                <input type="text" placeholder='Name' className='form-control'name='name' onChange={updatehandler}/>
            </td>
            <td>
                <input type="text" placeholder='Role'className='form-control'name='role' onChange={updatehandler}/>
            </td>
            <td>
                <input type="number" placeholder='Age' className='form-control'name='age' onChange={updatehandler}/>
            </td>
            <td>
                <button className='btn btn-success'>submit</button>
            </td>
        </tr>
       </form>
      </tbody>
    </table>
   </div>
  )
}

export default Form1
