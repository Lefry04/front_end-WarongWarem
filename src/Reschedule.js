// Reschedule.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Reschedule = () => {
    const navigate = useNavigate();

    const goToDashMan = () => {
        navigate('/dashman');
    };

    const [currentTime, setCurrentTime] = useState("");
    const [currentDate, setCurrentDate] = useState("");
    const [dummyData, setDummyData] = useState([]);
    const [selectedRowId, setSelectedRowId] = useState(null);
    const [newReservationTime, setNewReservationTime] = useState("");

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString());
            setCurrentDate(now.toLocaleDateString());
        };

        const intervalId = setInterval(updateDateTime, 1000);

        // Fetch data from API
        axios.post('https://rpl2-server.my.id/api/getdata')
            .then(response => {
                setDummyData(response.data.reservations.map(reservation => ({
                    ...reservation,
                    current_date: new Date().toLocaleDateString(),
                })));
            })
            .catch(error => {
                console.error(error);
            });

        return () => clearInterval(intervalId);
    }, []);

    const handleRowSelect = (rowId) => {
        setSelectedRowId(rowId);
    };

    const handleTimeChange = async () => {
        console.log("Change Time button clicked");

        if (selectedRowId && newReservationTime.trim() !== "") {
            try {
                const response = await axios.put('https://rpl2-server.my.id/api/change-time', {
                    id: selectedRowId,
                    new_time: newReservationTime, // Ganti nama parameter sesuai dengan yang diharapkan oleh Laravel
                });
                console.log(response.data);

                setTimeout(() => {
                    window.location.reload(true);
                    // Display a success alert
                    alert("Reservation successfully rescheduled!");
                }, 500);

                console.log("Schedule updated successfully");
            } catch (error) {
                console.error("Error updating time:", error);
            }
        } else {
            console.log("Invalid input or no row selected");
        }
    };

    return (
        <div className="waiter">
            <div className="background">
                <div className="overlap-group-wrapper">
                    <div className="overlap-group">
                        <img className="image" alt="Image" src="background.png" />
                        <div className="rectangle" />
                        <div className="text-wrapper-2">{currentTime}</div>
                        <div className="text-wrapper-3">{currentDate}</div>
                        <div className="blur">
                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Select</th>
                                            <th>Name</th>
                                            <th>Phone Number</th>
                                            <th>Number of Guests</th>
                                            <th>Date & Time</th>
                                            <th>status</th>
                                            <th>Change Reservation Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dummyData
                                            .filter(item => item.table_type !== "restaurant")
                                            .map((item) => (
                                                <tr key={item.id_reservation}>
                                                    <td>
                                                        <div
                                                            onClick={() => handleRowSelect(item.id_reservation)}
                                                            className={`select-box ${selectedRowId === item.id_reservation ? "selected" : ""}`}
                                                        >
                                                            {selectedRowId === item.id_reservation ? "✓" : ""}
                                                        </div>
                                                    </td>
                                                    <td>{item.name}</td>
                                                    <td>{item.phone_number}</td>
                                                    <td>{item.number_of_guests}</td>
                                                    <td>{item.time}</td>
                                                    <td>{item.status}</td>
                                                    <td>
                                                        {selectedRowId === item.id_reservation && (
                                                            <>
                                                                <input
                                                                    type="text"
                                                                    placeholder="New Reservation Time"
                                                                    value={newReservationTime}
                                                                    onChange={(e) => setNewReservationTime(e.target.value)}
                                                                />
                                                            </>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <p className="a">DASHBOARD</p>
                        <p className="b">WARONGWAREM</p>
                        <p className="c">List of Reservations for Warung Rarem Customers</p>
                        <p className="de">The Change button will only be active when its status is 'Waiting'</p>
                        <button onClick={handleTimeChange} className="change">Change Time</button>
                        <button className="reject" onClick={goToDashMan}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reschedule;
