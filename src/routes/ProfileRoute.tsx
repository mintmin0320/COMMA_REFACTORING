import { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import ProfilePage from '../pages/userProfile/ProfilePage';

const ProfileRoute = () => {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = location.pathname === '/profile' ? '마이페이지 - COMMA' : 'COMMA';
    document.title = pageTitle;
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<ProfilePage />} />
    </Routes>
  );
};

export default ProfileRoute