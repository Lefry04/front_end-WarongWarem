// import React from "react";
// import { useNavigate } from "react-router-dom";

// export const ResReser1 = () =>{

//     const navigate = useNavigate();

//     const goToMenu1 = () => {
//         navigate('/menu1');
//     };

//     return (
//         <div className="resreser1">
//             <div className="background">
//             <div className="overlap-group-wrapper">
//             <div className="overlap-group">
//             <img className="image" alt="Image" src="background.png" />
//             <div className="rectangle" />
//             <div className="title">Restaurant Reservation</div>
//             <div className="question">
//                 <p className="a">Name of the Booker</p>
//                 <p className="b">Phone Number</p>
//                 <p className="c">Reservation Time</p>
//                 <p className="d">Special Requests</p>
//             </div>
//             <input placeholder="Please enter your name as the person making the reservation." className="a1"></input>
//             <input placeholder="Provide a contact number we can use for confirmation or additional information." className="b1"></input>
//             <input placeholder="Select the desired date for your table reservation." className="c1" type="datetime-local"></input>
//             <input placeholder="If there are any special requests, such as table preferences or dietary needs, inform us here." className="d1"></input>
//             <button onClick={goToMenu1}>NEXT</button>
//             </div>
//             </div>
//             </div>
//         </div>
//     )
// }

// export default ResReser1;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { useUserId } from "./UserIdContext";

const ResReser1 = () => {
  const { userId } = useUserId();
  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    number_of_guests: "30",
    time: "",
    special_requests: "",
    table_type: "restaurant",
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
        "https://rpl2-server.my.id/api/create-reservation",
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
        <div className="resreser1">
            <div className="background">
                <div className="overlap-group-wrapper">
                    <div className="overlap-group">
                        <img className="image" alt="Image" src="background.png" />
                        <div className="rectangle" />
                        <div className="title">Restaurant Reservation</div>
                        <div className="question">
                            <p className="a">Name of the Booker</p>
                            <p className="b">Phone Number</p>
                            <p className="c">Reservation Time</p>
                            <p className="d">Special Requests</p>
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
                            placeholder="YYYY-MM-DD HH:MM:SS"
                            className="c1"
                            type="text"
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                        />
                        <input
                            placeholder="If there are any special requests, such as table preferences or dietary needs, inform us here."
                            className="d1"
                            name="special_requests"
                            type="text"
                            value={formData.special_requests}
                            onChange={handleInputChange}
                        />
                        <button className="button" onClick={handleTableReservation} disabled={status === "loading"}>
                            {status === "loading" ? "Loading..." : "NEXT"}
                        </button>                    
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ResReser1;