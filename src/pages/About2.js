import React from "react";
import "../styles/About2.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Education from "../components/Education";
import Work from "../components/Work";
function About2() {
  return (
    <div className="about-main-container">
      <div className="about-container" id="about">
        <div className="about-wrapper">
          <div className="about-photo-container">
            <img className="image1" src="images/img1.jpg" alt="" srcset="" />
            <img className="image2" src="images/img2.jpg" alt="" srcset="" />
          </div>
          <div className="about-holder">
            <h1>About Me</h1>
            <div className="description-holder">
              Always have been keen to learning rather than studying. So, does
              that make me a nerd? An aspiring developer interested in the
              domain of Cloud Engineering,Dev-Ops and UI/UX designing. Exploring
              every gist of technology, learning expanding my domain of knowledge
              while travelling the road to a succcessfull Engineer.Looking
              forward to collaborate and work with several other to help me on
              my journey.
            </div>
            <div className="about-links">
              <Link className="edu" to="/">
                <li>Education</li>
              </Link>

              <Link className="wexp" to="/WorkExp">
                <li>Work Experience</li>
              </Link>
            </div>
            <div className="about-route-holder">
              <Routes>
                <Route path="/" exact Component={Education}></Route>
              </Routes>
              <Routes>
                <Route exact path="/WorkExp" element={<Work />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About2;
