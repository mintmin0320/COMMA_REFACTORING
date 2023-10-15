import styled from 'styled-components';

import AdminAddProduct from './AdminAddProduct';

// types
import { ProductInfo } from '../../types/product';

// dummy-data
import productData from '../product/productData.json';

const StyledProductFormContainer = styled.div`
  width: calc(100% - 350px);
  height: 100%;
`;

/* 상품 관리  */
const StyledProductManagementBox = styled.div`
  width: 100%;
  height: 65%;
  border-bottom: solid 1px #d8d8d8;
`;

const StyledProductManagementTitle = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 600;
  border-bottom: solid 1px #d8d8d8;

  background-color: #f2f2f2;
`;

const StyledProductInfoBox = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  border-bottom: solid 1px #d8d8d8;
  background-color: #f2f2f2;
`;

const StyledProductTitleBox = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: solid 1px #d8d8d8;
`;

const StyledProductCategoryBox = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: solid 1px #d8d8d8;
`;

const StyledProductCountBox = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: solid 1px #d8d8d8;
`;

const StyledProductDeleteBtnBox = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledProductListBox = styled.div`
  width: 100%;
  height: calc(100% - 136px);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledProductItem = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  border-bottom: solid 1px #d8d8d8;
`;

const StyledProductDeleteBtn = styled.button`
  width: 60px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const AdminProductForm = () => {
  return (
    <StyledProductFormContainer>
      <StyledProductManagementBox>
        <StyledProductManagementTitle>상품관리</StyledProductManagementTitle>
        <StyledProductInfoBox>
          <StyledProductTitleBox>상품명</StyledProductTitleBox>
          <StyledProductCategoryBox>분류</StyledProductCategoryBox>
          <StyledProductCountBox>수량</StyledProductCountBox>
          <StyledProductDeleteBtnBox>삭제</StyledProductDeleteBtnBox>
        </StyledProductInfoBox>
        <StyledProductListBox>
          {productData.map((item: ProductInfo) => (
            <StyledProductItem key={item.produceId}>
              <StyledProductTitleBox>{item.produceTitle}</StyledProductTitleBox>
              <StyledProductCategoryBox>{item.produceCategory}</StyledProductCategoryBox>
              <StyledProductCountBox>{item.produceCount}</StyledProductCountBox>
              <StyledProductDeleteBtnBox>
                <StyledProductDeleteBtn
                  onClick={() => alert('상품이 삭제되었습니다.')}
                >
                  삭제
                </StyledProductDeleteBtn>
              </StyledProductDeleteBtnBox>
            </StyledProductItem>
          ))}
        </StyledProductListBox>
      </StyledProductManagementBox>
      <AdminAddProduct />
    </StyledProductFormContainer>
  );
};

export default AdminProductForm;