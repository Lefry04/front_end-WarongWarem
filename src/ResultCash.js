import React from "react";
import { useNavigate } from "react-router-dom";

export const ResultCash = () => {
    const navigate = useNavigate();

    const goToDashCust=()=>{
        navigate('/DashCust');
    };

    return (
        <div className="resultcash">
            <div className="background">
                <div className="overlap-group-wrapper">
                    <div className="overlap-group">
                        <img className="image" alt="Image" src="background.png" />
                        <div className="rectangle" />
                        <div className="line1" />
                        <button className="line2" onClick={goToDashCust}>
                            <span> Back to Dashboard </span> 
                        </button>
                        <p className="one">Thank you for your reservation, please wait for our confirmation.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultCash;