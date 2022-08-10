import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import microApps from './microApps';
import {registerMicroApps,start,setDefaultMountApp} from 'qiankun'
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//乾坤配置
registerMicroApps(microApps,{
  //生命周期
  beforeLoad:[app=>{
    console.log('beforeLoad',app.name)
    return Promise.resolve()
  }],
  beforeMount:[app=>{
    console.log('beforeMount',app.name)
    return Promise.resolve()
  }],
  afterMount:[app=>{
    console.log('afterMount',app.name)
    return Promise.resolve()
  }],
  afterUnmount:[app=>{
    console.log('afterUnmount',app.name)
    return Promise.resolve()
  }],
})
start({
  sandbox :{
    strictStyleIsolation:true, experimentalStyleIsolation: true
  }
});
setDefaultMountApp('/sub-react')
