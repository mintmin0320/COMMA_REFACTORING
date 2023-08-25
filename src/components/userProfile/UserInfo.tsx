import styled from 'styled-components';

// CSS
const Container = styled.div`
  width: 55%;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #d8d8d8;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const UserInfo = () => {
  return (
    <Container>
      userInfo
    </Container>
  );
};

export default UserInfo;