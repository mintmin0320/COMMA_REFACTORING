import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductCategory from './ProductCategory';


function ProductList() {
  return (
    <Container>
      <ProductWrap>
        <ProductCategory />
      </ProductWrap>
    </Container>
  );
};

export default ProductList;

const Container = styled.div`
  width: 55%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px #d8d8d8;
  background-color: #fff;
  border-radius: 8px;
`;

const ProductWrap = styled.div`
  width: 96%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  border: solid 1px #d8d8d8;
  background-color: #fff;
`;

