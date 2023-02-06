import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { deleteone } from "../Action/userAction";
const Del=()=>{

    const {id}=useParams();
useEffect(()=>{
deleteone({id:id})

},[id])
return(<div>

<h1>ID is {id}</h1>

</div>)

}
export default Del;
