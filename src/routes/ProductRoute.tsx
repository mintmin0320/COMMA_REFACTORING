import { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import ProductPage from '../pages/product/ProductPage';

const ProductRoute = () => {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = location.pathname === '/product' ? '실습재료 - COMMA' : 'COMMA';
    document.title = pageTitle;
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<ProductPage />} />
    </Routes>
  );
};

export default ProductRoute;