import styled, { keyframes } from 'styled-components';

// styles
const LogoBox = styled.div`
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

const LogoImg = styled.img`
  width: 40%;
  height: 40%;
  animation: ${pulseAnimation} 2s infinite;
`;

const Logo = () => {
  return (
    <LogoBox>
      <LogoImg src='../images/blue_bg.svg' />
    </LogoBox>
  );
};

export default Logo;