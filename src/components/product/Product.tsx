import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductCategory from './ProductCategory';
import ProductCarousel from './ProductCarousel';
import ProductList from './ProductList';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

function Product() {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      alert('hi')
    }
  }, [inView]);

  return (
    <Container>
      <ProductWrap>
        <ProductCategory />
        <ProductCarousel />
        <ProductList />
        <div ref={ref}>
          <h1>loading</h1>
        </div>
      </ProductWrap>
    </Container>
  );
};

export default Product;

const Container = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: solid 1px #d8d8d8; */
  /* background-color: #fff; */
  border-radius: 8px;
`;

const ProductWrap = styled.div`
  width: 96%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* border: solid 1px #d8d8d8; */
  /* background-color: #fff; */
`;


