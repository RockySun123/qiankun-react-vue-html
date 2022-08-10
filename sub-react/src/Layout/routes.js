import {lazy} from 'react'
export default [
    {
        path:'/page1',
        name:'page1',
        Element:lazy(()=>import('../pages/Page1/index'))
    },
    {
        path:'/page2',
        name:'page2',
        Element:lazy(()=>import('../pages/Page2/index'))
    }
]