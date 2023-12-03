import { useMutation } from '@tanstack/react-query';
import { useNavigate } from "react-router-dom";
import { AxiosError } from 'axios';

import {
  postSignIn,
  postRequestEmail,
  postVerifyAuthCode,
  postSignUp
} from './api';

import { handleError } from '../../utils/error/handleError';
import renderToast from '../../lib/toast';

import { JoinState, LoginState, VerifyAuthCode } from '../../types/auth';
import { TokenResponse } from './api.type';

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
        type: 'error',
        message: '로그인을 실패했습니다. 다시 시도해 주세요.',
      });
    }
  });
};

// 이메일 인증 요청
function useRequestEmail() {
  return useMutation<number, AxiosError, string>({
    mutationFn: (email) => postRequestEmail(email),
    onSuccess: () => {
      renderToast({
        type: 'success',
        message: '이메일로 인증코드를 전송했습니다.',
      });
    },
    onError: (error: AxiosError) => {
      handleError(error);
    }
  });
};

// 인증 코드 확인
function useVerifyAuthCode() {
  return useMutation<number, AxiosError, VerifyAuthCode>({
    mutationFn: (params) => postVerifyAuthCode(params),
    onSuccess: () => {
      renderToast({
        type: 'success',
        message: '인증코드가 확인되었습니다.',
      });
    },
    onError: (error: AxiosError) => {
      handleError(error);
    }
  });
};

// // 회원가입
function useSignUp() {
  return useMutation<number, AxiosError, JoinState>({
    mutationFn: (params) => postSignUp(params),
    onSuccess: () => {
      renderToast({
        type: 'success',
        message: '회원가입이 완료되었습니다.',
      });
    },
    onError: (error: AxiosError) => {
      renderToast({
        type: 'error',
        message: '회원가입 중 오류가 발생했습니다.',
      });
    }
  });
};

export {
  useSignIn,
  useRequestEmail,
  useVerifyAuthCode,
  useSignUp
};