import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link className="navbar-logo">
            <span>Sumit.dev</span>
          </Link>
          
          <ul className={click?"nav-link active":'nav-link'}>
            <li>
              <Link to="/" onClick={handleClick}>Home</Link>
            </li>

            <li>
              <Link to="/About" onClick={handleClick}>About</Link>
            </li>

            <li>
              <Link to="/Projects" onClick={handleClick}>Projects</Link>
            </li>

            <li>
              <Link to="/contact" onClick={handleClick}>Contact</Link>
            </li>
        
          </ul>

          
          <div className="nav-connect">
          <lord-icon
            src="https://cdn.lordicon.com/hpivxauj.json"
            trigger="hover">
          </lord-icon>
        </div>
        <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;