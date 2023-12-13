import React, { useState, useEffect } from "react";
import axios from "axios";

export const ManHisto = () => {
    const [currentTime, setCurrentTime] = useState("");
    const [currentDate, setCurrentDate] = useState("");
    // const [historyData, setHistoryData] = useState([]);
    const [dummyData, setDummyData] = useState([]);


    // useEffect(() => {
    //     const updateDateTime = () => {
    //         const now = new Date();
    //         setCurrentTime(now.toLocaleTimeString());
    //         setCurrentDate(now.toLocaleDateString());
    //     };

    //     const intervalId = setInterval(updateDateTime, 1000);

    //     // Fetch dummy data (replace this with your actual data fetching logic)
    //     const dummyData = [
    //         {
    //             id: 1,
    //             name: "Delon",
    //             status: "Reserved",
    //             date: "2023-12-08",
    //             time: "14:30",
    //             numberOfGuests: 4,
    //         },
    //         {
    //             id: 2,
    //             name: "Delon",
    //             status: "Cancelled",
    //             date: "2023-12-07",
    //             time: "19:45",
    //             numberOfGuests: 2,
    //         },
    //         {
    //             id: 3,
    //             name: "Delon",
    //             status: "Cancelled",
    //             date: "2023-12-07",
    //             time: "19:45",
    //             numberOfGuests: 2,
    //         },
    //         {
    //             id: 4,
    //             name: "Delon",
    //             status: "Cancelled",
    //             date: "2023-12-07",
    //             time: "19:45",
    //             numberOfGuests: 2,
    //         },
    //         {
    //             id: 5,
    //             name: "Delon",
    //             status: "Reserved",
    //             date: "2023-12-07",
    //             time: "19:45",
    //             numberOfGuests: 2,
    //         },
    //         {
    //             id: 6,
    //             name: "Delon",
    //             status: "Cancelled",
    //             date: "2023-12-07",
    //             time: "19:45",
    //             numberOfGuests: 2,
    //         },
    //         {
    //             id: 7,
    //             name: "Delon",
    //             status: "Reserved",
    //             date: "2023-12-07",
    //             time: "19:45",
    //             numberOfGuests: 2,
    //         },
    //         {
    //             id: 8,
    //             name: "Delon",
    //             status: "Cancelled",
    //             date: "2023-12-07",
    //             time: "19:45",
    //             numberOfGuests: 2,
    //         },
    //         {
    //             id: 9,
    //             name: "Delon",
    //             status: "Cancelled",
    //             date: "2023-12-07",
    //             time: "19:45",
    //             numberOfGuests: 2,
    //         },
    //         {
    //             id: 10,
    //             name: "Delon",
    //             status: "Cancelled",
    //             date: "2023-12-07",
    //             time: "19:45",
    //             numberOfGuests: 2,
    //         },
    //         // Add more dummy data as needed
    //     ];

    //     setHistoryData(dummyData);

    //     return () => clearInterval(intervalId);
    // }, []);

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString());
            setCurrentDate(now.toLocaleDateString());
        };

        const intervalId = setInterval(updateDateTime, 1000);

        // Fetch data from API
        axios.post('http://localhost:8000/api/getdata') // Ganti URL_API dengan URL sesuai endpoint di Laravel
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
