import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

const App = () => {
  
  return (
    <Router>
      <ScrollToTop />
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
      </Routes>
    </Router>
  );
};

export default App;
