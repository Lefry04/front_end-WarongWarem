// import React from "react";
// import { useNavigate } from "react-router-dom";

// export const SignUpPage = () => {

// const goToLoginPageCust = () => {
//         navigate('/loginpagecust');
//     };

// const navigate = useNavigate();

//   return (
//     <div className="sign-up-page">
//       <div className="background-gradient-wrapper">
//         <div className="background-gradient">
//           <div className="overlap">
//             <div className="overlap-group">
//               <div className="ellipse" />
//               <div className="div" />
//               <div className="text-wrapper">What is your username?</div>
//               <input className="text-wrapper-2" type="text" placeholder="Enter your username"/>
//               <div className="text-wrapper-3">Create a password</div>
//               <input className="text-wrapper-4" type="password" placeholder="Create a password"/>
//               <input className="text-wrapper-5" type="password" placeholder="Enter your password."/>
//               <input className="text-wrapper-6" type="text" placeholder="Enter a profile name"/>
//               <div className="text-wrapper-7">Confirm your password</div>
//               <div className="what-s-your-name">What&#39;s your name?</div>
//               <div className="text-wrapper-8">Sign Up</div>
//             </div>
//             <button className="div-wrapper" onClick={goToLoginPageCust}>REGISTER</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUpPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignUpPage = () => {

const goToLoginPageCust = () => {
        navigate('/loginpagecust');
    };

const navigate = useNavigate();

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
                  <button type="submit">REGISTER</button>
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
