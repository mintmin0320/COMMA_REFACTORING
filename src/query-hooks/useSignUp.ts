import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

import { JoinState } from '../types/auth';

import client from '../lib/client';
import renderToast from '../lib/toast';

async function postSignUp(params: JoinState): Promise<void> {
  await client.post<void>(
    '/account/signup',
    params
  );
};

export function useSignUp() {
  const navigate = useNavigate();
  return useMutation<void, AxiosError, JoinState>({
    mutationFn: (params) => postSignUp(params),
    onSuccess: () => {
      renderToast({
        type: 'success',
        message: '회원가입이 완료되었습니다.'
      });

      navigate('/auth/login');
    },
    onError: () => {
      renderToast({
        type: 'error',
        message: '회원가입 실패'
      });
    }
  });
};