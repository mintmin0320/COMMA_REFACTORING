import { Routes, Route } from "react-router-dom";

import NoticePage from '../pages/notice/NoticePage';

export default function NoticeRoute() {
  return (
    <Routes>
      <Route path="/" element={<NoticePage />} />
    </Routes>
  );
};