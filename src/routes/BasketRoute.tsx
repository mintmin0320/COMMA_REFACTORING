
import { Routes, Route } from "react-router-dom";

import BasketPage from '../pages/basket/BasketPage';

const BasketRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<BasketPage />} />
    </Routes>
  );
};

export default BasketRoute;