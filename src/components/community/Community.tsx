import styled from 'styled-components';
import BestPost from './BestPost';

// CSS
const Container = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: solid 1px #d8d8d8; */
  /* background-color: #fff; */
  border-radius: 8px;
`;

const StyledCommunityPostBox = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  border: solid 1px #d8d8d8;
  /* background-color: #fff; */
  background-color: red;
  border-radius: 8px;
  margin-top: 20px;
`;

const Community = () => {
  return (
    <Container>
      <BestPost />
      <StyledCommunityPostBox>
        dd
      </StyledCommunityPostBox>
    </Container>
  );
};

export default Community;