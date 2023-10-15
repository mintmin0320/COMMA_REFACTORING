import styled from 'styled-components';

import Header from '../../components/common/layout/Header'
import SideBar from '../../components/common/layout/sidebar/SideBar';
import NoticeDetail from '../../components/notice/NoticeDetail';

// CSS
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color:#f9fafb;
`;

const StyledNoticeDetailBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

const NoticeDetailPage = () => {
  return (
    <Container>
      <Header />
      <StyledNoticeDetailBox>
        <SideBar />
        <NoticeDetail />
      </StyledNoticeDetailBox>
    </Container>
  );
};

export default NoticeDetailPage;