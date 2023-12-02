import { JoinState, VerifyAuthCode } from './api.type';
import { LoginState } from '../../types/auth';
import axiosInstance from '../../lib/axiosInstance';

interface TokenResponse {
  access_token: string;
  refresh_token: string;
}

// 로그인
export async function postSignIn(params: LoginState): Promise<TokenResponse> {
  const { data } = await axiosInstance.post<TokenResponse>(
    '/account/signin',
    params
  );

  return data;
};

// 회원가입
export async function fetchSignUp(params: JoinState) {
  const { status } = await axiosInstance.post(
    '/account/signup',
    params
  );

  return status;
};

// 인증 코드 요청
export async function fetchAuthCode(email: string) {
  const { status } = await axiosInstance.post(
    '/account/email/r',
    { email }
  );

  return status;
};

export async function fetchVerifyAuthCode(params: VerifyAuthCode) {
  const { status } = await axiosInstance.post(
    '/account/email/verify',
    params
  );

  return status;
};