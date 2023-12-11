import React from "react";

export const TableRes1 = () =>{

    const goToPay1 = () => {
        navigate("/pay1");
      };

const navigate= useNavigate();

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
            <input placeholder="Please enter your name as the person making the reservation." className="a1"></input>
            <input placeholder="Provide a contact number we can use for confirmation or additional information." className="b1"></input>
            <input placeholder="How many guests will be joining this reservation?" className="c1"></input>
            <input placeholder="Select the desired date for your table reservation." className="d1"></input>
            <input placeholder="If there are any special requests, such as table preferences or dietary needs, inform us here." className="e1"></input>
            <input placeholder="Please choose an available table." className="f1"></input>
            <button className="button" onClick={goToPay1}>NEXT</button>
            </div>
            </div>
            </div>
        </div>
    )
}

export default TableRes1;