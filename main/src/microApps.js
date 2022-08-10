
import action from './app/store'
// import { setGlobalState } from './app/global'
// const {getGlobalState,reSetGlobalState}=store
const {getGlobalState}=action

export default [
    {
        name:'sub-react',
        entry:process.env.REACT_APP_SUB_REACT,
        container:'#container',
        activeRule:'/sub-react',
        props:{
            baseUrl:'/sub-react',
            // setGlobalState:reSetGlobalState,
            getGlobalState
        }
    },
    {
        name:'sub-vue',
        entry:process.env.REACT_APP_SUB_VUE,
        container:'#container',
        activeRule:'/sub-vue',
        props:{
            baseUrl:'/sub-vue',
            // setGlobalState,
            getGlobalState
        }
    },
    {
        name:'sub-html',
        entry:process.env.REACT_APP_SUB_HTML,
        container:'#container',
        activeRule:'/sub-html',
        props:{
            baseUrl:'/sub-html',
            // setGlobalState,
            getGlobalState
        }
    },
]