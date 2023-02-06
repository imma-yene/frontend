import React, { useEffect, useState } from "react";
import { Button,Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"
import { deleteone } from "../Action/userAction";
import swal from 'sweetalert2'

function Delete(){
  
 
const dispatch=useDispatch();
const {deleteuser,error,success}=useSelector((state)=>state.deleteuser)
const [id,setid]=useState()
const handle=(e)=>{
        const {name,value}=e.target;
        setid( (prev)=>{
       return{...prev,[name]:value}
       
       } )
      
    }
    const RegisterUser=async(e)=>{
        dispatch(deleteone(id))
 
        e.preventDefault();

    }
 
    useEffect(()=>{
    if(success){
       swal('User deleted','User deleted sucessfully','success') 
    }
    },[success])
    return(

        <div>
            <Form action="" method="post" >
                <Form.Group className="" >
                <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter id no" name='id'  onChange={handle} />
                </Form.Group>
                <Button variant="Danger" size="lg" onClick={RegisterUser}  >
       <center > Delete </center> 
      </Button>
         </Form>
        </div>
    )
}
export default Delete;