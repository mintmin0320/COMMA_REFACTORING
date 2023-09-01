import { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import AdminUserManagementPage from '../pages/admin/AdminUserManagementPage';
import AdminOrderManagementPage from '../pages/admin/AdminOrderManagementPage';
import AdminAddProductPage from '../pages/admin/AdminAddProductPage';

const AdminRoute = () => {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = location.pathname === '/admin' ? '관리자 - COMMA' : 'COMMA';
    document.title = pageTitle;
  }, [location]);

  return (
    <Routes>
      <Route path="/user-info" element={<AdminUserManagementPage />} />
      <Route path="/order-list" element={<AdminOrderManagementPage />} />
      <Route path="/add-product" element={<AdminAddProductPage />} />
    </Routes>
  );
};

export default AdminRoute;