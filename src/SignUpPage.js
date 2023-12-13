import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Commenting out Axios import as it's not used in this version
// import Axios from "axios";

export const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    profileName: "",
  });
  
  const navigate = useNavigate();

  const goToLoginPageCust = () => {
      navigate('/loginpagecust');
  };


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi bahwa semua data telah terisi
    if (!formData.username || !formData.password || !formData.confirmPassword || !formData.profileName) {
      console.error("Please fill in all fields");
      return;
    }

    // Validasi bahwa password dan konfirmasi password sama
    if (formData.password !== formData.confirmPassword) {
      console.error("Password and confirm password do not match");
      return;
    }

    // Commenting out Axios request as it's not used in this version
    /*
    try {
      const response = await Axios.post('http://localhost:8000/api/register', {
        username: formData.username,
        password: formData.password,
        profile_name: formData.profileName,
      });
      console.log(response.data);

      // Pindah ke halaman login hanya jika registrasi berhasil
      navigate('/loginpagecust');
    } catch (error) {
      console.error(error.response.data);
    }
    */

    // Simulating a successful registration without making a server request
    console.log("Simulated registration success");

    // Pindah ke halaman login hanya jika registrasi berhasil
    navigate('/loginpagecust');
  };

  return (
    <div className="sign-up-page">
      <div className="background-gradient-wrapper">
        <div className="background-gradient">
          <div className="overlap">
            <div className="overlap-group">
              <div className="ellipse" />
              <div className="div" />
              <div className="text-wrapper">What is your username?</div>
              <form onSubmit={handleSubmit}>
                <input
                  className="text-wrapper-2"
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                />
                <div className="text-wrapper-3">Create a password</div>
                <input
                  className="text-wrapper-4"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                />
                <input
                  className="text-wrapper-5"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Enter your password."
                />
                <input
                  className="text-wrapper-6"
                  type="text"
                  name="profileName"
                  value={formData.profileName}
                  onChange={handleChange}
                  placeholder="Enter a profile name"
                />
                <div className="text-wrapper-7">Confirm your password</div>
                <div className="what-s-your-name">What&#39;s your name?</div>
                <div className="div-wrapper">
                  <button type="submit" onClick={goToLoginPageCust}>REGISTER</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
