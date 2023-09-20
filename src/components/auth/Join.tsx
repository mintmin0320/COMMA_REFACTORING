import styled, { keyframes } from 'styled-components';
import Input from '../common/Input';
import { useState } from 'react';

interface JoinState {
  email: string | null;
  password: string | null;
  name: string | null;
  telNum: string | null;
  studentNum: string | null;
}

// styles
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const JoinWrap = styled.div`
  width: 75%;
  height: 80%;
  display: flex;
`;

const LogoBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const LogoImg = styled.img`
  width: 40%;
  height: 40%;
  animation: ${pulseAnimation} 2s infinite;
`;

const JoinBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #fff;
  border: solid 1px #d8d8d8;
  border-radius: 8px;
`;


const Join = () => {
  const [join, setJoin] = useState<JoinState>({
    email: null,
    password: null,
    name: null,
    telNum: null,
    studentNum: null,
  });

  return (
    <Container>
      <JoinWrap>
        <LogoBox>
          <LogoImg src='../images/blue_bg.svg' />
        </LogoBox>
        <JoinBox>
          <Input
            width='75%'
            height='40px'
            name='email'
            value={join.email}
            placeholder='이메일을 입력해 주세요.'
          />
          <Input
            width='75%'
            height='40px'
            name='password'
            value={join.password}
            placeholder='비밀번호를 입력해 주세요.'
          />
          <Input
            width='75%'
            height='40px'
            name='name'
            value={join.name}
            placeholder='이름을 입력해 주세요.'
          />
          <Input
            width='75%'
            height='40px'
            name='telNum'
            value={join.telNum}
            placeholder='전화번호를 "-" 없이 입력해 주세요.'
          />
          <Input
            width='75%'
            height='40px'
            name='studentNum'
            value={join.studentNum}
            placeholder='학번을 입력해 주세요.'
          />
        </JoinBox>
      </JoinWrap>
    </Container>
  );
};

export default Join;