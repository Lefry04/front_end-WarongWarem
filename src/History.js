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
                                <p className="b">1. Name of the Reserver: Delon J</p>
                                <p className="c">2. Table Name: 12A</p>
                                <p className="d">3. Number of Guest: 10</p>
                                <p className="e">4. Date and Time: 2023/11/25, 08.00 PM</p>
                                <p className="f">5. Special Requests: No food allergies. A quiet corner table, if possible.</p>
                                <button className="line2" onClick={goToDashCust}>
                                    <span> Back to Dashboard </span>
                                </button>
                            </button>
                            <div className="h"></div>
                            <div className="k"></div>
                            <div className="m"></div>
                            <p className="hi">Accept</p>
                            <p className="ku">Waiting</p>
                            <p className="me">Reject</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    export default History;