import { useMutation } from '@tanstack/react-query';
import { TokenResponse, TokenResponseBody } from '../../types/auth';
import { AxiosError } from 'axios';

import client from '../../lib/client';

async function postRequestToken(refreshToken: string): Promise<TokenResponseBody> {
  const { data } = await client.post<TokenResponse>(
    '/account/refresh-token',
    { refreshToken }
  );

  return data.body;
};

export function useRequestToken() {
  return useMutation<TokenResponseBody, AxiosError, string>({
    mutationFn: (refreshToken) => postRequestToken(refreshToken),
    onSuccess: ({ access_token }) => {
      localStorage.setItem('access_token', access_token);
    },
  });
};