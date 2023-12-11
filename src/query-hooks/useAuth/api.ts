import {
  JoinState,
  LoginState,
  TokenResponse,
  VerifyAuthCode
} from '../../types/auth';

import clint from '../../lib/client';

// 로그인
export async function postSignIn(params: LoginState): Promise<TokenResponse> {
  const { data } = await clint.post<TokenResponse>(
    '/users/sign-in',
    params
  );

  return data;
};

// 인증 코드 요청
export async function postRequestEmail(email: string): Promise<number> {
  const { status } = await clint.post(
    'users/email-authentication',
    { email }
  );

  return status;
};

// 인증 코드 확인
export async function postVerifyAuthCode(params: VerifyAuthCode): Promise<number> {
  const { status } = await clint.post(
    '/account/email/verify',
    params
  );

  return status;
};

// 회원가입
export async function postSignUp(params: JoinState): Promise<number> {
  const { status } = await clint.post(
    '/account/signup',
    params
  );

  return status;
};
