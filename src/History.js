import React from "react";
import { useNavigate } from "react-router-dom";

export const History = () => {
    const navigate = useNavigate();

    const goToDashCust = () => {
        navigate('/DashCust');
    };

    return (
        <div className="history">
            <div className="background">
                <div className="overlap-group-wrapper">
                    <div className="overlap-group">
                        <img className="image" alt="Image" src="background.png" />
                        <div className="rectangle" />
                        <div className="title">History</div>
                        <div className="hijau"></div>
                        <button>
                            <p className="a">Reservation 1</p>
                            <p className="b">- Table Name: 12A</p>
                            <p className="c">- Capacity: 10</p>
                            <button className="line2" onClick={goToDashCust}>
                                <span> Back to Dashboard </span>
                            </button>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History;