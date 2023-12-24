import {
  JoinState,
  LoginState,
  TokenResponse,
  TokenResponseBody,
  VerifyAuthCode
} from '../../types/auth';

import clint from '../../lib/client';

// 로그인
export async function postSignIn(params: LoginState): Promise<TokenResponseBody> {
  const { data } = await clint.post<TokenResponse>(
    '/account/signin',
    params
  );

  return data.body;
};

// 로그아웃
export async function postSignOut(): Promise<void> {
  await clint.post<void>(
    '/account/signout'
  );
};

// 인증 코드 요청
export async function postRequestEmail(email: string): Promise<void> {
  await clint.post<void>(
    '/account/email/verify/request',
    { email }
  );
};

// 인증 코드 확인
export async function postVerifyAuthCode(params: VerifyAuthCode): Promise<void> {
  await clint.post<void>(
    '/account/email/verify',
    params
  );
};

// 회원가입
export async function postSignUp(params: JoinState): Promise<void> {
  await clint.post<void>(
    '/account/signup',
    params
  );
};
