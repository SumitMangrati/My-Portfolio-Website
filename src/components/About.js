import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Description from "./Description";
import "./About.css";
function About() {
  return (
    <>
      <div className="about-container">
        <ul className="about-links">
          <Link className="desc" to="/Description">
            <li> About Me</li>
          </Link>
          <Link className="qual" to="/Qualification">
            <li> Qualification</li>
          </Link>
        </ul>

        <div className="about-routes">
          <Routes>
            <Route path="/Description" exact Component={Description}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default About;
