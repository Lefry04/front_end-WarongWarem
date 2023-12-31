import React from 'react';
import "./App.css";
import { useNavigate } from 'react-router-dom';
// import LoginPage from './LoginPage-1';

export const Frontpage = () => {

const navigate = useNavigate();

const goToLoginPage = () => {
      navigate('/loginpagecust');
};

const goToAboutUsPage = () => {
    navigate('/aboutuspage');
};

const goToContactUsPage = () => {
  navigate('/contactus');
};

  return (
    <div className="frontpage">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <img className="img" alt="Img" src="af9eb178e00c45f195d65430e62d24bc-removebg-preview 1.png" />
          <img className="rectangle" alt="Rectangle" src="Rectangle 3.png" />
          <p className="text-wrapper">
            Welcome to WarungWarem, a culinary journey that invites you to explore unexpected delights. Here, we believe
            that food is not just about filling the stomach, but rather about bringing an unforgettable sensory
            experience to life.
          </p>
          <div className="EAT-TO-BE-HEALTHY">
            EAT TO BE <br />
            HEALTHY
          </div>
          <div className="div">WARUNGWAREM</div>
          <div className="line" />
          <div className="navbar">
          <a onClick={goToAboutUsPage}>About Us</a>
          <a onClick={goToContactUsPage}>Contact Us</a>
          <a onClick={goToLoginPage}>Login</a>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Frontpage;