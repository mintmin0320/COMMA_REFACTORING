import { styled } from 'styled-components';

import Header from '../../components/layout/Header'
import NoticeList from '../../components/notice/NoticeList'
import SideBar from '../../components/layout/SideBar';

function NoticePage() {
  return (
    <Container>
      <Header />
      <StyledNoticeBox>
        <SideBar />

        <NoticeList />

      </StyledNoticeBox>
    </Container>
  );
};

export default NoticePage

const Container = styled.div`
  width: 100%;
  height: 100vmax;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

const StyledNoticeBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;