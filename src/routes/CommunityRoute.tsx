import { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import CommunityPage from '../pages/community/CommunityPage';

const CommunityRoute = () => {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = location.pathname === '/community' ? '커뮤니티 - COMMA' : 'COMMA';
    document.title = pageTitle;
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<CommunityPage />} />
    </Routes>
  );
};

export default CommunityRoute;