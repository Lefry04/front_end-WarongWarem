import React from "react";
import { useNavigate } from "react-router-dom";

export const History = () => {
  const navigate = useNavigate();

  const dummyData = [
    {
      id: 1,
      name: "Delon J",
      tableName: "12A",
      numberOfGuest: 10,
      dateTime: "2023/11/25, 08.00 PM",
      specialRequests: "No food allergies. A quiet corner table, if possible.",
      status: "active",
    },
    {
      id: 2,
      name: "Aria S",
      tableName: "8B",
      numberOfGuest: 6,
      dateTime: "2023/12/03, 07.30 PM",
      specialRequests: "Vegetarian options preferred.",
      status: "inactive",
    },
    {
      id: 3,
      name: "Aria S",
      tableName: "8B",
      numberOfGuest: 6,
      dateTime: "2023/12/03, 07.30 PM",
      specialRequests: "Vegetarian options preferred.",
      status: "waiting",
    },
  ];

  const goToDashCust = () => {
    navigate('/DashCust');
  };

  const handleReservationButtonClick = (data) => {
    // Handle click for reservation button
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
            {dummyData.map((data) => (
              <button key={data.id} className={`reservation-button ${data.status}`} onClick={() => handleReservationButtonClick(data)}>
                <p className="a">{`Reservation ${data.id}`}</p>
                <p className="b">{`1. Name of the Reserver: ${data.name}`}</p>
                <p className="c">{`2. Table Name: ${data.tableName}`}</p>
                <p className="d">{`3. Number of Guest: ${data.numberOfGuest}`}</p>
                <p className="e">{`4. Date and Time: ${data.dateTime}`}</p>
                <p className="f">{`5. Special Requests: ${data.specialRequests}`}</p>
              </button>
            ))}
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
