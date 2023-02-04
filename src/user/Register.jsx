import React from "react";
import {useNavigate,Link} from 'react-router-dom'
const Register=()=>{
const navigate=useNavigate();
const handleLogin=()=>{
    navigate('/login')
}
return(
<div>

<h1> Regisrter</h1>

<button onClick={handleLogin}>Login</button>

</div>
)
}
export default Register;