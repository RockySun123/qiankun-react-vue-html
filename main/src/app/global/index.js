import {createReducer,createAction} from '@reduxjs/toolkit'

const initialState={
    user:{
        name:'rocky'
    }
}
export const setGlobalState=createAction('global/setGlobalState');
export default createReducer(initialState,(builder)=>{
    builder.addCase(setGlobalState,(state,{payload})=>{
        for(let key in payload){
            state[key]=payload[key]
        }
    })
})





