import styled from 'styled-components';

const StyledProductItem = styled.div`
  width: 100%;
  height: 335px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  background-color: #fff;
`;

const StyledProductImgBox = styled.div`
  width: 100%;
  height: 230px;
`;

const StyledProductImg = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledProductTitle = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: bolder;
`;

const StyledProductCategory = styled.div`
  width: 100%;
  color: #A4A4A4;
  margin-top: 6px;
`;

const StyledProductCount = styled.div`
  width: 100%;
  margin-top: 10px;
`;

const ProductCard = ({ product }: any) => {
  return (
    <StyledProductItem
    // onClick={() => setIsOpen(true)}
    >
      <StyledProductImgBox>
        <StyledProductImg src={product?.produceImg} />
        <StyledProductTitle>{product?.name}</StyledProductTitle>
        <StyledProductCategory>{product?.produceCategory}</StyledProductCategory>
        <StyledProductCount>
          {
            product?.produceCount === 0
              ? '품 절'
              : `${product.produceCount}EA`
          }
        </StyledProductCount>
      </StyledProductImgBox>
    </StyledProductItem>
  );
};

export default ProductCard;
