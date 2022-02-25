import React from "react";
import "./Style.css";
import Logo from './Logo'

function NavBar() {
  return <nav>
      <Logo/>
        <div className="buttons">
            <select name="lang" className="lang">
            <option value="swe">Svenska</option>
            <option value="fin">Suomi</option>
            <option value="eng">English</option>
        </select>
        <button className="signin-button">Logga in</button>
        </div>
    </nav>;
}

export default NavBar;