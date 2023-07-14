import React from "react";
import { Routes, Route } from "react-router-dom";

import NoticePage from '../pages/notice/NoticePage';

export default function NoticeRouter() {
  return (
    <Routes>
      <Route path="/" element={<NoticePage />} />
    </Routes>
  );
};