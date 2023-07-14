import { Routes, Route } from "react-router-dom";

import NoticeRouter from './NoticeRouter';
import AuthRouter from './AuthRouter';

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/*" element={<NoticeRouter />} />
      <Route path="/auth/*" element={<AuthRouter />} />
    </Routes>
  );
};