import React from "react";
import "./Style.css";
import Logo from './Logo'
import {Link} from 'react-router-dom'
import {auth} from '../componet/firebase-config'
import profilePic from '../img/icon.png'

function NavBar() {
    const token = localStorage.token
    {console.log(token);}
  return <nav>
      <Logo/>
        <div className="buttons">
            <select name="lang" className="lang">
            <option value="swe">Svenska</option>
            <option value="fin">Suomi</option>
            <option value="eng">English</option>
        </select>
        {!token ?<button className="signin-button"><a href="/login">Logga in</a></button> 
        : <button className='logout-button' onClick={()=>{
        auth.signOut()
        localStorage.removeItem('token')
        window.location.replace('/login')
        }}>Logga ut</button>} 
        {token ? <img onClick={()=>{window.location.href = '/profile'}} src={profilePic} width='40px'></img> :null}
        </div>
        
    </nav>;
}

export default NavBar;