import styled from 'styled-components';

// CSS
const StyledNoticeBannerBox = styled.div`
  width: 100%;
  height: 150vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:#000;
`;

const StyledTopBox = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImgInfoBox = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledNoticeImg = styled.img`
  width: 70%;
  height: 70%;
`;

const StyledBottomBox = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  align-items: center;
`;

const StyledCommaBannerBox = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledCommaNoticeImg = styled.img`
  width: 45%;
  height: 40%;
`;

const StyledAdditionalText = styled.div`
  font-size: 55px;
  font-weight: bold;
  color: #fff;
`;

const StyledInfoText = styled.div`
  height: 60px;
  font-size: 32px;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
  color: #979FA6;
`;

const NoticeBanner = () => {
  return (
    <StyledNoticeBannerBox>
      <StyledTopBox>
        <StyledNoticeImg src='./images/notice-banner.png' />
        <StyledImgInfoBox>
        </StyledImgInfoBox>
      </StyledTopBox>
      <StyledAdditionalText>
        아직도 일일이 공지사항을 확인하시나요?
      </StyledAdditionalText>
      <StyledBottomBox>
        <StyledCommaBannerBox>
          <StyledInfoText>공지사항을 모아보면</StyledInfoText>
          <StyledInfoText>한눈에 확인할 수 있어요</StyledInfoText>
        </StyledCommaBannerBox>
        <StyledCommaNoticeImg src='./images/comma-notice.png' />
      </StyledBottomBox>
    </StyledNoticeBannerBox>
  );
};

export default NoticeBanner;