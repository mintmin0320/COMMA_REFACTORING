import axios from 'axios';

import { LoginState } from './api.type';

export async function fetchSignIn(params: LoginState) {
  const { data } = await axios.post(
    '/account/signin',
    params,
  );

  return data;
};