import { Navigate } from 'react-router-dom';

import { getItem } from '../components/utils/localStorage';

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  const isLogIn = getItem('userId', null);

  return isLogIn ? children : <Navigate to="/auth/login" />
};
