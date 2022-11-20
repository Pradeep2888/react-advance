

import { useState } from 'react';
import { store } from '../Redux/store';
import {handleAdd,handleReduce} from "../Redux/AppReducer/action"
import {useDispatch,useSelector} from "react-redux"

// Date=3.9.2022

// function Counter() {
//   const {dispatch,subscribe}=store
//   const {count}=store.getState()
//   const [update,setUpdate]=useState(0)

  

// subscribe(()=>{
//   setUpdate((pre)=>pre+1)
// })




//   const handleAdd=()=>{
    
//  dispatch({type:"ADD",payload:1})
//   }

//   onst handleReduce=()=>{
   
//     dispatch({type:"REDUCE",payload:1})
//   }

// const count=useSelector((store)=>{
 
//   return store.count;
// })
// // console.log(count)
// const dispatch=useDispatch()


//   return (
//     <div className="App">
//       <h1>Counter:{count}</h1>
//       <button onClick={()=>dispatch(handleAdd(1))}>Add</button>
//       <button onClick={()=>dispatch(handleReduce(1))}>reduce</button>
     
//     </div>
//   );
// }

// export default Counter;


// Date:5.9.2022


function Counter() {
  

const count=useSelector((store)=>{
 
  return store.AppReducer.count
})
// console.log(count)
const dispatch=useDispatch()


  return (
    <div className="App">
      <h1>Counter:{count}</h1>
      <button onClick={()=>dispatch(handleAdd(1))}>Add</button>
      <button onClick={()=>dispatch(handleReduce(1))}>reduce</button> 
    </div>
  );
}

export default Counter;
