import { accessData, saveData } from "../../utils/appLocalstorage";
import * as types from "./actionType"

const initialState={
    token:accessData("token")||"",
    isAuthLoading:false,
    isLoading:false,
    isAuth:accessData("token")?true:false
}

const reducer=(oldState=initialState,action)=>{
const {type,payload}=action;
switch(type){
    case types.USER_LOGIN_REQUEST:
        return {
            ...oldState,
            isAuthLoading:true,
        }
    case types.USER_LOGIN_SUCCESS:
        saveData("token",payload)
        return {
            ...oldState,
            isAuthLoading:false,
            token:payload,
            isAuth:true
        }
    case types.USER_LOGIN_FAILURE:
        return {
            ...oldState,
            isAuthLoading:false,
            token:"",
            isAuth:false,
        }
    default:
        return oldState
}
}


export {reducer}