import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const ManHisto = () => {
    const navigate = useNavigate();  // Move useNavigate inside the component

    const goToDashMan = () => {
        navigate('/dashman');
    };

    const [currentTime, setCurrentTime] = useState("");
    const [currentDate, setCurrentDate] = useState("");
    const [dummyData, setDummyData] = useState([]);

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString());
            setCurrentDate(now.toLocaleDateString());
        };

        const intervalId = setInterval(updateDateTime, 1000);

        // Fetch data from API
        axios.post('https://rpl2-server.my.id/api/getdata') // Replace with your actual API endpoint
            .then(response => {
                setDummyData(response.data.reservations);
            })
            .catch(error => {
                console.error(error);
            });

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="manhisto">
            <div className="background">
                <div className="overlap-group-wrapper">
                    <div className="overlap-group">
                        <img className="image" alt="Image" src="background.png" />
                        <div className="rectangle" />
                        <div className="text-wrapper-2">{currentTime}</div>
                        <div className="text-wrapper-3">{currentDate}</div>
                        <div className="blur" />
                        <p className="a">DASHBOARD</p>
                        <p className="b">WARONGWAREM</p>
                        <p className="c">History and Recent</p>
                        <button className="back" onClick={goToDashMan}>Back</button>
                        <div className="list">
                            <ul>
                                {dummyData.map((item) => (
                                    <li key={item.id_reservation}>
                                        <div className="left">
                                            <p className="title">{item.name}</p>
                                            <p className={`status ${item.status.toLowerCase()}`}>{item.status}</p>
                                        </div>
                                        <div className="right">
                                            <p>Time: {item.time}</p>
                                            <p>Type: {item.table_type}</p>
                                            <p>Number of Guests: {item.number_of_guests}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManHisto;
