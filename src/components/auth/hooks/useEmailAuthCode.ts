/*
  이메일 코드 인증 관련 hook
*/

import { UseMutateFunction, useMutation } from 'react-query';
import axios from 'axios';

import Toast from '../../common/Toast';

// constants
import { REQUEST_EMAIL_AUTH, VERIFY_AUTH_CODE } from './constants';

interface VerifyAuthCode {
  email: string | null,
  code: string | null
}

const toast = Toast();

// 인증 코드 요청
async function fetchAuthCode(email: string | null) {
  await axios.post(REQUEST_EMAIL_AUTH, { email });
};

export function useReqAuthCode(): UseMutateFunction<
  void,
  unknown,
  string | null,
  unknown
> {
  const { mutate } = useMutation(fetchAuthCode, {
    onSuccess: () => {
      toast.success('이메일 코드 요청 성공');
    },
  });

  return mutate;
};

// 인증 코드 확인
async function fetchVerifyAuthCode(data: VerifyAuthCode) {
  await axios.post(VERIFY_AUTH_CODE, data);
};

export function useVerifyAuthCode(): UseMutateFunction<
  void,
  unknown,
  VerifyAuthCode,
  unknown
> {
  const { mutate } = useMutation(fetchVerifyAuthCode, {
    onSuccess: () => {
      toast.success('인증코드 확인 완료');
    },
  });

  return mutate;
};