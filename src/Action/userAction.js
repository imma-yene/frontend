import axios from "axios"

import { ADD_USER_FAIL, ADD_USER_REQUEST, ADD_USER_SUCCESS, GET_ALL_USER_FAIL, GET_ALL_USER_REQUEST, GET_ALL_USER_SUCCESS } from "../constants/userConstants"

 

export const AddUsers=(userdata)=>async(dispatch)=>{
  try{
const config= {
    headers: {
        'Content-Type': 'application/json'
    }
}

    dispatch({type:ADD_USER_REQUEST})
    console.log(userdata)
    const {data}= await axios.post('/register',
    userdata
    ,
    config
    )
     
    dispatch({type:ADD_USER_SUCCESS,
    payload:data
})
  
  }
  catch(err){
    dispatch({type:ADD_USER_FAIL})
  }
 
}
export const getAll=()=>async(dispatch)=>{

try{
    
    dispatch({type:GET_ALL_USER_REQUEST})
 
    const {data} =await axios.get('/getall')
    console.log(data)
    
dispatch({type:GET_ALL_USER_SUCCESS,
            payload:data ,
            
})
}catch(err)
{
    dispatch({type:GET_ALL_USER_FAIL})

}
}
