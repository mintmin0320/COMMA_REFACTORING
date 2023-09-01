import { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import AdminPage from '../pages/admin/AdminPage';

const AdminRoute = () => {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = location.pathname === '/admin' ? '관리자 - COMMA' : 'COMMA';
    document.title = pageTitle;
  }, [location]);

  return (
    <Routes>
      <Route path="/login" element={<AdminPage />} />
    </Routes>
  );
};

export default AdminRoute;