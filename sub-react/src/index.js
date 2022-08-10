import './public_path'
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import  {store as commonStore} from '../../common'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import './index.css';

let container = document.getElementById('root');
let root=null

const render=(props={})=>{
  const {baseUrl}=props
  if(props.container){
    container = props.container&&props.container.querySelector('#root');
  }
   
  root = createRoot(container);
  
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter basename={baseUrl ? baseUrl : process.env.PUBLIC_URL}>
        <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
}
if(!window.__POWERED_BY_QIANKUN__){
  commonStore.registerGlobal(store) 
  const userInfo={
    user:{
        name:'rocky_111'
    }
  }
  //需要使用中间件 redux-thunk
  store.dispatch({type:'global/setGlobalState',payload:userInfo})
  render()
}

export async function bootstrap(){
  console.log('[react] bootstrap')
}

export async function mount(props={}){
  console.log('[react] mount')
  commonStore.registerGlobal(store,props)
  render(props)
}
export async function unmount(){
  console.log('[react] unmount');
  root.unmount();
  root=null;
  container=null
}


