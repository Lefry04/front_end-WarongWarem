import React, { useState } from "react";

export const LoginPageMan = ({changePage}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleConfirmClick = () => {
    // Contoh validasi sederhana, bisa disesuaikan dengan logika validasi yang sesuai
    if (username === "manager" && password === "pass") {
      // Logic untuk aksi setelah konfirmasi berhasil
      console.log("Login berhasil");
    } else {
      setErrorMessage("id/password invalid");
    }
  };

  const goToSignUpPage = () => {
    changePage('signuppage');
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
              placeholder="id manager"
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

export default LoginPageMan;
