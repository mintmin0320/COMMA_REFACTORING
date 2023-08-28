/*
  로그인 페이지
  서버와 통신이 불가능 -> 비회원 접속 버튼
*/

import { useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

// common, util
import Input from '../common/Input';
import { setItem } from '../utils/localStorage';

// library-CSS, icons
import { HiUser, HiMiniLockClosed } from "react-icons/hi2";
import 'react-toastify/dist/ReactToastify.css';

// CSS
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  width: 35%;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px 10px 10px 10px;
  border: 2px solid #D8D8D8;
  box-shadow: 2px 4px 30px rgba(0, 0, 0, 0.22);
`;

const StyledLogoBox = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 30%;
  height: 65%;
`;

const StyledLoginBox = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: solid 1px black;
  border: 1px #D9D8D7;
`;

const StyledInputBox = styled.div<{ $top?: string }>`
  width: 75%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: ${(props) => props.$top === 'top' ? '0px' : 'solid 2px #D9D8D7'};
  border-bottom: solid 2px #D9D8D7;
  border-left: solid 2px #D9D8D7;
  border-right: solid 2px #D9D8D7;
`;

const StyledIconBox = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  border-right: solid 1px #D9D8D7;
`;

const StyledLoginButton = styled.div`
  width: 75.8%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 10px 10px 10px 10px;
  background-color: #0064ff;
  margin-top: 10px;
  cursor: pointer;
`;

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

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    toast.info('처음 방문하셨나요? 비회원 접속이 가능합니다.');
  }, []);

  const handleOnLoginBtn = () => {
    setItem('userId', JSON.stringify('guest'));

    navigate('/');
  };

  return (
    <Container>
      <Wrap>
        <StyledLogoBox>
          <Image src='../images/blue_bg.svg' alt='wait' />
        </StyledLogoBox>
        <StyledLoginBox>
          <StyledInputBox>
            <StyledIconBox>
              <HiUser />
            </StyledIconBox >
            <Input width='40%' height='94%' placeholder='ID' />
            <StyleIdDomain>@365.dongyang.ac.kr</StyleIdDomain>
          </StyledInputBox>
          <StyledInputBox $top='top'>
            <StyledIconBox>
              <HiMiniLockClosed />
            </StyledIconBox>
            <Input width='85%' height='94%' placeholder='PASSWORD' />
          </StyledInputBox>
          <StyledLoginButton>로그인</StyledLoginButton>
          <StyledMenuBox>
            <StyledMenuLink>Email 찾기</StyledMenuLink>
            <StyledMenuLink>비밀번호 찾기</StyledMenuLink>
          </StyledMenuBox>
          <StyledBlock />
          <StyledJoinButton onClick={handleOnLoginBtn}>비회원 접속</StyledJoinButton>
        </StyledLoginBox>
        <StyledBannerBox>
          <StyledBannerLink to='/'>
            <Image src='../images/dmu.png' alt='wait' />
          </StyledBannerLink>
        </StyledBannerBox>
      </Wrap>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Container>
  );
};

export default Login;