import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { VerifyAuthCode } from '../types/auth';

import client from '../lib/client';
import renderToast from '../lib/toast';

async function postVerifyAuthCode(params: VerifyAuthCode): Promise<void> {
  await client.post<void>(
    '/account/email/verify',
    params
  );
};

export function useVerifyAuthCode() {
  return useMutation<void, AxiosError, VerifyAuthCode>({
    mutationFn: (params) => postVerifyAuthCode(params),
    onSuccess: () => {
      renderToast({
        type: 'success',
        message: '인증코드가 확인되었습니다.'
      });
    },
    onError: () => {
      renderToast({
        type: 'error',
        message: '인증코드 확인 실패'
      });
    }
  });
};