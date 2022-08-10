import { configureStore,  createReducer,createAction} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import {applyMiddleware,combineReducers} from 'redux'
import {useSelector,useDispatch} from 'react-redux'
// import globalReducer from './global'
import reduxThunk from 'redux-thunk'

const initialReducer= {
  // global:globalReducer,
  counter: counterReducer,
}

export const store = configureStore({
  reducer: initialReducer,
  middleware:(getDefaultMiddleware)=>{
    return getDefaultMiddleware().concat(reduxThunk)
  }
});

const makAllReducers=(asyncReducers)=>{
  return combineReducers({
    ...asyncReducers
  })
}

export const injectAsyncReducer=(opts={})=>{
  const state=store.getState();
  for(let key in opts){
    if(Object.hasOwnProperty.call(state,key)) return;
    store.asyncReducers=store.asyncReducers||initialReducer
    store.asyncReducers={...store.asyncReducers,[key]:opts[key].reducer}
    store.replaceReducer(makAllReducers(store.asyncReducers))
    if(opts[key].middleware){
      applyMiddleware(opts[key].middleware)
    }
  }
}

store.createReducer=createReducer
store.injectAsyncReducer=injectAsyncReducer
store.createAction=createAction


export {useDispatch,useSelector}