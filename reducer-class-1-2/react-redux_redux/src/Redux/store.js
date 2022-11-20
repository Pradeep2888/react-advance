import { reducer as AppReducer } from "./AppReducer/reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import {legacy_createStore,combineReducers, applyMiddleware} from "redux"

// const store=legacy_createStore(reducer,{count:10});
// const store=legacy_createStore(reducer);
const rootReducer=combineReducers({AppReducer,AuthReducer})

const logger1=(store)=>(next)=>(action)=>{
    // console.log("1-A")
    let arr=action.payload
    console.log("1-A",arr)
    const check=(arr)=>{
      console.log(arr)
    }
    check()
    const temp=next(action)
    console.log("1-B",action)
    return temp
}
const logger2=(store)=>(next)=>(action)=>{
    console.log("2-A")
    const temp=next(action)
    console.log("2-B")
    return temp
}
console.log(applyMiddleware())
const store =legacy_createStore(rootReducer,applyMiddleware(logger1,logger2))
export {store}