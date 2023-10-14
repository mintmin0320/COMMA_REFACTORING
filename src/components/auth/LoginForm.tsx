/*
  로그인 페이지
*/

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// common
import Toast from '../common/Toast';

// library-CSS, icons
import { HiUser, HiMiniLockClosed } from "react-icons/hi2";

// types
import { LoginState } from '../../types/auth';

// hooks
import { useSignIn } from './hooks/useAuth';

// styles
const StyledLogInContainer = styled.section`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLogInBox = styled.div`
  width: 60%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #D8D8D8;
  border-radius: 12px;
  box-shadow: 2px 4px 30px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  width: 55%;
  height: 40%;
`;

const StyledInputFiled = styled.div`
  width: calc(100% - 4px);
  height: 40px;
  display: flex;
  border: solid 2px #d8d8d8;
  border-radius: 4px;
`;

const StyledIconBox = styled.div`
  width: 45px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: solid 2px #d8d8d8;
  border-radius: 4px;
`;

const Input = styled.input`
  width: calc(100% - 45px);
  height: 38px;
  font-size: 1.15em;
  border: none;
  border-radius: 4px;
`;

// 로그인 버튼
const LoginButton = styled.button`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  margin-top: 10px;
  font-size: 1em;
  background-color: #0064ff;
  color: #fff;
  cursor: pointer;
`;

const StyledLoginButton = styled.div`
  width: 75.8%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 10px 10px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 30%;
  height: 65%;
`;

// const StyledLoginBox = styled.div`
//   width: 100%;
//   height: 45%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   border-bottom: solid 1px black;
//   border: 1px #D9D8D7;
// `;

// const StyledInputBox = styled.div<{ $top?: string }>`
//   width: 75%;
//   height: 15%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-top: ${(props) => props.$top === 'top' ? '0px' : 'solid 2px #D9D8D7'};
//   border-bottom: solid 2px #D9D8D7;
//   border-left: solid 2px #D9D8D7;
//   border-right: solid 2px #D9D8D7;
// `;

const StyledJoinButton = styled.div`
  width: 75.8%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 10px 10px 10px 10px;
  cursor: pointer;
`;

const StyledBlock = styled.div`
  width: 75%;
  height: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-top: solid 1px #D9D8D7;
`;

const StyledMenuBox = styled.div`
  width: 75%;
  height: 15%;
  display: flex;
  justify-content: space-around;
`;

const StyledMenuLink = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color:  #A4A4A4;
  font-size: 14px;
`;

const StyledBannerBox = styled.div`
  width: 75%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 10px 10px;

  img {
    width: 40%;
    height: 80%;
  }
`;

const StyledBannerLink = styled(Link)`
	width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyleIdDomain = styled.div`
  width: 45%;
  height: 100%;
  color: #808080;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
`;

export default function LoginForm() {
  const toast = Toast();
  const signIn = useSignIn();

  const [loginForm, setLoginForm] = useState<LoginState>({
    accountId: '',
    password: '',
  });

  useEffect(() => {
    toast.info('웰컴~');
  }, []);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginForm((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

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
    <StyledLogInContainer>
      <StyledLogInBox>
        <Form onSubmit={(e) => handleOnSubmit(e)}>
          <StyledInputFiled style={{ borderBottom: 'none' }}>
            <StyledIconBox>
              <HiUser size='22px' />
            </StyledIconBox>
            <Input
              type='text'
              name='accountId'
              value={loginForm.accountId}
              onChange={(e) => handleOnChange(e)}
              required
            />
          </StyledInputFiled>
          <StyledInputFiled>
            <StyledIconBox>
              <HiMiniLockClosed size='22px' />
            </StyledIconBox>
            <Input
              type='password'
              name='password'
              value={loginForm.password}
              onChange={(e) => handleOnChange(e)}
              required
            />
          </StyledInputFiled>
          <LoginButton
            type='submit'
          >
            로그인
          </LoginButton>
        </Form>
        <LoginButton
          style={{ width: '55%', background: '#d8d8d8', color: '#000' }}
        >
          회원가입
        </LoginButton>
      </StyledLogInBox>
    </StyledLogInContainer>
  );
};
