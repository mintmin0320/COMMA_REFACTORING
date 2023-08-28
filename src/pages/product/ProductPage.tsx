import styled from 'styled-components';

import Header from '../../components/common/layout/Header';
import SideBar from '../../components/common/layout/sidebar/SideBar';
import Product from '../../components/product/Product';
import ScrollTopBtn from '../../components/common/ScrollTopBtn';
import ScrollProgressBar from '../../components/common/ScrollProgressBar';

// CSS
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color:#f9fafb;
`;

const StyledNoticeBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

const ProductPage = () => {
  return (
    <Container>
      <Header />
      <ScrollProgressBar />
      <StyledNoticeBox>
        <SideBar />
        <Product />
      </StyledNoticeBox>
      <ScrollTopBtn />
    </Container>
  );
};

export default ProductPage;