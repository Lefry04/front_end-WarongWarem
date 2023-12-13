import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUserId } from "./UserIdContext";

export const LoginPageCust = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { setUserId } = useUserId();
  
  const handleConfirmClick = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        username: username,
        password: password,
      });

      if (response.data.message === 'Login successful') {
        const userData = response.data.user;

        setUserId(userData.id);

        switch (userData.role) {
          case 'customer':
            goToDashCust();
            console.log(userData.id);
            break;

          case 'waiter':
            goToDashWai();
            break;

          case 'manager':
            goToDashMan();
            break;

          default:
            setErrorMessage("Invalid role");
            break;
        }
      } else {
        setErrorMessage("Invalid credentials");
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  const navigate = useNavigate();

  const goToSignUpPage = () => {
    navigate('/signuppage');
  };

  const goToDashCust = () => {
    navigate('/dashcust');
  };

  const goToDashWai = () => {
    navigate('/dashwai');
  };

  const goToDashMan = () => {
    navigate('/dashman');
  };

  return (
    <div className="loginpagecust">
      <div className="background-gradient-wrapper">
        <div className="background-gradient">
          <div className="overlap">
            <div className="ellipse" />
            <div className="div" />
            <input
              className="rectangle"
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="rectangle-2"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="text-wrapper-3">
              Sign In
            </div>
          </div>
          <div className="overlap-group">
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <p className="don-t-have-an">don't have an account yet?</p>
            <a  onClick={goToSignUpPage} className="text-wrapper-4">Sign Up</a>
          </div>
          <button className="div-wrapper" onClick={handleConfirmClick}>CONFIRM</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPageCust;
