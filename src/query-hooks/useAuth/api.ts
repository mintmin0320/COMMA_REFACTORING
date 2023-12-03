import { TokenResponse } from './api.type';
import { JoinState, LoginState, VerifyAuthCode } from '../../types/auth';

import axiosInstance from '../../lib/axiosInstance';

// 로그인
export async function postSignIn(params: LoginState): Promise<TokenResponse> {
  const { data } = await axiosInstance.post<TokenResponse>(
    '/account/signin',
    params
  );

  return data;
};

// 인증 코드 요청
export async function postRequestEmail(email: string): Promise<number> {
  const { status } = await axiosInstance.post(
    'users/email-authentication',
    { email }
  );

  return status;
};

// 인증 코드 확인
export async function postVerifyAuthCode(params: VerifyAuthCode): Promise<number> {
  const { status } = await axiosInstance.post(
    '/account/email/verify',
    params
  );

  return status;
};

// 회원가입
export async function postSignUp(params: JoinState): Promise<number> {
  const { status } = await axiosInstance.post(
    '/account/signup',
    params
  );

  return status;
};
