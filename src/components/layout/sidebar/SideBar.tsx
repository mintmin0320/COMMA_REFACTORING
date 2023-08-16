import styled from 'styled-components';

import Diet from './Diet';
import Profile from './Profile';

// CSS
const Container = styled.div`
  width: 20%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1500px) {
    width: 28%;
  };
`;

const StyledDietTitle = styled.h1`
  width: 80%;
  font-size: 25px;
  display: flex;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const SideBar = () => {
  return (
    <Container>
      <Profile />
      <StyledDietTitle>오늘의 식단🍴</StyledDietTitle>
      <Diet />
    </Container>
  );
};

export default SideBar;