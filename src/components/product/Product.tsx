import { useEffect } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

import ProductList from './ProductList';
import ProductCategory from './ProductCategory';
import ProductCarousel from './ProductCarousel';

// library-CSS
import "react-responsive-carousel/lib/styles/carousel.min.css";

// CSS
const Container = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: solid 1px #d8d8d8; */
  /* background-color: #fff; */
  border-radius: 8px;
`;

const StyledProductWrap = styled.div`
  width: 96%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* border: solid 1px #d8d8d8; */
  /* background-color: #fff; */
`;

function Product() {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      alert('hi')
    }
  }, [inView]);

  return (
    <Container>
      <StyledProductWrap>
        <ProductCategory />
        <ProductCarousel />
        <ProductList />
        <div ref={ref}>
          <h1>loading</h1>
        </div>
      </StyledProductWrap>
    </Container>
  );
};

export default Product;