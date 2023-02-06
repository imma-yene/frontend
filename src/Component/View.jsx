
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../Action/userAction";
import { v4 as uuidv4 } from 'uuid';
function View() {
    
const {users,success,error}=useSelector(state=>state.users);
const dispatch=useDispatch();


console.log(typeof(users))
useEffect(()=>{
    dispatch(getAll())
},[dispatch])


    return(  
    
       <table className="table table-dark">
        <thead>
            <tr>
                <th>
                   id
                </th>
                <th>
               Firstname

                </th>
                <th>
                   Lastname
                </th>
                <th>
                 Username
                </th>
            </tr>
        </thead>
        <tbody>
    {users&&Array.from(users).map((user)=>{

return<tr key={uuidv4()}>
<td >
    {user._id}
</td>
<td >
{user.firstname}
</td>
<td >
{user.lastname}
</td>
<td >
{user.username}
</td>
</tr>
    })
    }
            
        </tbody>
       </table>
    
    
    )
}

export default View;