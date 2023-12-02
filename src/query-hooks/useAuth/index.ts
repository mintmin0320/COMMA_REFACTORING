import { useMutation } from '@tanstack/react-query';
import { useNavigate } from "react-router-dom";
import { AxiosError } from 'axios';

import {
  postSignIn,
  fetchAuthCode,
  fetchSignUp,
  fetchVerifyAuthCode
} from './api';

import { handleError } from '../../utils/error/handleError';

import { LoginState } from '../../types/auth';
import renderToast from '../../lib/toast';
interface TokenResponse {
  access_token: string;
  refresh_token: string;
}
// 로그인
function useSignIn() {
  const navigate = useNavigate();

  return useMutation<
    TokenResponse,
    AxiosError,
    LoginState
  >({
    mutationFn: (params) => postSignIn(params),
    onSuccess: () => {
      renderToast({
        type: 'success',
        message: 'Welcome to COMMA! 🎉',
      });

      navigate('/');
    },
    onError: () => {
      renderToast({
        type: 'loading',
        message: '로그인을 실패했습니다. 다시 시도해 주세요.',
      });
    }
  });
};

// // 회원가입
// function useSignUp() {
//   return useMutation<
//     number,
//     AxiosError,
//     JoinState
//   >((params) => fetchSignUp(params),
//     {
//       onSuccess: () => {
//         toast.success("가입이 완료되었습니다!");
//       },
//       onError: (error: AxiosError) => {
//         toast.error(error.message);
//       }
//     });
// };

// // 인증 코드 요청
// function useReqAuthCode() {
//   return useMutation<
//     number,
//     AxiosError,
//     string
//   >((email) => fetchAuthCode(email),
//     {
//       onSuccess: () => {
//         toast.success("인증 코드를 요청했습니다.");
//       },
//       onError: (error: AxiosError) => {
//         toast.error(error.message);
//       }
//     });
// };

// // 인증 코드 확인
// function useVerifyAuthCode() {
//   return useMutation<
//     number,
//     AxiosError,
//     VerifyAuthCode
//   >((params) => fetchVerifyAuthCode(params),
//     {
//       onError: (error: AxiosError) => {
//         toast.error(error.message);
//       }
//     });
// };

export { useSignIn };