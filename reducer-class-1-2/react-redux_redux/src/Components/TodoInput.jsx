import React, { useState } from 'react'

function TodoInput({addTodo}) {
  const [text,setText]=useState('')
  const handelAdd=()=>{
    if(text){
      addTodo(text)
      setText('')
    }
   
  }
  return (
    <div>
        <input value={text} onChange={(e)=>setText(e.target.value)}/>
        <button onClick={handelAdd}>Add Todo</button>
    </div>
  )
}

export default TodoInput