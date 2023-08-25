import { Routes, Route } from "react-router-dom";

import ProfilePage from '../pages/userProfile/ProfilePage';

const ProfileRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ProfilePage />} />
    </Routes>
  );
};

export default ProfileRoute