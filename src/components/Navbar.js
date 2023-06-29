import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const [darkMode, setDarkMode] = useState(false);

  const handleDark = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link to="home" className="navbar-logo">
            <span>Sumit.dev</span>
          </Link>

          <ul className={click ? "nav-link active" : "nav-link"}>
            <li>
              <Link to="home" span={true} smooth={true} onClick={handleClick}>
                Home
              </Link>
            </li>

            <li>
              <Link to="about" span={true} smooth={true} onClick={handleClick}>
                About
              </Link>
            </li>

            <li>
              <Link
                to="projects"
                span={true}
                smooth={true}
                onClick={handleClick}
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                to="contacts"
                span={true}
                smooth={true}
                onClick={handleClick}
              >
                Contacts
              </Link>
            </li>
          </ul>

          <div className="dark-mode-icon" onClick={handleDark}>
            <div className={darkMode ? "dark-mode active" : "dark-mode"}>
              <div className="sun"></div>
              <div className="dark-alert-message">
              <p>Dark Mode Feature is not yet added!!</p>
            </div>
            </div>
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
