const render=(props={})=>{
    const {container,getGlobalState}=props
   const state=getGlobalState&&getGlobalState()
    if(container){
        container.querySelector('#html_content').innerHTML=`
        <div>
        <p>用户名：${state&&state.user&&state.user.name}</p>
        <p>我是微前端 html子应用 正在微前端运行</p>
        <div>`
    }
 
    return Promise.resolve()
}

(g=>{
    g['purehtml']={
        bootstrap:()=>{
            console.log('[html] bootstrap')
            return Promise.resolve()
        },
        mount:(props)=>{
            console.log('[html] mount')
            render(props)
            return Promise.resolve()
        },
        unmount:()=>{
            console.log('[html] unmount')
            return Promise.resolve()
        }
    }
})(window)