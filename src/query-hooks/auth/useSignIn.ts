import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import {
  LoginState,
  TokenResponse,
  TokenResponseBody
} from '../../types/auth';

import renderToast from '../../lib/toast';
import client from '../../lib/client';

async function postSignIn(params: LoginState): Promise<TokenResponseBody> {
  const { data } = await client.post<TokenResponse>(
    '/account/signin',
    params
  );

  return data.body;
};

export function useSignIn() {
  const navigate = useNavigate();
  return useMutation<
    TokenResponseBody,
    AxiosError,
    LoginState
  >({
    mutationFn: (params) => postSignIn(params),
    onSuccess: ({ access_token, refresh_token }) => {
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);

      renderToast({
        type: 'success',
        message: 'Welcome to COMMA! 🎉'
      });

      navigate('/');
    },
    onError: () => {
      renderToast({
        type: 'error',
        message: '로그인 실패'
      });
    }
  });
};