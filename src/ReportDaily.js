import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export const ReportDaily = () => {
    const [currentTime, setCurrentTime] = useState("");
    const [currentDate, setCurrentDate] = useState("");

    const navigate = useNavigate();

    const goToReserReportDash = () => {
        navigate('/resetreportdash');
    };

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString());
            setCurrentDate(now.toLocaleDateString());
        };

        const intervalId = setInterval(updateDateTime, 1000);

        return () => clearInterval(intervalId);
    }, []);

    // Data dummy untuk tabel
    const [dummyData, setDummyData] = useState([
        { id: 1, date: "2023-02-01", numberofreservations: 30, revenue: 1400000, notes: "Big Reservations" },
        { id: 2, date: "2023-02-04", numberofreservations: 10, revenue: 500000, notes: "-" },
        { id: 3, date: "2023-02-06", numberofreservations: 20, revenue: 900000, notes: "Big Reservations" },
        { id: 4, date: "2023-02-08", numberofreservations: 40, revenue: 160000, notes: "Big Reservations" },
        { id: 5, date: "2023-02-10", numberofreservations: 7, revenue: 300000, notes: "-" },
        { id: 6, date: "2023-02-17", numberofreservations: 6, revenue: 250000, notes: "-" },
        { id: 7, date: "2023-02-18", numberofreservations: 7, revenue: 300000, notes: "-" },
        { id: 8, date: "2023-02-18", numberofreservations: 6, revenue: 250000, notes: "-" },
        { id: 9, date: "2023-02-18", numberofreservations: 20, revenue: 900000, notes: "Big Reservations" },
        { id: 10, date: "2023-02-19", numberofreservations: 40, revenue: 160000, notes: "Big Reservations" },
        { id: 11, date: "2023-02-20", numberofreservations: 6, revenue: 250000, notes: "-" },
        { id: 12, date: "2023-02-22", numberofreservations: 20, revenue: 900000, notes: "Big Reservations" },
        // Tambahkan data dummy lainnya sesuai kebutuhan
    ]);

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
                        <div className="blur">
                        </div>
                        <div className="close">
                        <div className="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Date</th>
                                        <th>Number of Reservations</th>
                                        <th>Revenue \(IDR\)</th>
                                        <th>Notes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dummyData.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id} </td>
                                            <td>{item.date}</td>
                                            <td>{item.numberofreservations}</td>
                                            <td>{item.revenue}</td>
                                            <td>{item.notes}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        </div>
                        <p className="a">DASHBOARD</p>
                        <p className="b">WARONGWAREM</p>
                        <p className="c">Daily Reservation Report</p>
                        <button className="back" onClick={goToReserReportDash}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportDaily;