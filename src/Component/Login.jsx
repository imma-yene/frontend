
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../Action/userAction";
function Login() {
    
const {users,success,error}=useSelector(state=>state.users);
const dispatch=useDispatch();


console.log(users)
useEffect(()=>{
    dispatch(getAll())
},[dispatch])


    return(  
    
       <table >
        <thead>
            <tr>
                <th>
                   id
                </th>
                <th>
               fname
                </th>
                <th>
                   Lastname
                </th>
                <th>
                 uname
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>
                  
                  
                </th>
                <th>

                </th>
                <th>

                </th>
                <th>

                </th>
            </tr>
        </tbody>
       </table>
    
    
    )
}

export default Login;