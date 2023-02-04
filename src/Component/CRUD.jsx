
import React from 'react';
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

import { useNavigate}   from 'react-router-dom';

import Table from 'react-bootstrap/Table';
import './CRUD.css'
function CRUD (){

        const navigate=useNavigate()

        const navigateToRegister = () => {
          // 👇️ navigate to /contacts
          navigate('/Register')
        };
        
      
        const navigatetodelete = () => {
          // 👇️ navigate to /
          navigate('/Delete');
        };
        const navigatetoupdate=()=>{
          navigate('/Edit')
        }
    
    
    
    
        return(
            <div className='table1'>
               <center>  <h4>User List</h4>  </center> 
           <Table striped bordered hover size="sm">
          
            <Fade bottom duration={1200}>
      <thead >

        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      </Fade>
      <Fade left duration={1200}>
      <tbody  >
      
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
       
      </tbody>
      </Fade>
      <Fade bottom> 
      <tfoot className='foot' >
     
        <th>   <button className='btn btn-primary' onClick={navigateToRegister}>
          Add User
        </button> </th>
       <th>  <button className='btn btn-danger' onClick={navigatetodelete}>
            Delete User
        </button>   </th>
      <th>  <button className='btn btn-success' onClick={navigatetoupdate}>
            Edit User
        </button>  </th>
        <th>  <button className='btn btn-success' onClick={navigatetoupdate}>
            view history
        </button>  </th>
       
      </tfoot>
      </Fade>
    </Table>

            </div>
        )
       

    }
export default CRUD;