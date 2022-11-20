import axios from 'axios'
import React, { useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { userLoginFailure, userLoginRequist, userLoginSuccess } from '../Redux/AuthReducer/action'

function Login() {
    const [useremail,setUseremail]=useState("")
    const [userpassword,setUserpassword]=useState("")
    const dispatch=useDispatch()
    const isAuth=useSelector((state)=>{return state.AuthReducer},shallowEqual)

    console.log(isAuth)

     const handleLogin=()=>{
      if(useremail && userpassword){
        const payload={
            email:useremail,
            password:userpassword
        }
        dispatch(userLoginRequist())
        return axios.post(`https://reqres.in/api/login`,payload)
        .then(r=>{
            dispatch(userLoginSuccess(r.data.token))
        }).catch((e)=>{
            dispatch(userLoginFailure(e))
        })
      }
     }

    return (
    <div>
        <h3>{isAuth.token}</h3>
        <input placeholder='email' type="email" onChange={(e)=>{setUseremail(e.target.value)}} />
        <br/>
        <input placeholder='password' type="password" onChange={(e)=>{setUserpassword(e.target.value)}} />
        <br/>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login