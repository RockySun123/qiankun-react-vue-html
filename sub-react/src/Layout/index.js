import {Suspense} from 'react'
import {Link,Route,Routes} from 'react-router-dom'
import routes from './routes'
import {useSelector,useDispatch} from '../app/store'
export default ()=>{
    const dispatch=useDispatch()
    const state=useSelector(({global})=>({global}));
    // console.log(state)
    const  {global}=state
   const changeUserInfo=()=>{
        dispatch({
            type:'global/setGlobalState',
            payload:{user:{name:'克林'+Math.floor(Math.random()*100000000000000000)}
        }})
   }
    const DefaultPage = routes[0].Element
    return <div>
            <ul style={{display:'flex',justifyContent:'center'}}>
                {routes.map(({path,name})=>(
                    <li key={name} style={{margin:10}}>
                        <Link to={path}>{name}</Link>
                    </li>
                ))}
            </ul>
        <div>

       <div>
        <p>用户名称: [ {global&&global.user&&global.user.name} ]</p>
        <button onClick={changeUserInfo}>更改用户信息</button>
       </div>

        <Routes>
        {DefaultPage && <Route path="/" element={<Suspense fallback={<div>...</div>}><DefaultPage /></Suspense>} />}
            {routes.map(({path,name,Element})=>{
                return <Route path={path} key={name} element={<Suspense fallback={<div>...</div>}><Element/></Suspense>}/>
            })}
        </Routes>
        </div>
    </div>
}