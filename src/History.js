import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUserId } from "./UserIdContext";

export const History = () => {
  const navigate = useNavigate();
  const [dummyData, setDummyData] = useState([]);
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const { userId } = useUserId();

  const goToDashCust = () => {
    navigate('/DashCust');
  };

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
      setCurrentDate(now.toLocaleDateString());
    };

    const intervalId = setInterval(updateDateTime, 1000);

    // Fetch data from API
    axios.post('http://localhost:8000/api/getdata')
      .then(response => {
        const filteredData = response.data.reservations.filter(data => data.id_user === userId);

        setDummyData(filteredData);      })
      .catch(error => {
        console.error(error);
      });

    return () => clearInterval(intervalId);
  }, []);

  const handleReservationButtonClick = (data) => {
    console.log(`Reservation ${data.id} clicked`);
    // Add additional logic if needed
  };

  return (
    <div className="history">
      <div className="background">
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <img className="image" alt="Image" src="background.png" />
            <div className="rectangle" />
            <div className="title">History</div>
            <div className="hijau"></div>
            <div className="list">
              {dummyData.map((data) => (
                <button key={data.id} className={`reservation-button ${data.status}`} onClick={() => handleReservationButtonClick(data)}>
                  <p className="a">{`Reservation ${data.id}`}</p>
                  <p className="b">{`1. Name of the Reserver: ${data.name}`}</p>
                  <p className="c">{`2. Type: ${data.table_type}`}</p>
                  <p className="d">{`3. Number of Guest: ${data.number_of_guests}`}</p>
                  <p className="e">{`4. Date and Time: ${data.time}`}</p>
                  <p className="f">{`5. Special Requests: ${data.special_requests}`}</p>
                </button>
              ))}
            </div>
            <button className="line2" onClick={goToDashCust}>
              <span> Back to Dashboard </span>
            </button>
            <div className="h"></div>
            <div className="k"></div>
            <div className="m"></div>
            <p className="hi">Active</p>
            <p className="ku">Waiting</p>
            <p className="me">Inactive</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
