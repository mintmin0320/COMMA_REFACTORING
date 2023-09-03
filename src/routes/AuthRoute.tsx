import { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import LoginPage from '../pages/auth/LoginPage';
import JoinPage from '../pages/auth/JoinPage';

const AuthRoute = () => {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = location.pathname === '/auth' ? '인증 - COMMA' : 'COMMA';
    document.title = pageTitle;
  }, [location]);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/join" element={<JoinPage />} />
    </Routes>
  );
};

export default AuthRoute;