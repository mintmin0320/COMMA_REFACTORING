import axios from 'axios';

import { LoginState } from './api.type';

export async function fetchSignIn(params: LoginState) {
  await axios.post(
    '/account/signin',
    params
  );
};