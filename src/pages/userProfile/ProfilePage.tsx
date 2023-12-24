import styled from 'styled-components';

import Header from '../../components/common/layout/header/Header'
import SideBar from '../../components/common/layout/side/sideBar/SideBar';
import Profile from '../../components/userProfile/Profile';

// CSS
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color:#f9fafb;
`;

const StyledProfileBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

const ProfilePage = () => {
  return (
    <Container>
      <Header />
      <StyledProfileBox>
        <SideBar />
        <Profile />
      </StyledProfileBox>
    </Container>
  );
};

export default ProfilePage;