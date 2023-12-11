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
    '/account/signin',
    params
  );

  return data;
};

// 인증 코드 요청
export async function postRequestEmail(email: string): Promise<void> {
  await clint.post(
    '/account/email/r',
    { email }
  );
};

// 인증 코드 확인
export async function postVerifyAuthCode(params: VerifyAuthCode): Promise<void> {
  await clint.post(
    '/account/email/verify',
    params
  );
};

// 회원가입
export async function postSignUp(params: JoinState): Promise<void> {
  await clint.post(
    '/account/signup',
    params
  );
};
