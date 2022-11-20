import axios from 'axios'
import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTodosFailure, getTodosRequest, getTodosSuccess, postTodoFailure, postTodoRequest, postTodoSuccess } from '../Redux/AppReducer/action'
import TodoInput from './TodoInput'

function Todo() {
const dispatch=useDispatch()
const {todos,isLoading,isError}=useSelector((state)=>{
  return {
  todos:state.AppReducer.todos,
  isLoading:state.AppReducer.isLoading,
  isError:state.AppReducer.isError
}
},shallowEqual)
// console.log(todos)


const addTodo=(title)=>{
  if(title){
    const payload={
      title,
      status:false,
    }
    dispatch(postTodoRequest());
    return axios.post(`http://localhost:8080/todos`,payload)
    .then((r)=>{
      dispatch(postTodoSuccess())
    })
    .catch((e)=>{
      dispatch(postTodoFailure())
    })
  }
}



const getTodos=()=>{
      // Request
        dispatch(getTodosRequest())
        return axios.get(`http://localhost:8080/todos`).then((r)=>{
        // Successfull 
        dispatch(getTodosSuccess(r.data))
        // console.log(r.data)
        }).catch((err)=>{
          // Failure
          dispatch(getTodosFailure())
            console.log(err)
        })
    }

const handelAddTodo=(text)=>{
  addTodo(text).then(()=>getTodos())
}

    useEffect(()=>{
   getTodos()
    },[])


  return (
    <div>
        <h1>Todo</h1>
        <TodoInput addTodo={handelAddTodo}/>
        {todos.length>0 && todos.map((item)=>{
          return (<div key={item.id}>{item.title}-{item.status?"true":"false"}</div>)
        })}
    </div>
  )
}

export default Todo