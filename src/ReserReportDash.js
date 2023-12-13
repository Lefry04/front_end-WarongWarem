import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export const ReserReportDash = () => {
    const navigate = useNavigate();

    const goToReportDaily = () => {
        navigate('/reportdaily');
    };

    const goToReportMonthly = () => {
        navigate('/reportmonthly');
    };

    const goToDashMan = () => {
        navigate('/dashman');
    };

    return (
        <div className="reserreportdash">
            <div className="background" >
                <div className="overlap-group-wrapper">
                    <div className="overlap-group">
                        <img className="image" alt="Image" src="background.png" />
                        <div className="rectangle" />
                        <button className="a" onClick={goToReportDaily}>Daily Report</button>
                        <button className="b" onClick={goToReportMonthly}>Monthly Report</button>
                        <p className="back" onClick={goToDashMan}>Back</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReserReportDash;