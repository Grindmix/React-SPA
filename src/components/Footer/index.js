import React from "react";
import { Link } from "react-router-dom";

import './footer.css';

function Footer(){
    return(
      <footer className="footer">
        <Link to='/about' className="text">
          <p>Информация</p>
        </Link>
      </footer>
    )
  }

export default Footer;