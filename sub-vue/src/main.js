import './public_path'
import { createApp } from 'vue'
import App from './App.vue'
import routes from './router'
import store from './store'
import {store as commonStore} from '../../common' 
import { createRouter, createWebHistory } from 'vue-router'

let instance=null
let router=null
const render=(props={})=>{
    const {container,baseUrl}=props
    router = createRouter({
        history: createWebHistory(baseUrl?baseUrl:process.env.BASE_URL),
        routes
    })

    instance=createApp(App)
        .use(store)
        .use(router)
        .mount(container?container.querySelector('#app'):'#app')
}

if(!window.__POWERED_BY_QIANKUN__){
    commonStore.registerGlobal(store)
    render()
}

export const bootstrap=async ()=>{
    console.log('[vue] vue app bootstrap')
}
export const mount=async (props)=>{
    console.log('[vue] vue app mount');
    //同步数据
    commonStore.registerGlobal(store,props)
    render(props)
}
export const unmount=async (props)=>{
    console.log('[vue] unmount')
    //卸载
    instance.$emit('distory');
    instance.$el.innerHTML='';
    instance=null;
    router=null
}