import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from '../pages/auth/LoginPage';
import JoinPage from '../pages/auth/JoinPage';

const AuthRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/join" element={<JoinPage />} />
    </Routes>
  );
};

export default AuthRoute;