/*
  메인 페이지
  - 컴퓨터공학부 이미지
  - 공지사항 모아보기 관련 썸네일
  - 부품 신청 페이지 관련 썸네일
*/

import styled from 'styled-components';

function Home() {
  return (
    <Container>
      <StyledFirstBox>
        <StyledFirstText>
          <H1>컴퓨터공학부 커뮤니티 콤마</H1>
        </StyledFirstText>
      </StyledFirstBox>
      <StyledSecondBox>
        2.공지사항 모아보기 사진
      </StyledSecondBox>
      <StyledThirdBox>
        3. 부품 신청 페이지 사진
      </StyledThirdBox>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledFirstBox = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  justify-content: center;
  background: url(../images/dmu-logo.png) no-repeat center;
  opacity: 0.7;
  top: 0;
  left: 0;
  /* background-size: cover; */
`;

const StyledFirstText = styled.div`
  width: 70%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
`;

const H1 = styled.h1`
  font-size: 66px;
`;

const StyledSecondBox = styled.div`
  width: 100%;
  height: 180px;
  background-color: red;
`;

const StyledThirdBox = styled.div`
  width: 100%;
  height: 180px;
  background-color: green;
`;

