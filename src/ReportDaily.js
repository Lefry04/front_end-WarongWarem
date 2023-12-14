import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export const ReportDaily = () => {
    const [currentTime, setCurrentTime] = useState("");
    const [currentDate, setCurrentDate] = useState("");
    const [dummyData, setDummyData] = useState([]);

    const navigate = useNavigate();

    const goToDashMan = () => {
        navigate('/dashman');
    };

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString());
            setCurrentDate(now.toLocaleDateString());
        };

        const fetchData = async () => {
            try {
                const response = await axios.post('http://localhost:8000/api/getdata');
                const dataWithIds = response.data.reservations.map((item, index) => ({
                    ...item,
                    id: index + 1,
                    date: new Date(item.time).toLocaleDateString(), // Display date without time
                }));

                // Group data by date and sum numberofreservations and revenue
                const groupedData = dataWithIds.reduce((acc, item) => {
                    const existingItem = acc.find((groupedItem) => groupedItem.date === item.date);
                    if (existingItem) {
                        existingItem.numberofreservations += 1; // Increment the count for each reservation
                        existingItem.revenue += item.revenue;
                    } else {
                        acc.push({
                            id: acc.length + 1, // Generate unique ID starting from 1
                            date: item.date,
                            numberofreservations: 1, // Initialize count for each date
                            revenue: item.revenue,
                            notes: item.notes,
                        });
                    }
                    return acc;
                }, []);

                setDummyData(groupedData);
            } catch (error) {
                console.error(error);
            }
        };

        const intervalId = setInterval(updateDateTime, 1000);

        fetchData();

        return () => clearInterval(intervalId);
    }, []);

    // State untuk menyimpan ID baris yang dipilih
    const [selectedRowIds, setSelectedRowIds] = useState([]);

    // Fungsi untuk menangani pemilihan baris
    const handleRowSelect = (rowId) => {
        if (selectedRowIds.includes(rowId)) {
            // Jika sudah dipilih, hapus dari daftar seleksi
            setSelectedRowIds(selectedRowIds.filter((id) => id !== rowId));
        } else {
            // Jika belum dipilih, tambahkan ke daftar seleksi
            setSelectedRowIds([...selectedRowIds, rowId]);
        }
    };

    return (
        <div className="reportdaily">
            <div className="background">
                <div className="overlap-group-wrapper">
                    <div className="overlap-group">
                        <img className="image" alt="Image" src="background.png" />
                        <div className="rectangle" />
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="text-wrapper-2">{currentTime}</div>
                        <div className="text-wrapper-3">{currentDate}</div>
                        <div className="blur"></div>
                        <div className="close">
                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Date</th>
                                            <th>Number of Reservations</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dummyData.map((item) => (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.date}</td>
                                                <td>{item.numberofreservations}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <p className="a">DASHBOARD</p>
                        <p className="b">WARONGWAREM</p>
                        <p className="c">Daily Reservation Report</p>
                        <button className="back" onClick={goToDashMan}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportDaily;
