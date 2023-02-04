const { ADD_USER_REQUEST, ADD_USER_SUCCESS, ADD_USER_FAIL, GET_ALL_USER_REQUEST, GET_ALL_USER_SUCCESS, GET_ALL_USER_FAIL } = require("../constants/userConstants");

export const userReducer=(state={user:{}},{type,payload})=>{

    switch(type){
case ADD_USER_REQUEST:
return{
    payload:null,
    loading:true,
}
case ADD_USER_SUCCESS:
    return{
           user:payload.newuser,
   success:payload.success,
   ...state
    }
case ADD_USER_FAIL:
    return{
        error:payload,
       
    }
default:
    return{
    ...state
}
}
}

export const getUsesReducer=(state={users:{}},{type,payload})=>{
   

    switch(type){

case GET_ALL_USER_REQUEST:
    return{
        users:null,
 
    }
    case GET_ALL_USER_SUCCESS:
        return{
  users:payload.users,
  success:payload.success,
        }
        case GET_ALL_USER_FAIL:
            return{
             users:null,
             error:payload
            }
 
        default:
            return {...state};
    }



}