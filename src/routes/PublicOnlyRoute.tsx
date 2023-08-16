import { Fragment } from 'react';
import { Navigate } from 'react-router-dom';

import { getItem } from '../components/utils/localStorage';

const PublicOnlyRoute = ({ children }: { children: React.ReactNode }) => {
  const isLogIn = getItem('userId', null);

  return !isLogIn ? <Fragment>{children}</Fragment> : <Navigate to="/" />
};

export default PublicOnlyRoute;