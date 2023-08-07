import styled from 'styled-components';

import Diet from './Diet';
import Profile from './Profile';

function SideBar() {
  return (
    <Container>
      <Profile />
      <StyledDietTitle>오늘의 식단</StyledDietTitle>
      <Diet />
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  width: 25%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledDietTitle = styled.h1`
  width: 80%;
  font-size: 25px;
  display: flex;
  margin-top: 30px;
`;