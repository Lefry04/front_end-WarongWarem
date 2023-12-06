import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FrontPage from './FrontPage';
import LoginPageCust from "./LoginPageCust";
import AboutUsPage from "./AboutUsPage";
import SignUpPage from "./SignUpPage";
import LoginPageWai from "./LoginPageWai";
import LoginPageMan from "./LoginPageMan";
import DashCust from "./DashCust";
import DashWai from "./DashWai";
import DashMan from "./DashMan";
import Reservation from "./Reservation";
import TableRes1 from "./TableRes1";
import ResReser1 from "./ResReser1";
import Pay1 from "./Pay1";
import ContactUs from "./ContactUs";
import Menu1 from "./Menu1";
import CreditDebit from "./CreditDebit";
import Cash from "./Cash";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/loginpagecust" element={<LoginPageCust />} />
        <Route path="/loginpageman" element={<LoginPageMan />} />
        <Route path="/loginpagewai" element={<LoginPageWai />} />
        <Route path="/aboutuspage" element={<AboutUsPage />} />
        <Route path="/signuppage" element={<SignUpPage />} />
        <Route path="/dashcust" element={<DashCust />} />
        <Route path="/dashwai" element={<DashWai />} />
        <Route path="/dashman" element={<DashMan />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/tableres1" element={<TableRes1 />} />
        <Route path="/resreser1" element={<ResReser1 />} />
        <Route path="/pay1" element={<Pay1 />} />
        <Route path="/contactuspage" element={<ContactUs />} />
        <Route path="/menu1" element={<Menu1 />} />
        <Route path="/creditdebit" element={<CreditDebit />} />
        <Route path="/cash" element={<Cash />} />
      </Routes>
    </Router>
  );
};

export default App;
