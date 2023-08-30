import { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import NoticePage from '../pages/notice/NoticePage';

const NoticeRoute = () => {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = location.pathname === '/notice' ? '공지사항 - COMMA' : 'COMMA';
    document.title = pageTitle;
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<NoticePage />} />
    </Routes>
  );
};

export default NoticeRoute;