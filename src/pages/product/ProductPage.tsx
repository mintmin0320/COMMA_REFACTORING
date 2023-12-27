import { QueryErrorResetBoundary, useQueryErrorResetBoundary } from '@tanstack/react-query';
import Header from '../../components/common/layout/header/Header';
import SideBar from '../../components/common/layout/side/sideBar/SideBar';
import Product from '../../components/product/Product';
import ScrollTopBtn from '../../components/common/ScrollTopBtn';
import ProductCategory from '../../components/product/ProductCategory';
import ProductCarousel from '../../components/product/ProductCarousel';
import SearchBar from '../../components/common/SearchBar';
import ProductList from '../../components/product/productList/ProductList';
import { useInView } from 'react-intersection-observer';
import { Suspense, useEffect, useState } from 'react';
import axios from 'axios';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../../components/product/utils/ErrorFallback';

import * as S from './ProductPage.style';

import Skeleton from '../../components/product/utils/skeleton/Skeleton';
const ProductPage = () => {
  return (
    <S.Container>
      <Header />
      <S.Content>
        <SideBar />
        <S.Wrap>
          <S.Box>
            <ProductCategory />
            <SearchBar />
            <QueryErrorResetBoundary>
              {({ reset }) => (
                <ErrorBoundary
                  onReset={reset}
                  FallbackComponent={ErrorFallback}
                >
                  <Suspense fallback={<Skeleton />}>
                    <ProductList />
                  </Suspense>
                </ErrorBoundary>
              )}
            </QueryErrorResetBoundary>
          </S.Box>
        </S.Wrap>
      </S.Content>
      <ScrollTopBtn />
    </S.Container>
  );
};

export default ProductPage;