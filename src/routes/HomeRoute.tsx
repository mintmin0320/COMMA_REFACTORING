import { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import HomePage from '../pages/home/HomePage';

const HomeRoute = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      document.title = 'COMMA';
    }
  }, [location]);


  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default HomeRoute;