import React from "react";

export const ResReser1 = () =>{
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
            <input placeholder="Please enter your name as the person making the reservation." className="a1"></input>
            <input placeholder="Provide a contact number we can use for confirmation or additional information." className="b1"></input>
            <input placeholder="Select the desired date for your table reservation." className="c1" type="datetime-local"></input>
            <input placeholder="If there are any special requests, such as table preferences or dietary needs, inform us here." className="d1"></input>
            <button>NEXT</button>
            </div>
            </div>
            </div>
        </div>
    )
}

export default ResReser1;