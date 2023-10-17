import { UseMutateFunction } from 'react-query';

export interface JoinState {
  accountId: string;
  password: string;
  name: string;
  email: string;
  major: string;
  status: string;
  academicNumber: string;
}

export interface LoginState {
  accountId: string;
  password: string;
}

export interface VerifyAuthCode {
  email: string | null,
  code: string | null
}

export type JoinFormProps = {
  reqAuthCode: UseMutateFunction<void, unknown, string | null, unknown>
  verifyAuthCode: UseMutateFunction<void, unknown, VerifyAuthCode, unknown>;
  signUp: UseMutateFunction<void, unknown, JoinState, unknown>
};
