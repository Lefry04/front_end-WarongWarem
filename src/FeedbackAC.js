import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export const FeedbackAC = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const goToFeedbackresult = () => {
        navigate('/feedbackresult');
    };

    return (
        <div className="feedbackac">
            <div className="background">
                <div className="overlap-group-wrapper">
                    <div className="overlap-group">
                        <img className="image" alt="Image" src="image 8.png" />
                        <div className="rectangle" />
                        <div className="rectangle1" />
                        <p className="feed1">Feedback</p>
                        <div className="rectangle2" />
                        <p className="feed2">WarungWarem adalah pilihan terdepan saya untuk merencanakan makan malam yang tak terlupakan. Antarmuka yang user-friendly memudahkan saya menemukan restoran favorit, melihat menu dengan jelas, dan memesan meja tanpa kerumitan. Fitur notifikasi yang handal dan layanan pelanggan yang responsif semakin menambah kenyamanan, menjadikan WarungWarem teman setia dalam menjelajahi dunia kuliner. Dengan WarongWarem, saya dapat dengan cepat menyesuaikan rencana makan saya, membaca ulasan yang informatif, dan mereservasi tempat dengan mudah. Pengalaman pengguna yang mulus dan kemudahan akses informasi membuat WarongWarem menjadi aplikasi reservasi restoran yang sangat saya andalkan untuk setiap kesempatan bersantap.</p>
                        <div className="m1"><img src="M1.png" alt="M1" /></div>
                        <div className="mv2g"><img src="Mv2G.png" alt="Mv2G" /></div>
                        <div className="m3"><img src="M3.png" alt="M3" /></div>
                        <div className="m4"><img src="M4.png" alt="M4" /></div>
                        <div className="m5"><img src="M5.png" alt="M5" /></div>
                        <div className="rectangle3" />
                        <p className="title1" onClick={goToFeedbackresult}>Send My Feedback</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackAC;