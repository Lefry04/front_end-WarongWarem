import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export const DashMan = () => {
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

  const goToReserReportDash = () => {
    navigate('/reportdaily');
  };

  const goToCapacityMonitoring = () => {
    navigate('/monitoring');
  };

  const goToHistory = () => {
    navigate('/manhisto');
  };

  const goToBigReser = () => {
    navigate('/bigreser');
  };

  const goToLoginPage = () => {
    navigate('/loginpagecust');
  };

  const goToReschedule = () => {
    navigate('/reschedule');
  };

  return (
    <div className="dashman">
      <div className="background" >
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <img className="image" alt="Image" src="background.png" />
            <div className="rectangle" />
            <p className="text-wrapper">Hi, Welcome to Warung Warem!</p>
            <div className="text-wrapper-2">{currentTime}</div>
            <div className="text-wrapper-3">{currentDate}</div>
            <button className="a" onClick={goToCapacityMonitoring}>Capacity Monitoring</button>
            <button className="b" onClick={goToReserReportDash}>Reservation Report</button>
            <button className="c" onClick={goToHistory}>Reservation History</button>
            <button className="d" onClick={goToBigReser}>Big Reservation Approval</button>
            <button className="e" onClick={goToReschedule}>Reschedule</button>
            <img className="avatar" alt="Avatar" src="avatar 1.png" onClick={goToLoginPage}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashMan;