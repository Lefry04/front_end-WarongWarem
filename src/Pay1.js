import React from "react";
import { useNavigate } from "react-router-dom";

export const Pay1 = () =>{
    const navigate = useNavigate();
    const goTocreditdebit=()=>{
        navigate('/creditdebit');
    };

    return (
        <div className="pay1">
            <div className="background">
            <div className="overlap-group-wrapper">
            <div className="overlap-group">
            <img className="image" alt="Image" src="background.png" />
            <div className="rectangle" />
            <div className="title">Payment Methods</div>
            <button className="a" onClick={goTocreditdebit}>Credit or Debit Card</button>
            <button className="b">Cash</button>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Pay1;