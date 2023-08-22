import { Routes, Route } from "react-router-dom";

import CommunityPage from '../pages/community/CommunityPage';

const CommunityRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<CommunityPage />} />
    </Routes>
  );
};

export default CommunityRoute;