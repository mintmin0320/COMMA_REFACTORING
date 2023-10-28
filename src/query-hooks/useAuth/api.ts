import axios from 'axios';

import { JoinState, LoginState } from './api.type';

export async function fetchSignIn(params: LoginState) {
  const { data } = await axios.post(
    '/account/signin',
    params
  );

  return data;
};

export async function fetchSignUp(params: JoinState) {
  const { status } = await axios.post(
    '/account/signup',
    params
  );

  return status;
};