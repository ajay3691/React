import React, { useState } from 'react'
import Table from './Table';
const Form = () => {
  const[form,setForm]=useState({
                  name:"",
                  role:"",
                  age:"" 
 })
 const[formdata,setFormdata]=useState([])
 const updatehandler=(event)=>{
 setForm({...form,[event.target.name]:event.target.value})
 }
 const submithandler=(event)=>{         
    console.log(form)
    event.preventDefault()
    if(form !== ""){
      setFormdata([{form},...formdata])
      setForm("")
    } 
 }
 const deletehandler=(indexvalue)=>{
  const deletedata=formdata.filter((value,index)=>index!==indexvalue)
  setFormdata(deletedata);
 }
  return (
   <div className="container">
    <pre>{JSON.stringify(form)}</pre>
    <center><h1 >Crickters Data</h1></center>
    <form className='form-group' onSubmit={submithandler}>
    <div className="row mt-5">
         <div className="col-md-3"><input type="text" placeholder='Name' className='form-control' name='name' onChange={updatehandler}/></div>

        <div className="col-md-3"><input type="text" placeholder='Role' className='form-control' name='role' onChange={updatehandler}/></div>
        <div className="col-md-3"><input type="number" placeholder='Age' className='form-control' name='age' onChange={updatehandler}/></div>
        <div className="col-md-3"><button className='btn btn-success'>submit</button></div>
    </div>
    </form>
    <Table formdata={formdata} deletehandler={deletehandler}/>
   </div>
  )
}
export default Form
