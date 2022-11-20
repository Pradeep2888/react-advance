import { accessData, saveData } from "../../utils/appLocalstorage"
import * as types from "./actionType"
const initialState={
    count:accessData("counter")|| 10,
    todos:[],
    isLoading:false,
    isError:false,
}

const reducer =(oldState=initialState,action)=>{
    const {type,payload}=action
    // console.log(action)
    switch (type){
        case types.ADD:
            // let tempCount=oldState.count+payload>=100?100:oldState.count+payload
            let tempCount=oldState.count+payload
            saveData("counter",tempCount)
            return {...oldState,count:tempCount}
        case types.REDUCE:
            saveData("counter",oldState.count-payload)
            return {...oldState,count:oldState.count-payload}

            //for todo app
        case types.GET_TODOS_FAILURE:
            return {...oldState,isLoading:false,todos:[],isError:true};
        case types.GET_TODOS_SUCCESS:
            return {...oldState, isLoading:false,todos:payload};
        case types.GET_TODOS_REQUEST:
            return {...oldState,isLoading:true};

        default:
            return oldState;
    }
}

export {reducer}