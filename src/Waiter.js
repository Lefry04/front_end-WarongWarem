import React, { useState, useEffect } from "react";

export const Waiter = () => {

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

    // Data dummy untuk tabel
    const [dummyData, setDummyData] = useState([
        { id: 1, name: "John Doe", phoneNumber: 62852, numberOfGuest: 2, datetime: "2023-11-11 14:40:00", status: "Waiting", table: "Outdoor", specialRequest: "Vegetarian menu" },
        { id: 2, name: "Mary Smith", phoneNumber: 6296, numberOfGuest: 6, datetime: "2023-11-12 14:00:00", status: "Waiting", table: "Indoor", specialRequest: "Anniversary Celebration" },
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

    const handleStatusChange = (id, status) => {
        // Implementasikan logika untuk menangani perubahan status pada baris dengan id tertentu
        console.log(`Row with ID ${id} status changed to ${status}`);
    };

    const handleSelectAll = () => {
        const allRowIds = dummyData.map((item) => item.id);
        setSelectedRowIds(allRowIds);
    };

    const handleUnselectAll = () => {
        setSelectedRowIds([]);
    };

    const handleReserve = () => {
        // Implementasikan logika untuk mengubah status menjadi "Active"
        console.log("Reserve button clicked");
        // Misalnya, kita ubah status menjadi "Active" untuk semua baris yang dipilih
        const updatedData = dummyData.map((item) => {
            if (selectedRowIds.includes(item.id)) {
                return { ...item, status: "Active" };
            }
            return item;
        });
        console.log(updatedData);
        setDummyData(updatedData);
        setSelectedRowIds([]);
    };

    const handleReject = () => {
        // Implementasikan logika untuk mengubah status menjadi "Inactive"
        console.log("Reject button clicked");
        // Misalnya, kita ubah status menjadi "Inactive" untuk semua baris yang dipilih
        const updatedData = dummyData.map((item) => {
            if (selectedRowIds.includes(item.id)) {
                return { ...item, status: "Inactive" };
            }
            return item;
        });
        console.log(updatedData);
        setDummyData(updatedData);
        setSelectedRowIds([]);
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
                                            <th>Status</th>
                                            <th>Table</th>
                                            <th>Special Requests</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dummyData.map((item) => (
                                            <tr key={item.id}>
                                                <td>
                                                    <div
                                                        onClick={() => handleRowSelect(item.id)}
                                                        className={`select-box ${selectedRowIds.includes(item.id) ? "selected" : ""}`}
                                                    >
                                                        {selectedRowIds.includes(item.id) ? "✓" : ""}
                                                    </div>
                                                </td>
                                                <td>{item.name}</td>
                                                <td>{item.phoneNumber}</td>
                                                <td>{item.numberOfGuest}</td>
                                                <td>{item.datetime}</td>
                                                <td>
                                                    <select
                                                        value={item.status}
                                                        onChange={(e) => handleStatusChange(item.id, e.target.value)}
                                                        className={`status-dropdown ${selectedRowIds.includes(item.id) ? "selected" : ""}`}
                                                    >
                                                        <option value="Active">Active</option>
                                                        <option value="Waiting">Waiting</option>
                                                        <option value="Inactive">Inactive</option>
                                                    </select>
                                                </td>
                                                <td>{item.table}</td>
                                                <td>{item.specialRequest}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <p className="a">DASHBOARD</p>
                        <p className="b">WARONGWAREM</p>
                        <p className="c">List of Reservations for Warung Rarem Customers</p>
                        <button className="unselect" onClick={handleUnselectAll}>Unselect all</button>
                        <button className="select" onClick={handleSelectAll}>Select all</button>
                        <button className="reject" onClick={handleReject}>Reject</button>
                        <button className="reserve" onClick={handleReserve}>Reserve</button>
                        <button className="selected">{`${selectedRowIds.length} Item/s selected`}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Waiter;