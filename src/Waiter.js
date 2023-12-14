import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Waiter = () => {

    const navigate = useNavigate();

    const goToDashWai = () => {
        navigate('/dashwai')
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
        axios.post('http://localhost:8000/api/getdata') // Ganti URL_API dengan URL sesuai endpoint di Laravel
            .then(response => {
                setDummyData(response.data.reservations);
            })
            .catch(error => {
                console.error(error);
            });

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

    const handleReserve = async () => {
        console.log("Reserve button clicked");
    
        if (selectedRowIds.length > 0) {
            try {
                // Kirim permintaan ke server untuk memperbarui status menjadi "Active"
                const response = await axios.put('http://localhost:8000/api/reserve', { ids: selectedRowIds });
                console.log(response.data); // Output dari server (optional)
    
                // Perbarui status di sisi klien jika permintaan berhasil
                const updatedData = dummyData.map((item) => {
                    if (selectedRowIds.includes(item.id_reservation) && item.status === "Waiting") {
                        return { ...item, status: "Active" };
                    }
                    return item;
                });
    
                setDummyData(updatedData);
                setSelectedRowIds([]);

                setTimeout(() => {
                    window.location.reload(true);
                    // Display a confirmation alert after reloading
                    alert("Reservation confirmed!");
                }, 500);
            } catch (error) {
                console.error("Error updating status:", error);
            }
        } else {
            console.log("No row selected");
        }
    };
    
    const handleReject = async () => {
        console.log("Reject button clicked");
    
        if (selectedRowIds.length > 0) {
            try {
                // Kirim permintaan ke server untuk memperbarui status menjadi "Inactive"
                const response = await axios.put('http://localhost:8000/api/reject', { ids: selectedRowIds });
                console.log(response.data); // Output dari server (optional)
    
                // Perbarui status di sisi klien jika permintaan berhasil
                const updatedData = dummyData.map((item) => {
                    if (selectedRowIds.includes(item.id_reservation) && item.status === "Waiting") {
                        return { ...item, status: "Inactive" };
                    }
                    return item;
                });
    
                setDummyData(updatedData);
                setSelectedRowIds([]);
            } catch (error) {
                console.error("Error updating status:", error);
            }
        } else {
            console.log("No row selected");
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
                                            <th>Status</th>
                                            <th>Table</th>
                                            <th>Special Requests</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dummyData
                                            .filter(item => item.table_type !== "restaurant") // Menyaring baris dengan table_type !== "restaurant"
                                            .map((item) => (
                                                <tr key={item.id_reservation}>
                                                    <td>
                                                        <div
                                                            onClick={() => handleRowSelect(item.id_reservation)}
                                                            className={`select-box ${selectedRowIds.includes(item.id_reservation) ? "selected" : ""}`}
                                                        >
                                                            {selectedRowIds.includes(item.id_reservation) ? "✓" : ""}
                                                        </div>
                                                    </td>
                                                    <td>{item.name}</td>
                                                    <td>{item.phone_number}</td>
                                                    <td>{item.number_of_guests}</td>
                                                    <td>{item.time}</td>
                                                    <td>{item.status}</td>
                                                    <td>{item.table_type}</td>
                                                    <td>{item.special_requests}</td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <p className="a">DASHBOARD</p>
                        <p className="b">WARONGWAREM</p>
                        <p className="c">List of Reservations for Warung Rarem Customers</p>
                        <p className="d">The Reserve and Reject button will only be active when its status is 'Waiting'</p>
                        <button className="unselect" onClick={handleUnselectAll}>Unselect all</button>
                        <button className="select" onClick={handleSelectAll}>Select all</button>
                        <button className="reject" onClick={handleReject}>Reject</button>
                        <button className="reserve" onClick={handleReserve}>Reserve</button>
                        <button className="back" onClick={goToDashWai}>Back</button>
                        <button className="selected">{`${selectedRowIds.length} Item/s selected`}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Waiter;