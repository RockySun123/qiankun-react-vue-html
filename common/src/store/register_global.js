
export default (store,props={})=>{
  
    if(!store) return;
    const {getGlobalState}=props
    const initialState=getGlobalState && getGlobalState()||{
        user:{
            name:'rocky111'
        }
    }
    //如果是react
    if(store.getState&&!store.getState()['global']&&!store.hasModule){
   
       const {createReducer,createAction,injectAsyncReducer}=store;
       const setGlobalState=createAction('global/setGlobalState')
       const initGlobalState=createAction('global/initGlobalState')
       const globalReducer=createReducer({...initialState},(builder)=>{
            builder.addCase(setGlobalState,(state,{payload})=>{ 
                for(let key in payload){
                    state[key]=payload[key]
                }
                props.setGlobalState&&props.setGlobalState(payload)
            }).addCase(initGlobalState,(state,{payload})=>{
                for(let key in payload){
                    state[key]=payload[key]
                }    
                props.setGlobalState&&props.setGlobalState.setGlobalState(state) 
            })
       })
       
       injectAsyncReducer({global:{
            reducer:globalReducer
       }})

    }else if(store.hasModule&&!store.hasModule('global')&&!store.getState){   
        const globalModule={
            namespaced:true,
            state:initialState,
            actions:{
                setGlobalState({commit},payload){
                    //修改子应用同时通知主应用修改属性据
                    commit('setGlobalState',payload);
                    //通知emit全局数据改变
                    commit('emitGlobalState',payload)
                },
                initGlobalState({commit},payload){
                    //初始化
                    commit('setGlobalState',payload)
                }
            },
            mutations:{
                setGlobalState(state,payload){
                    state=Object.assign(state,payload)
                },
                //通知主应用修改数据
                emitGlobalState(state){
                    if(props&&props.setGlobalState){
                        props.setGlobalState(state)
                    }
                }
            }
        }
        store.registerModule('global',globalModule)
    }else {
        console.log(initialState)
        // 初始化本地数据
        store.dispatch({type:'global/setGlobalState',payload:{...initialState}})
    }
 
}







