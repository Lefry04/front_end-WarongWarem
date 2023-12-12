import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export const Monitoring = () => {
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

    const goToDashMan = () => {
      navigate('/dashman');
    };

    return (
        <div className="monitoring">
            <div className="background">
                <div className="overlap-group-wrapper">
                    <div className="overlap-group">
                        <img className="image" alt="Image" src="background.png" />
                        <div className="rectangle" />
                        <div className="blur"/>
                        <div className="text-wrapper-2">{currentTime}</div>
                        <div className="text-wrapper-3">{currentDate}</div>
                        <div className="blurkuning"/>
                        <p className="d">Indoor</p>
                        <p className="e">Outdoor</p>
                        <div className="line"/>
                        <div className="green1"></div>
                        <div className="green2"></div>
                        <div className="red1"></div>
                        <div className="red2"></div>
                        <p className="f">7 Tables Available</p>
                        <p className="g">8 Tables Not Available</p>
                        <p className="h">9 Tables Available</p>
                        <p className="i">6 Tables Not Available</p>
                        <p className="a">DASHBOARD</p>
                        <p className="b">WARONG WAREM</p>
                        <p className="c">Capacity Monitoring</p>
                        <p className="j"onClick={goToDashMan}>Back</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Monitoring;