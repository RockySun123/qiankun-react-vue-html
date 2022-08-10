
// import {useDispatch,useSelector} from 'react-redux'
// import { configureStore, } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
// import globalReducer from './global'
// // import {combineReducers} from 'redux'
// export const store = configureStore({
//   reducer: {
//     global:globalReducer,
//     counter: counterReducer,
//   },
// });

// export {useDispatch,useSelector}
// // store.setGlobalState=(state)=>{
// //  console.log(state);
// //  const resucers=combineReducers({global:state});
// //  store.replaceReducer(resucers)
// // }

// export const getGlobalState=()=>{
//  return store.getState()['global']
// }
// export const reSetGlobalState=(state)=>{
//   console.log(state)
// }


import {useDispatch,useSelector} from 'react-redux'
import {initGlobalState} from 'qiankun'
import {configureStore} from '@reduxjs/toolkit'
import globalReducer,{setGlobalState} from './global'

export const store=configureStore({
  reducer:{
    global:globalReducer
  }
})
const initialState={...store.getState()['global']}//getState获取数据是只读的
const action=initGlobalState(initialState)
action.onGlobalStateChange((newState={},prev={})=>{
  //查看变更状态
  //更新状态
  for(let key in newState){
     initialState[key]=newState[key]
  }
  store.dispatch(setGlobalState(newState))
})

action.getGlobalState=(key)=>{
  return key ? initialState[key] : initialState
}

//定义更新state方法
action.setGlobalState();

//导出action
export default action
export {useDispatch,useSelector}

