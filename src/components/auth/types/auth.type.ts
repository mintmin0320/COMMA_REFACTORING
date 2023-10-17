import { UseMutateFunction } from 'react-query';

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
  email: string | null,
  code: string | null
}

// hook 타입
export type JoinFormProps = {
  reqAuthCode: UseMutateFunction<void, unknown, string | null, unknown>
  verifyAuthCode: UseMutateFunction<void, unknown, VerifyAuthCode, unknown>;
  signUp: UseMutateFunction<void, unknown, JoinState, unknown>
};
