import React from "react";
import "../styles/Hero.css";
import AnimatedText from "../components/AnimatedText";
import Skills from "../components/Skills";
import wave from '../assets/wave.png'
function Hero() {

  const newTab=URL=>{
    window.open(URL)
  }
  return (
    <>
      <div className="hero" id="home">
        <div className="hero-container">
        <div className="hero-icons">
          <div className="ig-icon">
            <ion-icon onClick={()=>newTab('https://www.instagram.com/_zx.shjwe_/')} name="logo-instagram"></ion-icon>
          </div>
          <div className="lin-icon">
            <ion-icon name="logo-linkedin"></ion-icon>
          </div>
          <div className="gh-icon">
            <ion-icon name="logo-github"></ion-icon>
          </div>
        </div>

        <div className="hero-text">
          <div className="hero-heading">
          <h1>Hi, I am Sumit</h1>
          <img src={wave} alt="" srcset=""  id="wave"/>
          </div>
          <div className="test">
            <AnimatedText />
          </div>

          <span className="des">
            An enthusiast programmer,developer based in Kolkata,India |📍
          </span>
          <button className="hero-contact-button">Contact Me<ion-icon name="send-outline"></ion-icon></button>
        </div>
        <div className="blob-container">
          <div className="blob"></div>
        </div>
        </div>


        
        <div className="skill-stack">
          <div className="skill-div">
            <Skills/>
          </div>
        </div>
        </div>
    </>
  );
}

export default Hero;
