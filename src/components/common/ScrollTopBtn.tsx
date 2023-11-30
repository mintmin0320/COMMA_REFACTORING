import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { ImArrowUp2 } from './icons';

// CSS
const StyledTopBtn = styled.div`
  position: fixed; 
  bottom: 40px; 
  right: 40px;
  width: 50px; 
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  border: 0 none;
  background: #0064ff;
  color: white;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.06em;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active { 
    outline: 0 none; 
  }
`;

const ScrollTopBtn = () => {
  const [ScrollY, setScrollY] = useState<number>(0);

  const handleFollow = () => {
    setScrollY(window.scrollY);
  };

  const handleOnTopBtn = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setScrollY(0);
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow);
    };

    watch();

    return () => {
      window.removeEventListener('scroll', handleFollow);
    };
  });

  return (
    <StyledTopBtn onClick={handleOnTopBtn}>
      <ImArrowUp2 size='30px' />
    </StyledTopBtn>
  );
};

export default ScrollTopBtn;