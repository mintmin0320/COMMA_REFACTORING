import styled from 'styled-components';

import ProductItemData from './ProductData.json';

interface ProductInfo {
  itemId: number,
  itemTitle: string,
  itemCategory: string,
  itemImg: string,
  postView: number,
  itemCount: number
};

// CSS
const StyledProductList = styled.div`
  width: 100%;
  /* height: 100px; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px 15px;
  place-items: center;

  @media screen and (min-width: 1500px) {
    grid-template-columns: repeat(4, 1fr);
  };
`;

const StyledProductItem = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
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
  margin-top: 12px;
`;

function ProductList() {
  return (
    <StyledProductList>
      {
        ProductItemData.map((item: ProductInfo) => {
          return (
            <StyledProductItem key={item.itemId}>
              <StyledProductImgBox>
                <StyledProductImg src={item.itemImg} />
                <StyledProductTitle>
                  {item.itemTitle}
                </StyledProductTitle>
                <StyledProductCategory>
                  {item.itemCategory}
                </StyledProductCategory>
                <StyledProductCount>
                  {
                    item.itemCount === 0 ? '품 절' : `${item.itemCount}EA`
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