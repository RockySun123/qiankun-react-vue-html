import logo from '../logo.svg';
import {useSelector} from '../app/store';

import './style.css'
export default ()=>{
    const {global:{user:{name}}}=useSelector(({global})=>({global}))
    const changeStateHistory=(url)=>{
        window.history.pushState({},url,url)
    }
    return <div>
        <nav>
            <div className='logo'>
                <img src={logo} width={40}/>
                <h2>Logo</h2>
            </div>
            <ul>
                <li onClick={()=>changeStateHistory('/sub-react')}>sub-react</li>
                <li onClick={()=>changeStateHistory('/sub-vue')}>sub-vue</li>
                <li onClick={()=>changeStateHistory('/sub-html')}>sub-html</li>
            </ul>
            <div className='userinfo'>
                用户名:{name}
                {/* <button onClick={()=>{
                    dispatch(setGlobalState({user:{name:'aaaa'}}))
                }}>aaaa</button> */}
            </div>
        </nav>
        <div id='container'></div>
    </div>
}