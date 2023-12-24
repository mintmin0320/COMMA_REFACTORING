import { useMutation } from '@tanstack/react-query';
import { useNavigate } from "react-router-dom";
import { AxiosError } from 'axios';

import {
  postSignIn,
  postRequestEmail,
  postVerifyAuthCode,
  postSignUp,
  postSignOut
} from './api';

import { handleError } from '../../utils/error/handleError';
import renderToast from '../../lib/toast';

import {
  JoinState,
  LoginState,
  TokenResponseBody,
  VerifyAuthCode
} from '../../types/auth';

// 로그인
function useSignIn() {
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
    onError: (error) => {
      handleError({
        error,
        message: '로그인 실패!'
      });
    }
  });
};

// 로그아웃
function useSignOut() {
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
    onError: (error) => {
      handleError({
        error,
        message: '로그인아웃 실패!'
      });
    }
  });
};

// 이메일 인증 요청
function useRequestEmail() {
  return useMutation<void, AxiosError, string>({
    mutationFn: (email) => postRequestEmail(email),
    onSuccess: () => {
      renderToast({
        type: 'success',
        message: '이메일로 인증코드를 전송했습니다.'
      });
    },
    onError: (error: AxiosError) => {
      handleError({
        error,
        message: '인정번호 요청 실패!'
      });
    }
  });
};

// 인증 코드 확인
function useVerifyAuthCode() {
  return useMutation<void, AxiosError, VerifyAuthCode>({
    mutationFn: (params) => postVerifyAuthCode(params),
    onSuccess: () => {
      renderToast({
        type: 'success',
        message: '인증코드가 확인되었습니다.'
      });
    },
    onError: (error: AxiosError) => {
      handleError({
        error,
        message: '잘못된 인증번호입니다!'
      });
    }
  });
};

// 회원가입
function useSignUp() {
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
    onError: (error: AxiosError) => {
      handleError({
        error,
        message: '회원가입 실패!'
      });
    }
  });
};

export {
  useSignIn,
  useRequestEmail,
  useVerifyAuthCode,
  useSignUp,
  useSignOut,
};