/*
  회원가입, 로그인 관련 hook
*/

import { useNavigate } from 'react-router-dom';
import { UseMutateFunction, useMutation } from 'react-query';
import axios from 'axios';

import Toast from '../../common/Toast';

// constants
import { LOGIN, JOIN } from './constants';

// types
import { JoinState, LoginState } from '../../../types/auth';

const toast = Toast();

// 로그인
async function fetchAuthCode(data: LoginState) {
  await axios.post(LOGIN, data);
};

export function useSignIn(): UseMutateFunction<
  void,
  unknown,
  LoginState,
  unknown
> {
  const navigate = useNavigate();
  const { mutate } = useMutation(fetchAuthCode, {
    onSuccess: () => {
      toast.success('환영합니다! 🎉');
      navigate('/');
    },
  });

  return mutate;
};

// 회원가입
async function fetchVerifyAuthCode(data: JoinState) {
  await axios.post(JOIN, data);
};

export function useSignUp(): UseMutateFunction<
  void,
  unknown,
  JoinState,
  unknown
> {
  const navigate = useNavigate();
  const { mutate } = useMutation(fetchVerifyAuthCode, {
    onSuccess: () => {
      toast.success('인증코드 확인 완료');
      navigate('/auth/login');
    },
  });

  return mutate;
};
