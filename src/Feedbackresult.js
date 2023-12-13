import React from "react";
import { useNavigate } from "react-router-dom"; 

const Feedbackresult = () => {
    const navigate = useNavigate(); // Tambahkan pemanggilan useNavigate

    const goToDashCust = () => {
        navigate('/dashcust');
    };

    return (
        <div className="feedbackresult">
            <div className="background">
                <div className="overlap-group-wrapper">
                    <div className="overlap-group">
                        <img className="image" alt="Image" src="image 8.png" />
                        <div className="rectangle" />
                        <p className="title1">Warung Warem appreciates your feedback!</p>
                        <p className="title2">We are working to provide improvements and better experiences for our customers. Thank you for your participation</p>
                        <p className="title3" onClick={goToDashCust}>Back</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedbackresult;
