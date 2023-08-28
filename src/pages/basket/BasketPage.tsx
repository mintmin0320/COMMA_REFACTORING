import styled from 'styled-components';

import Header from '../../components/common/layout/Header'
import SideBar from '../../components/common/layout/sidebar/SideBar';
import Basket from '../../components/basket/Basket';

// CSS
const Container = styled.div`
  width: 100%;
  min-height: 100vh;  // 전체 화면 높이를 기반으로 최소 높이 설정
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
`;

const StyledBasketBox = styled.div`
  width: 100%;
  flex-grow: 1;  // 남는 공간을 모두 차지하게 함
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

const BasketPage = () => {
  return (
    <Container>
      <Header />
      <StyledBasketBox>
        <SideBar />
        <Basket />
      </StyledBasketBox>
    </Container>
  );
};

export default BasketPage;