import styled from 'styled-components';

import Header from '../../components/layout/Header';
import SideBar from '../../components/layout/sidebar/SideBar';
import Community from '../../components/community/Community';
import ScrollTopBtn from '../../components/common/ScrollTopBtn';
import ScrollProgressBar from '../../components/common/ScrollProgressBar';

// CSS
const Container = styled.div`
  width: 100%;
  height: 125vmax;
  display: flex;
  flex-direction: column;
  background-color:#f9fafb;

  @media screen and (min-width: 1500px) {
    height: 95vmax;
  }
`;

const StyledCommunityBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 25px;
  /* background-color: red; */
`;

const CommunityPage = () => {
  return (
    <Container>
      <Header />
      <ScrollProgressBar />
      <StyledCommunityBox>
        <SideBar />
        <Community />
      </StyledCommunityBox>
      <ScrollTopBtn />
    </Container>
  );
};

export default CommunityPage;