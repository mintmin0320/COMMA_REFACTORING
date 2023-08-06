import { Routes, Route } from "react-router-dom";

import PrivateRoute from './PrivateRoute';
import UnPrivateRoute from './UnProtected';
import NoticeRoute from './NoticeRoute';
import AuthRoute from './AuthRoute';
import HomeRoute from './HomeRoute';

export default function MainRoute() {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          // <PrivateRoute>
          <HomeRoute />
          // </PrivateRoute>
        }
      />
      <Route
        path="/notice/*"
        element={
          // <PrivateRoute>
          <NoticeRoute />
          // </PrivateRoute>
        }
      />
      <Route
        path="/auth/*"
        element={
          // <UnPrivateRoute>
          <AuthRoute />
          // </UnPrivateRoute>
        }
      />
    </Routes>
  );
};