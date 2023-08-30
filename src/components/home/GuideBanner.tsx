import styled from 'styled-components';

// icons
import { ImArrowRight } from "react-icons/im";

// CSS
const StyledGuideBannerBox = styled.div`
  width: 100%;
  height: 950px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FAFAFA;
`;

const StyledLeftBox = styled.div`
  width: 44%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledLeftText = styled.div`
  width: 400px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 35px;
  font-weight: bold;
`;

const StyledParagraph = styled.p<{ $fontSize?: string }>`
  margin: 0;
  padding: 0;
  font-size: ${(props) => props.$fontSize || '16px'};
`;

const StyledGuideImg = styled.img`
  width: 400px;
  height: 600px;
`;

const StyledRightBox = styled.div`
  width: 44%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledRightText = styled.div`
  width: 400px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 23px;
  font-weight: 600;
`;

const GuideBanner = () => {
  return (
    <StyledGuideBannerBox>
      <StyledLeftBox>
        <StyledLeftText>
          <StyledParagraph $fontSize="35px">불편했던 신청서</StyledParagraph>
          <StyledParagraph $fontSize="35px">이제 그만 작성하세요</StyledParagraph>
        </StyledLeftText>
        <StyledGuideImg src='./images/application.png' />
      </StyledLeftBox>
      <ImArrowRight size='50px' color='#FE2E2E' />
      <StyledRightBox>
        <StyledGuideImg src='./images/application-mobile.png' />
        <StyledRightText>
          <StyledParagraph $fontSize="23px">COMMA에서 실습재료를 신청해 보세요</StyledParagraph>
          <StyledParagraph $fontSize="23px">온라인으로 재료를 확인하고,</StyledParagraph>
          <StyledParagraph $fontSize="23px">필요한 부품을 쉽게 신청할 수 있어요</StyledParagraph>
        </StyledRightText>
      </StyledRightBox>
    </StyledGuideBannerBox>
  );
};

export default GuideBanner;