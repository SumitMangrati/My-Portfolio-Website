import React, { useState } from "react";
import "./Navbar.css";
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
            <img src="images/logo.png" alt="" srcset="" />
          </Link>

          <ul className="mobile-links">
            <li><Link to="/"><ion-icon name="home-outline" ></ion-icon><span>Home</span></Link></li>
            <li><ion-icon name="person-outline"></ion-icon><span>About</span></li>
            <li><ion-icon name="construct-outline"></ion-icon><span>Skills</span></li>
            <li><ion-icon name="rocket-outline"></ion-icon><span>Project</span></li>
          </ul>

          
          <ul className={click?"nav-link active":'nav-link'}>
            <li>
              <Link to="/" onClick={handleClick}>Home</Link>
            </li>

            <li>
              <Link to="/About" onClick={handleClick}>About</Link>
            </li>

            <li>
              <Link to="/Skills" onClick={handleClick}>Skills</Link>
            </li>

            <li>
              <Link to="/Projects" onClick={handleClick}>Projects</Link>
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