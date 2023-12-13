import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export const Feedback2 = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const goToFeedbackAC = () => {
        navigate('/feedbackac');
    };

    const goToFeedbackresult = () => {
        navigate('/feedbackresult');
    };

    const goToDashCust= () => {
        navigate('/dashcust')
    };

    return (
        <div className="feedback2">
            <div className="background">
                <div className="overlap-group-wrapper">
                    <div className="overlap-group">
                        <img className="image" alt="Image" src="image 8.png" />
                        <div className="rectangle" />
                        <div className="rectangle1" />
                        <p className="feed1">Feedback</p>
                        <div className="m1"><img src="M1.png" alt="M1" /></div>
                        <div className="mv2g"><img src="Mv2G.png" alt="Mv2G" /></div>
                        <div className="m3"><img src="M3.png" alt="M3" /></div>
                   å     <div className="m4"><img src="M4.png" alt="M4" /></div>
                        <div className="m5"><img src="M5.png" alt="M5" /></div>
                        <div className="rectangle2" />
                        <p className="title" onClick={goToFeedbackAC}>Add Comment</p>
                        <div className="rectangle3" />
                        <p className="title1" onClick={goToFeedbackresult}>Send My Feedback</p>
                        <div className="rectangle4" />
                        <p className="title2" onClick={goToDashCust}>Remember Later</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback2;