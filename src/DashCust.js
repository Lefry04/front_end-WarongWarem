import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


export const DashCust = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
      setCurrentDate(now.toLocaleDateString());
    };

    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []); 

  const navigate = useNavigate();

  const goToReservation = () => {
    navigate("/reservation");
  };

  const goToHistory = () => {
    navigate("/history");
  };

  const goToLoginPage = () => {
    navigate('/loginpagecust')
  };
  
  const goToFeedback = () => {
    navigate('/feedback')
  };
  return (
    <div className="dash-cust">
      <div className="background" >
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <img className="image" alt="Image" src="background.png" />
          <div className="rectangle" />
          <p className="text-wrapper">Hi, Welcome to Warung Warem!</p>
          <div className="div">Have you eaten?</div>
          <img className="avatar" alt="Avatar" src="avatar 1.png" onClick={goToLoginPage}/>
          <div className="text-wrapper-2">{currentTime}</div>
          <div className="text-wrapper-3">{currentDate}</div>
          <button className="text-wrapper-4" onClick={goToReservation}>Reservation</button>
          <div className="reservation"><img src="image 29.png" /></div>
          <button className="history" onClick={goToHistory}>History</button>
          <div className="history-icon"><img src="history.png"/></div>
          <button className="feedback" onClick={goToFeedback}>Feedback</button>
          <div className="feedback-icon"><img src="feedback.png"/></div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default DashCust;
