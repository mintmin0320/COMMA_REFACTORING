import { useEffect, useState } from 'react';
import styled from 'styled-components';

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
    <Container>
      <button
        className="topBtn"
        onClick={handleOnTopBtn}
      >
        업
      </button>
    </Container>
  );
};

export default ScrollTopBtn;

const Container = styled.div`
  .topBtn {
    position: fixed; 
    bottom: 40px; 
    right: 40px;
    width: 50px; 
    height: 50px;
    border-radius: 100%;
    border: 0 none;
    background: #0064ff;
    color: white;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: -0.06em;
    cursor: pointer;
  }

  .topBtn:hover,
  .topBtn:focus,
  .topBtn:active { 
    outline: 0 none; 
  } 
`;