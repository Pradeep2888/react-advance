import { ADD,REDUCE,GET_TODOS_FAILURE,GET_TODOS_SUCCESS,GET_TODOS_REQUEST,POST_TODO_FAILURE,POST_TODO_REQUEST,POST_TODO_SUCCESS } from "./actionType"

 const handleAdd=(payload)=>{
    return {
        type:ADD,
        payload
    }
}
 const handleReduce=(payload)=>{
    return {
        type:REDUCE,
        payload
    }
}

const getTodosRequest=()=>{
    return {
        type:GET_TODOS_REQUEST
    }
}

const getTodosSuccess=(payload)=>{
    return {
        type:GET_TODOS_SUCCESS,
        payload
    }
}

const getTodosFailure=()=>{
    return {
        type:GET_TODOS_FAILURE
    }
}



const postTodoRequest=()=>{
    return {
        type:POST_TODO_REQUEST
    }
}

const postTodoSuccess=(payload)=>{
    return {
        type:POST_TODO_SUCCESS,
        payload
    }
}

const postTodoFailure=()=>{
    return {
        type:POST_TODO_FAILURE
    }
}

export  {handleAdd,handleReduce,getTodosFailure,getTodosRequest,getTodosSuccess,postTodoFailure,postTodoRequest,postTodoSuccess} 