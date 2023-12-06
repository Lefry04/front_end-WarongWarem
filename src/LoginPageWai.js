import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPageWai = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleConfirmClick = () => {
    // Contoh validasi sederhana, bisa disesuaikan dengan logika validasi yang sesuai
    if (username === "waiter" && password === "pass") {
      // Logic untuk aksi setelah konfirmasi berhasil
      console.log("Login berhasil");
    } else {
      setErrorMessage("id/password invalid");
    }
  };

  return (
    <div className="loginpagecust">
      <div className="background-gradient-wrapper">
        <div className="background-gradient">
          <div className="overlap">
            <div className="ellipse" />
            <div className="div" />
            <input
              className="rectangle"
              type="text"
              placeholder="id waiter"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="rectangle-2"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="text-wrapper-3">
              Sign In
            </div>
          </div>
          <div className="overlap-group">
            {errorMessage && <p className="error-message-2">{errorMessage}</p>}
          </div>
          <button className="div-wrapper" onClick={handleConfirmClick}>CONFIRM</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPageWai;
