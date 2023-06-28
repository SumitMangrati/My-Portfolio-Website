import React, { useState } from "react";
import "../styles/contacts.css";
import con from "../assets/contact.png";



const submitHandler = () => {
    const config ={
        SecureToken:'6d8dcba4-bd73-4b07-8dc6-88068551527d',
        To : 'sumitmangrati33@gmail.com',
        From : document.getElementById("email-box").value,
        Subject : "Message from contact form",
        Body : "And this is the body"
    }

    if(window.Email){
        window.Email.send(config)
    }
}

function contacts() {
  return (
    <>
      <div className="contacts-container" id="contacts">
        <div className="contacts-wrapper">
          <div className="contact-information">
            <div className="contact-heading">
              <h2>
                Let's discuss on something <span>cool</span> together
              </h2>
            </div>
            <div className="contact-image">
              <img src={con} alt="" srcset="" />
            </div>
            <div className="contact-info">
              <div className="mobile-info">
                <ion-icon name="call"></ion-icon>
                <span>123-234-4566</span>
              </div>
              <div className="gmail-info">
                <ion-icon name="mail"></ion-icon>
                <span>sumitmangrati32@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Contact Me</h3>
            <form action="https://formspree.io/f/xknlwzlw" method="POST">
              <input type="text" name="username" id="name-box" placeholder="name" />
              <input type="email" name="email" id="email-box" placeholder="email" />
              <textarea
                name="message"
                id="message-box"
                cols="30"
                rows="10"
                placeholder="your message"
              ></textarea>
              <input type="submit"value="Send Message" id="submit-button" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default contacts;
