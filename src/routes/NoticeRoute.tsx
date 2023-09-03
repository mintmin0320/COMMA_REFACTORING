import { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import NoticePage from '../pages/notice/NoticePage';
import NoticeDetailPage from '../pages/notice/NoticeDetailPage';

const NoticeRoute = () => {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = location.pathname === '/notice' ? '공지사항 - COMMA' : 'COMMA';
    document.title = pageTitle;
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<NoticePage />} />
      <Route path='/:id' element={<NoticeDetailPage />} />
    </Routes>
  );
};

export default NoticeRoute;