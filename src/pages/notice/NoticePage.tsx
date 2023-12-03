import styled from 'styled-components';

import Header from '../../components/common/layout/header/Header'
import SideBar from '../../components/common/layout/sidebar/SideBar';
import Notice from '../../components/notice/Notice'

// CSS
const Container = styled.div`
  width: 100%;
  height: 100vh;
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

const NoticePage = () => {
  return (
    <Container>
      <Header />
      <StyledNoticeBox>
        <SideBar />
        <Notice />
      </StyledNoticeBox>
    </Container>
  );
};

export default NoticePage;