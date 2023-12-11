import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export const ReportMonthly = () => {
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
        { id: 1, month: "January", totalmonthlyreservsations: 3000, totalmonthlyincome: 14000000 },
        { id: 2, month: "February", totalmonthlyreservsations: 1000, totalmonthlyincome: 50000000 },
        { id: 3, month: "March", totalmonthlyreservsations: 2000, totalmonthlyincome: 9000000 },
        { id: 4, month: "April", totalmonthlyreservsations: 4000, totalmonthlyincome: 1600000 },
        { id: 5, month: "May", totalmonthlyreservsations: 4000, totalmonthlyincome: 1500000 },
        { id: 6, month: "June", totalmonthlyreservsations: 3500, totalmonthlyincome: 1780000 },
        { id: 7, month: "July", totalmonthlyreservsations: 3700, totalmonthlyincome: 1890000 },
        { id: 8, month: "August", totalmonthlyreservsations: 3000, totalmonthlyincome: 1920000 },
        { id: 9, month: "September", totalmonthlyreservsations: 3800, totalmonthlyincome: 1607000 },
        { id: 10, month: "October", totalmonthlyreservsations: 5000, totalmonthlyincome: 16000000 },
        { id: 11, month: "November", totalmonthlyreservsations: 3600, totalmonthlyincome: 1670000 },
        { id: 12, month: "December", totalmonthlyreservsations: 2000, totalmonthlyincome: 14000000 },
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
                                        <th>Month</th>
                                        <th>Total Monthly Reservations</th>
                                        <th>Total Monthly Income \(IDR\)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dummyData.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id} </td>
                                            <td>{item.month}</td>
                                            <td>{item.totalmonthlyreservsations}</td>
                                            <td>{item.totalmonthlyincome}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        </div>
                        <p className="a">DASHBOARD</p>
                        <p className="b">WARONGWAREM</p>
                        <p className="c">Monthly Reservation Report</p>
                        <button className="back" onClick={goToReserReportDash}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportMonthly;