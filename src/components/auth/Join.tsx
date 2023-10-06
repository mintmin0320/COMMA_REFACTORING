import styled from 'styled-components';

import JoinForm from '../common/auth/JoinForm';
import Logo from '../common/Logo';

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