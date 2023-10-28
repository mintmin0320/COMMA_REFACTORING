import { useMutation } from 'react-query';
import { AxiosError } from 'axios';

import { fetchSignIn } from './api';

import { LoginState } from './api.type';

import Toast from '../../components/common/Toast';

const toast = Toast();

type SignInResponse = {
  msg: string;
};

function useSignIn() {
  return useMutation<
    SignInResponse,
    AxiosError,
    LoginState
  >(({ accountId, password }) =>
    fetchSignIn({ accountId, password }), {
    onSuccess: (data: SignInResponse) => {
      toast.success(`${data.msg} 🎉`);
    },
    onError: (error: AxiosError) => {
      /* 에러 핸들러 추가 필요 */
      toast.error(error.message);
    }
  });
};

export { useSignIn };