import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from '../pages/auth/LoginPage';
import JoinPage from '../pages/auth/JoinPage';

export default function AuthRoute() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/join" element={<JoinPage />} />
    </Routes>
  );
};