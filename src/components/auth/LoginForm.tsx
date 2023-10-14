/*
  로그인
  - 로그인
  - 회원가입 페이지 이동
*/

import { useCallback, useEffect, useState } from 'react';

// common
import Toast from '../common/Toast';

// library-CSS, icons
import { HiUser, HiMiniLockClosed } from "react-icons/hi2";

// types
import { LoginState } from '../../types/auth';

// hooks
import { useSignIn } from './hooks/useAuth';

// styles
import * as S from './LoginForm.style';

export default function LoginForm() {
  const toast = Toast();
  const signIn = useSignIn();

  const [loginForm, setLoginForm] = useState<LoginState>({
    accountId: '',
    password: '',
  });

  useEffect(() => {
    toast.info('Welcome to COMMA 👋');
  }, []);

  const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginForm((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }, []);

  // 로그인
  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      accountId: loginForm.accountId,
      password: loginForm.password,
    };

    signIn(data);
  };

  return (
    <S.LogInContainer>
      <S.Wrap>
        <S.Form onSubmit={(e) => handleOnSubmit(e)}>
          <S.InputBox style={{ borderBottom: 'none' }}>
            <S.IconBox>
              <HiUser size='22px' />
            </S.IconBox>
            <S.Input
              type='text'
              name='accountId'
              value={loginForm.accountId}
              onChange={(e) => handleOnChange(e)}
              placeholder='ID'
              required
            />
          </S.InputBox>
          <S.InputBox>
            <S.IconBox>
              <HiMiniLockClosed size='22px' />
            </S.IconBox>
            <S.Input
              type='password'
              name='password'
              value={loginForm.password}
              onChange={(e) => handleOnChange(e)}
              placeholder='Password'
              required
            />
          </S.InputBox>
          <S.Button type='submit'>
            로그인
          </S.Button>
        </S.Form>
        <S.Button
          style={{ width: '55%', background: '#e5e1e1', color: '#000' }}
        >
          회원가입
        </S.Button>
      </S.Wrap>
    </S.LogInContainer>
  );
};
