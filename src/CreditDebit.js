import React from "react";
import { useNavigate } from "react-router-dom";

export const CreditDebit = () => {
    const navigate = useNavigate();

    const goToresultdebit=()=>{
        navigate('/resultdebit');
    };
    return (
        <div className="creditdebit">
            <div className="background">
                <div className="overlap-group-wrapper">
                    <div className="overlap-group">
                        <img className="image" alt="Image" src="background.png" />
                        <div className="rectangle" />
                        <div className="c"></div>
                        <button className="title">Credit or Debit Card</button>
                        <p className="textone">Axis Bank **** **** **** 8395</p>
                        <p className="texttwo">HDFC Bank **** **** **** 647</p>
                        <img className="mastercard" alt="Image" src="logos_mastercard.png" />
                        <img className="vector" alt="Image" src="vector.png" />
                        <div className="line1" />
                        <div className="line2" />
                        <div className="line3" />
                        <div className="line4" />
                        <p className="text3">Rp. 50.000,00</p>
                        <p className="text4">View detailed bill</p>
                        <p className="text5" onClick={goToresultdebit}>Proceed to Pay</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreditDebit;