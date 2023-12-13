// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export const TableRes1 = () => {

//     const [selectedTable, setSelectedTable] = useState(""); // State untuk menyimpan pilihan tabel

//     const handleTableChange = (event) => {
//         setSelectedTable(event.target.value);
//     };

//     const navigate = useNavigate();

//     const goToMenu1 = () => {
//         navigate('/menu1')
//     };

//     return (
//         <div className="tableres1">
//             <div className="background">
//                 <div className="overlap-group-wrapper">
//                     <div className="overlap-group">
//                         <img className="image" alt="Image" src="background.png" />
//                         <div className="rectangle" />
//                         <div className="title">Table Reservation</div>
//                         <div className="question">
//                             <p className="a">Name of the Booker</p>
//                             <p className="b">Phone Number</p>
//                             <p className="c">Number of Guest</p>
//                             <p className="d">Reservation Time</p>
//                             <p className="e">Special Requests</p>
//                             <p className="f">Choose Table</p>
//                         </div>
//                         <input placeholder="Please enter your name as the person making the reservation." className="a1"></input>
//                         <input placeholder="Provide a contact number we can use for confirmation or additional information." className="b1"></input>
//                         <input placeholder="How many guests will be joining this reservation?" className="c1"></input>
//                         <input placeholder="Select the desired date for your table reservation." className="d1" type="datetime-local"></input>
//                         <input placeholder="If there are any special requests, such as table preferences or dietary needs, inform us here." className="e1"></input>
//                         <select value={selectedTable} onChange={handleTableChange} className="f1">
//                             <option>Select a Table</option>
//                             <option value="Indoor">Indoor</option>
//                             <option value="Outdoor">Outdoor</option>
//                         </select>
//                         <button className="button" onClick={goToMenu1}>NEXT</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default TableRes1;

// import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import Axios from "axios";
// import { useUserId } from "./UserIdContext";
// import UserIdContext from './UserIdContext';


// const TableRes1 = () => {

//     const userId = useUserId();
//     // const userId = useContext(UserIdContext);


//     const [formData, setFormData] = useState({
//         name: "",
//         phone_number: "",
//         number_of_guests: "",
//         time: "",
//         special_requests: "",
//         table_type: "",
//         id_user: UserIdContext.useUserId,
//     });

//     const [status, setStatus] = useState("idle");
//     const [error, setError] = useState(null);

//     const navigate = useNavigate();

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleTableReservation = async () => {
//         setStatus("loading");

//          // Ganti dengan ID yang valid

//         // Menetapkan nilai id_user pada formData
//         setFormData({
//             ...formData,
//             // id_user: userIdContext.userId,        
//         });

//         try {

//             console.log("Data yang Dikirim:", formData);

//             const response = await Axios.post("http://localhost:8000/api/create-reservation", formData);

//             if (response.status === 200) {
//                 setStatus("success");
//                 navigate('/menu1');
//             } else {
//                 const error = response.data;
//                 setStatus("error");
//                 setError(error.message || "Something went wrong");
//             }

//             navigate('/menu1');
//         } catch (error) {
//             setStatus("error");
//             setError("Failed to connect to the server");
//         }
//     };

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { useUserId } from "./UserIdContext";

const TableRes1 = () => {
  const { userId } = useUserId();
  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    number_of_guests: "",
    time: "",
    special_requests: "",
    table_type: "",
    id_user: userId,
  });

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTableReservation = async () => {
    setStatus("loading");

    // Ganti dengan ID yang valid

    try {
      console.log("Data yang Dikirim:", formData);

      const response = await Axios.post(
        "http://localhost:8000/api/create-reservation",
        formData
      );

      if (response.status === 200) {
        setStatus("success");
        navigate("/menu1");
      } else {
        const error = response.data;
        setStatus("error");
        setError(error.message || "Something went wrong");
      }

      navigate("/menu1");
    } catch (error) {
      setStatus("error");
      setError("Failed to connect to the server");
    }
  };

    return (
        <div className="tableres1">
            <div className="background">
                <div className="overlap-group-wrapper">
                    <div className="overlap-group">
                        <img className="image" alt="Image" src="background.png" />
                        <div className="rectangle" />
                        <div className="title">Table Reservation</div>
                        <div className="question">
                            <p className="a">Name of the Booker</p>
                            <p className="b">Phone Number</p>
                            <p className="c">Number of Guest</p>
                            <p className="d">Reservation Time</p>
                            <p className="e">Special Requests</p>
                            <p className="f">Choose Table</p>
                        </div>
                        <input
                            placeholder="Please enter your name as the person making the reservation."
                            className="a1"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        <input
                            placeholder="Provide a contact number we can use for confirmation or additional information."
                            className="b1"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleInputChange}
                        />
                        <input
                            placeholder="How many guests will be joining this reservation?"
                            className="c1"
                            name="number_of_guests"
                            value={formData.number_of_guests}
                            onChange={handleInputChange}
                        />
                        <input
                            placeholder="Select the desired date for your table reservation."
                            className="d1"
                            type="text"
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                        />
                        <input
                            placeholder="If there are any special requests, such as table preferences or dietary needs, inform us here."
                            className="e1"
                            name="special_requests"
                            type="text"
                            value={formData.special_requests}
                            onChange={handleInputChange}
                        />
                        <select
                            value={formData.table_type}
                            onChange={(e) => setFormData({ ...formData, table_type: e.target.value })}
                            className="f1"
                            name="table_type"
                        >
                            <option>Select a Table</option>
                            <option value="indoor">Indoor</option>
                            <option value="outdoor">Outdoor</option>
                        </select>
                        <button className="button" onClick={handleTableReservation} disabled={status === "loading"}>
                            {status === "loading" ? "Loading..." : "NEXT"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TableRes1;