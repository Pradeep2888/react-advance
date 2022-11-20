import * as types from "./actionType"

const userLoginRequist=()=>{
    return {
        type: types.USER_LOGIN_REQUEST
    }
}
const userLoginSuccess=(payload)=>{
    return {
        type: types.USER_LOGIN_SUCCESS,
        payload
    }
}
const userLoginFailure=()=>{
    return {
        type: types.USER_LOGIN_FAILURE
    }
}

export  {userLoginFailure,userLoginRequist,userLoginSuccess}