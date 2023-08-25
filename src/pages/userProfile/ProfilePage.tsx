import styled from 'styled-components';

import Header from '../../components/layout/Header'
import SideBar from '../../components/layout/sidebar/SideBar';
import UserInfo from '../../components/userProfile/UserInfo';

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
        <UserInfo />
      </StyledProfileBox>
    </Container>
  );
};

export default ProfilePage;