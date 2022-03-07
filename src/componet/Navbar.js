import React from "react";
import "./Style.css";
import Logo from './Logo'
import {Link} from 'react-router-dom'

function NavBar() {
  return <nav>
      <Logo/>
        <div className="buttons">
            <select name="lang" className="lang">
            <option value="swe">Svenska</option>
            <option value="fin">Suomi</option>
            <option value="eng">English</option>
        </select>
        <button className="signin-button"><a href="/login">Logga in</a></button>
        </div>
    </nav>;
}

export default NavBar;