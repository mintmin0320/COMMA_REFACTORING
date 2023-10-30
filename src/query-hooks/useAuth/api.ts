import axios from 'axios';

import { JoinState, LoginState, VerifyAuthCode } from './api.type';

// 로그인
export async function fetchSignIn(params: LoginState) {
  const { status } = await axios.post(
    '/account/signin',
    params
  );

  return status;
};

// 회원가입
export async function fetchSignUp(params: JoinState) {
  const { status } = await axios.post(
    '/account/signup',
    params
  );

  return status;
};

// 인증 코드 요청
export async function fetchAuthCode(email: string) {
  const { status } = await axios.post(
    '/account/email/r',
    { email }
  );

  return status;
};

export async function fetchVerifyAuthCode(params: VerifyAuthCode) {
  const { status } = await axios.post(
    '/account/email/verify',
    params
  );

  return status;
};