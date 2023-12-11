import styled from 'styled-components';

import Header from '../../components/common/layout/header/Header';
import SideBar from '../../components/common/layout/sidebar/SideBar';
import Product from '../../components/product/Product';
import ScrollTopBtn from '../../components/common/ScrollTopBtn';
import ProductCategory from '../../components/product/ProductCategory';
import ProductCarousel from '../../components/product/ProductCarousel';
import SearchBar from '../../components/common/SearchBar';
import ProductList from '../../components/product/productList/ProductList';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color:#f9fafb;
`;

const ProductContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

const ProductContent = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
`;

const ProductWrap = styled.div`
  width: 96%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ProductPage = () => {

  return (
    <Container>
      <Header />
      <ProductContainer>
        <SideBar />
        <ProductContent>
          <ProductWrap>
            <ProductCategory />
            <SearchBar />
            <ProductList />
          </ProductWrap>
        </ProductContent>
      </ProductContainer>
      <ScrollTopBtn />
    </Container>
  );
};

export default ProductPage;