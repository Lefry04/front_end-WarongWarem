import React from "react";

export const Cash = () => {
    return (
        <div className="cash">
            <div className="background">
                <div className="overlap-group-wrapper">
                    <div className="overlap-group">
                        <img className="image" alt="Image" src="background.png" />
                        <div className="rectangle" />
                        <div className="line1" />
                        <div className="line2" />
                        <div className="line3" />
                        <p className="title">Cash</p>
                        <p className="one">To show this code when making a payment at the cashier, use the following code.</p>
                        <p className="two">YOUR CODE: DQH172</p>
                        <p className="three">Next</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cash;