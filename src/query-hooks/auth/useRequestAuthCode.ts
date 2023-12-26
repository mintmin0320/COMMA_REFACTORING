import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import client from '../../lib/client';
import renderToast from '../../lib/toast';

async function postRequestAuthCode(email: string): Promise<void> {
  await client.post<void>(
    '/account/email/verify/request',
    { email }
  );
};

export function useRequestAuthCode() {
  return useMutation<void, AxiosError, string>({
    mutationFn: (email) => postRequestAuthCode(email),
    onSuccess: () => {
      renderToast({
        type: 'success',
        message: '이메일로 인증코드를 전송했습니다.'
      });
    },
    onError: (error: AxiosError) => {
      renderToast({
        type: 'error',
        message: '인증코드 요청 실패'
      });
    }
  });
};