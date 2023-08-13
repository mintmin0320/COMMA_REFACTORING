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

function ProductList() {
  return (
    <ProductListBox>
      {
        ProductItemData.map((item: ProductInfo) => {
          return (
            <ProductItem key={item.itemId}>
              <ProductImgBox>
                <ProductImg src={item.itemImg} />
                <ProductTitleBox>
                  {item.itemTitle}
                </ProductTitleBox>
                <ProductCategoryBox>
                  {item.itemCategory}
                </ProductCategoryBox>
                <ProductCountBox>
                  {item.itemCount}
                </ProductCountBox>
              </ProductImgBox>
            </ProductItem>
          )
        })
      }
    </ProductListBox>
  );
};

export default ProductList;

const ProductListBox = styled.div`
  width: 100%;
  /* height: 100px; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 35px 15px;
  place-items: center;

  @media screen and (min-width: 1500px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  };
`;

const ProductItem = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
`;

const ProductImgBox = styled.div`
  width: 100%;
  height: 230px;
`;

const ProductImg = styled.img`
  width: 100%;
  height: 100%;
`;

const ProductTitleBox = styled.div`
  width: 100%;
  font-size: 18px;
`;

const ProductCategoryBox = styled.div`
  width: 100%;
  color: #A4A4A4;
`;

const ProductCountBox = styled.div`
  width: 100%;
  color: #A4A4A4;
`;