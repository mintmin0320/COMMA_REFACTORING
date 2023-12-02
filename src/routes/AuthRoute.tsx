import { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import LoginPage from '../pages/auth/loginPage/LoginPage';
import JoinPage from '../pages/auth/joinPage/JoinPage';

const AuthRoute = () => {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = location.pathname === '/auth/login' ? '로그인 - COMMA' : '회원가입 - COMMA';
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