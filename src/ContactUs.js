import React from "react";
import "./ContactUs.css";

export const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="background-gradient">
            <div className="overlap-group">
              <div className="ellipse" />
              <div className="div" />
              <div className="ellipse-2" />
            </div>
          </div>
          <img className="latar1" src="background-a.png"/>
          <img className="latar2" src="background-b.png"/>
          <img className="latar3" src="background-c.png"/>
          <img className="latar4" src="background-d.png"/>
          <div className="text-wrapper">Contact Us</div>
          <div className="text-wrapper-2">Warung Warem Since 2023</div>
          <p className="p">
            We’re very approachable and would like to speak to you. feel free to call, send us an email us or simply
            complete the enquiry form
          </p>
          <div className="text-wrapper-3">warungwarem20@gmail.com</div>
          <div className="text-wrapper-4">01423678932</div>
          <div className="text-wrapper-5">Name</div>
          <div className="text-wrapper-6">Email/phone number</div>
          <p className="text-wrapper-7">What can we do for you?</p>
          <input className="name"></input>
          <input className="Email"></input>
          <input className="Whatcanwe"></input>
          <button>SEND</button>
          <img src="email.png" className="kotak"></img>
          <img src="telfon.png" className="telfon"></img>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;