import React from "react";
import { Routes, Route } from "react-router-dom";

import NoticePage from '../pages/notice/NoticePage';
import PrivateRouter from './PrivateRouter';

export default function NoticeRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRouter>
            <NoticePage />
          </PrivateRouter>
        } />
    </Routes>
  );
};