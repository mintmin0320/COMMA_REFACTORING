import styled from 'styled-components';

import UserInfo from './UserInfo';
import ProfileTabs from './ProfileTabs';

// CSS
const Container = styled.div`
  width: 55%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px #d8d8d8;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const Profile = () => {
  return (
    <Container>
      <UserInfo />
      <ProfileTabs />
    </Container>
  );
};

export default Profile;