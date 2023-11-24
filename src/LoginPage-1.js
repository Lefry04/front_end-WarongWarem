// LoginPage.js
import React, { useState } from 'react';
import CustomerLoginForm from './CustomerLoginForm';
import WaitressLoginForm from './WaitressLoginForm';
import ManagerLoginForm from './ManagerLoginForm';

const LoginPage = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleClick = (role) => {
    setSelectedRole(role);
  };

  return (
    <div className="loginpage">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="rectangle" />
          <img className="img" alt="Rectangle" src="/Chingri Posto _ Experiences of a Gastronomad.jpeg" />
          <button className="button" onClick={() => handleRoleClick('customer')}>LOG IN AS A CUSTOMER</button>
          <button className="button2" onClick={() => handleRoleClick('waitress')}>LOG IN AS A WAITRESS</button>
          <button className="button3" onClick={() => handleRoleClick('manager')}>LOG IN AS A MANAGER</button>
        </div>
      </div>

      {selectedRole === 'customer' && <CustomerLoginForm />}
      {selectedRole === 'waitress' && <WaitressLoginForm />}
      {selectedRole === 'manager' && <ManagerLoginForm />}
    </div>
  );
};

export default LoginPage;
