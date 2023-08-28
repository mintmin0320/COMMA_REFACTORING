import styled from 'styled-components';
import { useState } from 'react';

import ProductDetail from './ProductDetail';

// types
import { ProductInfo } from '../../types/product';

// dummy-data
import productItemData from './productData.json';

// CSS
const StyledProductList = styled.div`
  width: 100%;
  /* height: 100%; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px 20px;
  place-items: center;

  @media screen and (min-width: 1500px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StyledProductItem = styled.div`
  width: 100%;
  height: 335px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
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

const ProductList = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledProductList>
      <ProductDetail isOpen={isOpen} onClose={() => setIsOpen(false)} />
      {
        productItemData.map((item: ProductInfo) => {
          return (
            <StyledProductItem
              key={item.produceId}
              onClick={() => setIsOpen(true)}
            >
              <StyledProductImgBox>
                <StyledProductImg src={item.produceImg} />
                <StyledProductTitle>
                  {item.produceTitle}
                </StyledProductTitle>
                <StyledProductCategory>
                  {item.produceCategory}
                </StyledProductCategory>
                <StyledProductCount>
                  {
                    item.produceCount === 0 ? '품 절' : `${item.produceCount}EA`
                  }
                </StyledProductCount>
              </StyledProductImgBox>
            </StyledProductItem>
          )
        })
      }
    </StyledProductList>
  );
};

export default ProductList;