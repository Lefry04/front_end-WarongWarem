import React from "react";
import { useNavigate } from "react-router-dom";

export const Feedback = () => {

    const navigate = useNavigate();

    const goToFeedback2 = () => {
        navigate('/feedback2')
    };

    const goToDashCust= () => {
        navigate('/dashcust')
    };

    return (
        <div className="feedback">
            <div className="background">
                <div className="overlap-group-wrapper">
                    <div className="overlap-group">
                        <img className="image" alt="Image" src="image 8.png" />
                        <div className="rectangle" />
                        <div className="rectangle1" />
                        <p className="feed1">Feedback</p>
                        <button className="m1" onClick={goToFeedback2}><img src="M1.png"></img></button>
                        <button className="mv2" onClick={goToFeedback2}><img src="Mv2.png"></img></button>
                        <button className="m3" onClick={goToFeedback2}><img src="M3.png"></img></button>
                        <button className="m4" onClick={goToFeedback2}><img src="M4.png"></img></button>
                        <button className="m5" onClick={goToFeedback2}><img src="M5.png"></img></button>
                        <div className="rectangle2" onClick={goToDashCust} />
                        <button className="title1" onClick={goToDashCust}>Remember Later</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;