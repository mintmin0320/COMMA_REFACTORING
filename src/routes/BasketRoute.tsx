import { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import BasketPage from '../pages/basket/BasketPage';

const BasketRoute = () => {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = location.pathname === '/basket' ? '장바구니 - COMMA' : 'COMMA';
    document.title = pageTitle;
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<BasketPage />} />
    </Routes>
  );
};

export default BasketRoute;