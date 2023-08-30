/*
  메인 페이지
  - 컴퓨터공학부 이미지
  - 공지사항 모아보기 관련 썸네일
  - 부품 신청 페이지 관련 썸네일
*/

import styled from 'styled-components';

// icons
import IntroBanner from './IntroBanner';
import GuideBanner from './GuideBanner';
import NoticeBanner from './NoticeBanner';

// CSS
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;





const Home = () => {
  return (
    <Container>
      <IntroBanner />
      <GuideBanner />
      <NoticeBanner />
    </Container>
  );
};

export default Home;