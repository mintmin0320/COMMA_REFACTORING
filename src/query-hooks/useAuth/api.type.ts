import { AxiosError } from 'axios';
import { UseMutationResult } from 'react-query';

// 회원가입 form-data 타입
export interface JoinState {
  accountId: string;
  password: string;
  name: string;
  email: string;
  major: string;
  status: string;
  academicNumber: string;
}

// 로그인 form-data 타입
export interface LoginState {
  accountId: string;
  password: string;
}

// 이메일 인증 데이터 타입
export interface VerifyAuthCode {
  email: string,
  code: string
}

// hook 타입
export type JoinFormProps = {
  reqAuthCode: UseMutationResult<number, AxiosError, string>
  verifyAuthCode: UseMutationResult<number, AxiosError, VerifyAuthCode>
  signUp: UseMutationResult<number, AxiosError, JoinState>
};

export type LoginFormProps = {
  signIn: UseMutationResult<number, AxiosError, LoginState>
};
