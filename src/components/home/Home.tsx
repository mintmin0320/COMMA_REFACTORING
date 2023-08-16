/*
  메인 페이지
  - 컴퓨터공학부 이미지
  - 공지사항 모아보기 관련 썸네일
  - 부품 신청 페이지 관련 썸네일
*/

import styled from 'styled-components';

// icon
import { ImArrowRight } from "react-icons/im";

// CSS
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
  background-color:#f9fafb;
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
  height: 950px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSecondLeftBox = styled.div`
  width: 44%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSecondLeftText = styled.div`
  width: 450px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 50px;
`;

const StyledParagraph = styled.p<{ $fontSize?: string }>`
  margin: 0;
  padding: 0;
  font-size: ${(props) => props.$fontSize || '16px'};
`;

const StyledSecondImg = styled.img`
  width: 450px;
  height: 700px;
`

const StyledSecondRightBox = styled.div`
  width: 44%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSecondRightText = styled.div`
  width: 450px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 23px;
  font-weight: 600;
  margin-top: 50px;
`;

const StyledThirdBox = styled.div`
  width: 100%;
  height: 100vh;
  background-color:#f9fafb;
`;

const Home = () => {
  return (
    <Container>
      <StyledFirstBox>
        <StyledFirstText>
          <H1>컴퓨터공학부 커뮤니티 COMMA</H1>
        </StyledFirstText>
      </StyledFirstBox>
      <StyledSecondBox>
        <StyledSecondLeftBox>
          <StyledSecondLeftText>
            <StyledParagraph $fontSize="35px">불편했던 신청서</StyledParagraph>
            <StyledParagraph $fontSize="35px">이제 그만 작성하세요</StyledParagraph>
          </StyledSecondLeftText>
          <StyledSecondImg src='./images/application.png' />
        </StyledSecondLeftBox>
        <ImArrowRight size='50px' color='#FE2E2E' />
        <StyledSecondRightBox>
          <StyledSecondImg src='./images/application-mobile.png' />
          <StyledSecondRightText>
            <StyledParagraph $fontSize="23px">COMMA에서 실습재료를 신청해 보세요</StyledParagraph>
            <StyledParagraph $fontSize="23px">온라인으로 재료를 확인하고,</StyledParagraph>
            <StyledParagraph $fontSize="23px">필요한 부품을 쉽게 신청할 수 있어요</StyledParagraph>
          </StyledSecondRightText>
        </StyledSecondRightBox>
      </StyledSecondBox>
      <StyledThirdBox>
        공지사항 모아보기
      </StyledThirdBox>
    </Container>
  );
};

export default Home;