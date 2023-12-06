import React from "react";
import { useNavigate } from 'react-router-dom';


export const Reservation = () => {

    const navigate = useNavigate();

    const goToTableRes1 = () => {
        navigate("/tableres1");
    };

    const goToResReser1 = () => {
        navigate("/resreser1");
    };


    return (
    <div className="reservation">
      <div className="background" >
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <img className="image" alt="Image" src="background.png" />
          <div className="rectangle" />
          <button className="button1" onClick={goToTableRes1}>Table Reservation</button>
          <button className="button2" onClick={goToResReser1}>Restaurant Reservation</button>
        </div>
      </div>
      </div>
    </div>
    )
}

export default Reservation;