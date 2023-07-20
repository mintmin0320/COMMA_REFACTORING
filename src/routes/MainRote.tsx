import { Routes, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import NoticeRoute from './NoticeRoute';
import AuthRoute from './AuthRoute';
import UnPrivateRoute from './UnProtected';

export default function MainRoute() {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <PrivateRoute>
            <NoticeRoute />
          </PrivateRoute>
        }
      />
      <Route
        path="/auth/*"
        element={
          <UnPrivateRoute>
            <AuthRoute />
          </UnPrivateRoute>
        }
      />
    </Routes>
  );
};