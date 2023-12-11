import React from "react";
import { useNavigate } from "react-router-dom";

export const Menu2 = () => {

    const navigate = useNavigate();

    const goToPay1= () => {
        navigate('/pay1')
    };

    return (
        <div className="menu2">
            <div className="background">
                <div className="overlap-group-wrapper">
                    <div className="overlap-group">
                        <img className="image" alt="Image" src="background.png" />
                        <div className="rectangle" />
                        <div className="title">Orders Details</div>
                        <div className="box"></div>
                        <div className="line1" />
                        <div className="line2" />
                        <div className="line3" />
                        <div className="line4" />
                        <div className="line5" />
                        <p className="text1">1x</p>
                        <p className="text1s">Package 1</p>
                        <p className="textharga1">Rp. 150.000,00</p>
                        <p className="text2">1x</p>
                        <p className="text2s">Package 3</p>
                        <p className="textharga2">Rp. 350.000,00</p>
                        <p className="texttotalharga">Total Payment: Rp. 50.000,00</p>
                        <button className="buttonpay" onClick={goToPay1}>Payment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu2;