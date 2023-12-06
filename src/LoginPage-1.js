// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {

const navigate = useNavigate();

const goToLoginPageCust = () => {
    navigate('/loginpagecust');
};

const goToLoginPageMan = () => {
    navigate('/loginpageman');
};

const goToLoginPageWai = () => {
    navigate('/loginpagewai');
};

  return (
    <div className="loginpage">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="rectangle" />
          <img className="img" alt="Rectangle" src="/Chingri Posto _ Experiences of a Gastronomad.jpeg" />
          <a className="button" onClick={goToLoginPageCust}>LOG IN AS A CUSTOMER</a>
          <a className="button2" onClick={goToLoginPageWai}>LOG IN AS A WAITER</a>
          <a className="button3" onClick={goToLoginPageMan}>LOG IN AS A MANAGER</a>
        </div>
      </div>

    </div>
  );
};

export default LoginPage;
