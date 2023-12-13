import React from "react";
import { useNavigate } from "react-router-dom";

export const Menu1 = () => {

    const navigate = useNavigate();

    const goToMenu2 = () => {
        navigate('/menu2')
    };

    return (
        <div className="menu1">
            <div className="background">
                <div className="overlap-group-wrapper">
                    <div className="overlap-group">
                        <img className="image" alt="Image" src="background.png" />
                        <div className="rectangle" />
                        <div className="title">Choose Menu</div>
                        <button className="paket1"><img src="Group.png"></img></button>
                        <button className="paket2"><img src="Group1.png"></img></button>
                        <button className="paket3"><img src="Group2.png"></img></button>
                        <button className="paket4"><img src="Group3.png"></img></button>
                        <button className="buttonorder" onClick={goToMenu2}>Add to Order</button>
                        <div className="p1">Package 1: Rp 500.000,00</div>
                        <div className="p2">Package 2: Rp 250.000,00</div>
                        <div className="p3">Package 3: Rp 200.000,00</div>
                        <div className="p4">Package 4: Rp 300.000,00</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu1;