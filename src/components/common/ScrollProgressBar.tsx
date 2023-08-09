/*
  useMemo or useCallback 등등 사용 고려
*/

import { useEffect, useState } from 'react';
import styled from 'styled-components';

const ScrollProgressBar = () => {
  const [progress, setProgress] = useState<number>(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    setProgress(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const setProgressColor = (progress: number) => {
    if (progress <= 40) {
      return '#2E9AFE';
    };

    if (progress <= 75) {
      return '#0064ff';
    } else {
      return '#0101DF';
    };
  };

  return (
    <ProgressWrap>
      <StyledProgress
        style={{ width: `${progress}%`, background: `${setProgressColor(progress)}` }} />
    </ProgressWrap>
  );
};

export default ScrollProgressBar;

const ProgressWrap = styled.div`
  width: 100%;
  height: 73.1px;
  display: flex;
  align-items: flex-end;
  position: fixed;
  top: 0;
  left: 0;
`;

const StyledProgress = styled.div`
  height: 2px;
`;