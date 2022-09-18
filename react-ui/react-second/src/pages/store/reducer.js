import {createStore} from 'redux';


const initialState={username: "Dilip" ,password :""}
//import { configureStore } from '@reduxjs/toolkit'
function Reducer  (state=initialState,action){

    if(action.type==="save")
    {     console.log("here in reducer ")
        return {
            username:action.payload.username,
            password:action.payload.password
            
        };
    }
    
    return state;

} 

const store = createStore(Reducer);
/*
const store = configureStore({
    counterReducer,
  })
*/
export default store;
