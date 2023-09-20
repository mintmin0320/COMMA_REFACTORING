import styled from 'styled-components';
import Input from '../common/InputField';
import { useState } from 'react';
import Logo from '../common/Logo';

// types
import { JoinState } from '../../types/auth';
import InputField from '../common/InputField';
import JoinForm from '../common/auth/JoinForm';

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
  height: 90%;
  display: flex;
`;




const Join = () => {
  return (
    <Container>
      <JoinWrap>
        <Logo />
        <JoinForm />
      </JoinWrap>
    </Container>
  );
};

export default Join;