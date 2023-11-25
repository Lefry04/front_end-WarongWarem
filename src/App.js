// App.js
import "./App.css";
import React, {useState} from 'react';
import FrontPage from './FrontPage';
import LoginPage from "./LoginPage-1";

const App = () => {

  const [currentPage, setCurrentPage] = useState('frontpage');

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {currentPage === 'frontpage' && <FrontPage changePage={changePage} />}
      {currentPage === 'login' && <LoginPage changePage={changePage} />}
    </div>
  );
};

export default App;
