import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


export const DashWai = () => {
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

  const goToWaiter = () => {
    navigate('/waiter');
  };
  
  return (
    <div className="dashwai">
      <div className="background" >
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <img className="image" alt="Image" src="background.png" />
          <div className="rectangle" />
          <p className="text-wrapper">Hi, Welcome to Warung Warem!</p>
          <div className="text-wrapper-2">{currentTime}</div>
          <div className="text-wrapper-3">{currentDate}</div>
          <button className="button" onClick={goToWaiter}>Dashboard</button>
      </div>
      </div>
      </div>
    </div>
  );
};

export default DashWai;
