import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import { ReservationProvider } from "./ReservationContext";
import ScrollToTop from './ScrollToTop';
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
import History from "./History";
import Waiter from "./Waiter";
import ContactUs from "./ContactUs";
import Menu1 from "./Menu1";
import Menu2 from "./Menu2";
import CreditDebit from "./CreditDebit";
import ResultDebit from "./ResultDebit";
import Cash from "./Cash";
import ResultCash from "./ResultCash";
import ReportDaily from "./ReportDaily";
import Monitoring from "./Monitoring";
import ManHisto from "./ManHisto";
import BigReser from "./BigReser";
import Feedback from "./Feedback";
import Feedback2 from "./Feedback2";
import FeedbackAC from "./FeedbackAC";
import Feedbackresult from "./Feedbackresult";
import Reschedule from "./Reschedule";

import { UserIdProvider } from "./UserIdContext";

const App = () => {

  return (
    <Router>
      <ScrollToTop />
      {/* <ReservationProvider> */}
        <UserIdProvider>
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
        <Route path="/history" element={<History />} />
        <Route path="/waiter" element={<Waiter />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/menu1" element={<Menu1 />} />
        <Route path="/menu2" element={<Menu2 />} />
        <Route path="/creditdebit" element={<CreditDebit />} />
        <Route path="/resultdebit" element={<ResultDebit />} />
        <Route path="/cash" element={<Cash />} />
        <Route path="/resultcash" element={<ResultCash />} />
        <Route path="/reportdaily" element={<ReportDaily/>} />
        <Route path="/monitoring" element={<Monitoring />} /> 
        <Route path="/manhisto" element={<ManHisto />} />
        <Route path="/bigreser" element={<BigReser />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/feedback2" element={<Feedback2 />} />
        <Route path="/feedbackAC" element={<FeedbackAC />} />
        <Route path="/feedbackresult" element={<Feedbackresult />} />
        <Route path="/reschedule" element={<Reschedule />} />
      </Routes>
      </UserIdProvider>
    </Router>
  );
};

export default App;