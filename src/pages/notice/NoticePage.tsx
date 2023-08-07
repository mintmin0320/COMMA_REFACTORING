import { styled } from 'styled-components';

import Header from '../../components/layout/Header'
import SideBar from '../../components/layout/sidebar/SideBar';
import NoticeList from '../../components/notice/NoticeList'
import ScrollTopBtn from '../../components/common/ScrollTopBtn';

function NoticePage() {
  return (
    <Container>
      <Header />
      <StyledNoticeBox>
        <SideBar />
        <NoticeList />
      </StyledNoticeBox>
      <ScrollTopBtn />
    </Container>
  );
};

export default NoticePage

const Container = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  flex-direction: column;
  background-color:#f9fafb;
`;

const StyledNoticeBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;