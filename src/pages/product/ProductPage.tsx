import { Suspense } from 'react';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

import Header from '../../components/common/layout/header/Header';
import SideBar from '../../components/common/layout/side/sideBar/SideBar';
import ScrollTopBtn from '../../components/common/ScrollTopBtn';
import ProductCategory from '../../components/product/ProductCategory';
import SearchBar from '../../components/common/SearchBar';
import ProductList from '../../components/product/productList/ProductList';

import ErrorFallback from '../../components/product/utils/errorFallback/ErrorFallback';
import Skeleton from '../../components/product/utils/skeleton/Skeleton';

import * as S from './ProductPage.style';

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

export default ProductPage