import React from "react";
import { useNavigate } from "react-router-dom";

export const ResultDebit = () => {
    const navigate = useNavigate();

    const goToDashCust=()=>{
        navigate('/DashCust');
    };

    return (
        <div className="resultdebit">
            <div className="background">
                <div className="overlap-group-wrapper">
                    <div className="overlap-group">
                        <img className="image" alt="Image" src="background.png" />
                        <div className="rectangle" />
                        <div className="line1" />
                        <button className="line2" onClick={goToD}>
                            <span> Back to Dashboard </span> 
                        </button>
                        <p className="one">Your Payment and Reservation is Successful</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultDebit;