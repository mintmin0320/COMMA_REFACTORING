import { Routes, Route } from "react-router-dom";

import NoticePage from '../pages/notice/NoticePage';

const NoticeRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<NoticePage />} />
    </Routes>
  );
};

export default NoticeRoute;