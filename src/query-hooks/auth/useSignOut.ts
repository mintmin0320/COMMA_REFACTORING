import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';

import client from '../../lib/client';
import renderToast from '../../lib/toast';

async function postSignOut(): Promise<void> {
  await client.post<void>(
    '/account/signout'
  );
};

export function useSignOut() {
  const navigate = useNavigate();
  return useMutation<void, AxiosError, void>({
    mutationFn: () => postSignOut(),
    onSuccess: () => {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');

      renderToast({
        type: 'success',
        message: '로그아웃 되었습니다.'
      });

      navigate('/auth/login');
    },
    onError: () => {
      renderToast({
        type: 'error',
        message: '로그아웃 실패'
      });
    }
  });
};