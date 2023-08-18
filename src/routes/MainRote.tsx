import { Routes, Route } from "react-router-dom";

import {
  HomeRoute,
  AuthRoute,
  NoticeRoute,
  ProductRoute,
  CommunityRoute
} from './index'

const MainRoute = () => {
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
        path="/auth/*"
        element={
          // <UnPrivateRoute>
          <AuthRoute />
          // </UnPrivateRoute>
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
        path="/product/*"
        element={
          // <PrivateRoute>
          <ProductRoute />
          // </PrivateRoute>
        }
      />
      <Route
        path="/community/*"
        element={
          // <PrivateRoute>
          <CommunityRoute />
          // </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default MainRoute;