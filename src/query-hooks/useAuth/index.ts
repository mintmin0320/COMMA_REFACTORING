import { useMutation } from 'react-query';
import { AxiosError } from 'axios';

import { fetchSignIn } from './api';

import { LoginState } from './api.type';

import Toast from '../../components/common/Toast';

const toast = Toast();

function useSignIn() {
  return useMutation<
    void,
    AxiosError,
    LoginState
  >(({ accountId, password }) =>
    fetchSignIn({ accountId, password }), {
    onSuccess: () => {
      toast.success('환영합니다! 🎉');
    },
    onError: (error: AxiosError) => {
      /* 에러 핸들러 추가 필요 */
      toast.error(error.message);
    }
  });
};

export { useSignIn };