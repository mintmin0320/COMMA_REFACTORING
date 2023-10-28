import { useMutation } from 'react-query';
import { AxiosError } from 'axios';

import { fetchSignIn, fetchSignUp } from './api';

import { JoinState, LoginState } from './api.type';

import Toast from '../../components/common/Toast';

const toast = Toast();

// 로그인
function useSignIn() {
  return useMutation<
    string,
    AxiosError,
    LoginState
  >(({ accountId, password }) => fetchSignIn({ accountId, password }),
    {
      onSuccess: () => {
        toast.success('Welcome to COMMA! 🎉');
      },
      onError: (error: AxiosError) => {
        /* 에러 핸들러 추가 필요 */
        toast.error(error.message);
      }
    });
};

// 회원가입
function useSignUp() {
  return useMutation<
    number,
    AxiosError,
    JoinState
  >((params) => fetchSignUp(params),
    {
      onSuccess: () => {
        toast.success("가입이 완료되었습니다!");
      },
      onError: (error: AxiosError) => {
        toast.error(error.message);
      }
    });
};

export { useSignIn, useSignUp };