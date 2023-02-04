import axios from 'axios';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { AddUsers } from '../Action/userAction';
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const  Register=()=>{

  const dispatch =useDispatch();
  const {user,error,success}=useSelector((state)=>state.user)

const [Data,setData]=useState({
  fname:"",
  lname:"",
  uname:"",
  pass:" "

}

)

const handle=(e)=>{
  
  const {name,value}=e.target;
 setData( (prev)=>{
return{...prev,[name]:value}

} )
console.log()
}
const option={
headers:{
  'Content-Type': 'application/json'
  
}}
const RegisterUser=async(e)=>{

  dispatch(AddUsers(Data))
 
 e.preventDefault();

}
 
// useEffect(()=>{
 
// },[success])
  return (
    <div className='Register rounded' > 
       <center>Register User</center>
    <Form className='reg'  onSubmit={RegisterUser}> 
        <Form.Group className="mb-3" controlId="Input1">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" name='fname'  onChange={handle} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Input2">
        <Form.Label>Lastname Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" name='lname' onChange={handle}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="Input3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" name='uname'  onChange={handle}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="Textarea1">
        <Form.Label>password</Form.Label>
        <Form.Control type="password" placeholder='password' name='pass' onChange={handle} />
      </Form.Group>
     <Form.Group>
     <div className="d-grid gap-2">
      <Button variant="primary" size="lg" type='submit'  >
       <center> Register    </center> 
      </Button></div>
     </Form.Group>
    </Form>
    </div>
  );
}

export default Register;