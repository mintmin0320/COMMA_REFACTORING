import React from 'react'
import { styled } from 'styled-components';
import Header from '../../components/layout/Header';
import SideBar from '../../components/layout/sidebar/SideBar';
import ProductList from '../../components/product/ProductList';
import ScrollTopBtn from '../../components/common/ScrollTopBtn';
import ScrollProgressBar from '../../components/common/ScrollProgressBar';

function ProductPage() {
  return (
    <Container>
      <Header />
      <ScrollProgressBar />
      <StyledNoticeBox>
        <SideBar />
        <ProductList />
      </StyledNoticeBox>
      <ScrollTopBtn />
    </Container>
  );
};

export default ProductPage;

const Container = styled.div`
  width: 100%;
  height: 100vmax;
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