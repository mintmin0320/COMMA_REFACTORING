import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

// styles
const StyledLogoWrap = styled.section`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const StyledLogoImgBox = styled(Link)`
  width: 35%;
  height: 25%;
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  animation: ${pulseAnimation} 2s infinite;
`;

export default function Logo() {
  return (
    <StyledLogoWrap>
      <StyledLogoImgBox to='/auth/login'>
        <LogoImg src='../images/blue_bg.svg' />
      </StyledLogoImgBox>
    </StyledLogoWrap>
  );
};
