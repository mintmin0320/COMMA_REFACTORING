import styled from 'styled-components';

const StyledProductFormContainer = styled.div`
  width: calc(100% - 350px);
  height: 100%;
`;

/* 상품 관리  */
const StyledProductManagementBox = styled.div`
  width: 100%;
  height: 65%;
`;

const StyledProductManagementTitle = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 600;
  /* border-bottom: solid 1px #d8d8d8; */
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
  width: 50%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: solid 1px #d8d8d8;
`;

const StyledProductCountBox = styled.div`
  width: 20%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: solid 1px #d8d8d8;
  background-color: red;
`;

const AdminProductForm = () => {
  return (
    <StyledProductFormContainer>
      <StyledProductManagementBox>
        <StyledProductManagementTitle>상품관리</StyledProductManagementTitle>
        <StyledProductInfoBox>
          <StyledProductTitleBox>상품명</StyledProductTitleBox>
          <StyledProductCountBox>수량</StyledProductCountBox>
        </StyledProductInfoBox>
      </StyledProductManagementBox>
    </StyledProductFormContainer>
  );
};

export default AdminProductForm;