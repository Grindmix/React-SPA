import React from "react";
import { Link } from "react-router-dom";

import './header.css'


function Header(props){
    return(
      <header className="header">
        <Link to='/' className="headerContent">
          <h1>{props.text}</h1>
        </Link>
      </header>
    );
  }

export default Header;