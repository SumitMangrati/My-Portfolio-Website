import React from "react";
import "./About2.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Education from "./Education";
import Work from "./Work";
function About2() {
  return (
    <>
      <div className="about-container">
        <div className="about-wrapper">
          <div className="about-photo-container">
            <img className="image1" src="images/img1.jpg" alt="" srcset="" />
            <img className="image2" src="images/img2.jpg" alt="" srcset="" />
          </div>
          <div className="about-holder">
            <h1>About Me</h1>
            <div className="description-holder">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos ab rerum corporis dolorum eligendi nisi accusamus,
              minima voluptatum? Cupiditate veritatis vitae soluta esse
              provident doloremque iure accusantium deserunt nemo repellendus
              deleniti atque inventore porro magnam in aut molestias aperiam
              distinctio voluptates expedita ex consequuntur, fuga sed! Tenetur
              eum ab architecto veritatis sequi iusto sunt?
            </div>
            <div className="about-links">
                <Link className="edu" to="/Education">
                    <li>
                        Education
                    </li>
                </Link>

                <Link className="wexp" to="/WorkExp">
                    <li>Work Experience</li>
                </Link>


            </div>
            <div className="about-route-holder">
                <Routes>
                <Route path="/Education" exact Component={Education}></Route>
                </Routes>

                <Routes>
                <Route path="/WorkExp" exact Component={Work}></Route>
                </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About2;