/*
  React Router의 ScrollToTop 컴포넌트 사용
  - 브라우저나 라우팅 라이브러리가 이전 페이지의 스크롤 위치를 기억하려고 할 때 
  페이지 전환 시 항상 스크롤 위치를 상단으로 초기화
  
  - 앱의 최상위 컴포넌트 App.tsx 파일에 추가하기
*/

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
