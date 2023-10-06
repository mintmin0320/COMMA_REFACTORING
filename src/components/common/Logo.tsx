import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

// styles
const StyledLogoWrap = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
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
  width: 45%;
  height: 35%;
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  animation: ${pulseAnimation} 2s infinite;
`;

const Logo = () => {
  return (
    <StyledLogoWrap>
      <StyledLogoImgBox to='/auth/login'>
        <LogoImg src='../images/blue_bg.svg' />
      </StyledLogoImgBox>
    </StyledLogoWrap>
  );
};

export default Logo;