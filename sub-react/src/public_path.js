import pack from '../package.json'
const {name}=pack
console.log(process.env)
if(window.__POWERED_BY_QIANKUN__){
    if(process.env.NODE_ENV==='development'){
        __webpack_public_path__= window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__+ process.env.PUBLIC_URL;
    }else{
        __webpack_public_path__=window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__+`${name}/`
        console.log(__webpack_public_path__,'react-----------------------')
    }
}