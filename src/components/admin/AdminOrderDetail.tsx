import styled from 'styled-components';

// types
import { DetailProductInfo } from '../../types/admin';

// dummy-data
import orderProductDetailData from './orderProductDetailData.json';

// CSS
const StyledOrderDetailContainer = styled.div`
  width: 100%;
  height: calc(50% - 11px);
  display: flex;
  margin-top: 10px;
  border-top: solid 1px #d8d8d8;
`;

const StyledOrderDetailInfoBox = styled.div`
  width: 75%;
  height: 100%;
`;

/* 신청자 상세 데이터 */
const StyledOrderDetailUserInfoBox = styled.div`
  width: 100%;
  height: 130px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const StyledOrderDetailInfo = styled.div`
  width: calc(100% - 1px);
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: solid 1px #d8d8d8;
  border-bottom: solid 1px #d8d8d8;
  font-size: 14px;
  background-color: #fff;
`;

/* 상세 신청부품 목록 */
const StyledOrderDetailProductListInfoBox = styled.div`
  width: calc(100% - 1px);
  height: 62px;
  display: flex;
  border-right: solid 1px #d8d8d8;
  border-bottom: solid 1px #d8d8d8;
  background-color: #f2f2f2;
`;

const StyledOrderDetailProductListBox = styled.div`
  width: calc(100% - 1px);
  height: calc(100% - 193px);
  display: flex;
  flex-direction: column;
  border-right: solid 1px #d8d8d8;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledOrderDetailProductList = styled.div`
  width: 100%;
  height: 62px;
  display: flex;
  border-bottom: solid 1px #d8d8d8;
`;

const StyledOrderDetailProductName = styled.div`
  width: calc(75% + 2px);
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: solid 1px #d8d8d8;
`;

const StyledOrderDetailProductCount = styled.div`
  width: 25%;
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDetailRightBox = styled.div`
  width: 25%;
`;

/* 신청 취소 사유 작성 */
const StyledCancelReasonForm = styled.form`
  width: 100%;
  flex-direction: column;
`;

const StyledCancelReasonContainer = styled.div`
  width: 100%;
  height: 129px;
  display: flex;
  justify-content: flex-end;
  border-bottom: solid 1px #d8d8d8;
`;

const StyledCancelReasonTextarea = styled.textarea`
  width: 98%;
  height: 125px;
  border: none;
  outline: none;
`;

const StyledCancelReasonBtnBox = styled.div`
  width: calc(100% - 1px);
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px #d8d8d8; 
`;

const StyledCancelReasonButton = styled.button`
  width: 80px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  border: solid 1px #d8d8d8;
  border-radius: 8px;
  cursor: pointer;
`;

const StyledApprovalButtonBox = styled.div`
  width: 100%;
  height: calc(100% - 193px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
`;

const StyledApprovalButton = styled.button`
  width: 125px;
  height: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 4px #fff;
  border-radius: 50%;
  background-color: #58FA58;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 33px;
  font-weight: 700;
  cursor: pointer;
`;

const AdminOrderDetail = () => {
  return (
    <StyledOrderDetailContainer>
      <StyledOrderDetailInfoBox>
        <StyledOrderDetailUserInfoBox>
          <StyledOrderDetailInfo>이메일</StyledOrderDetailInfo>
          <StyledOrderDetailInfo>인공지능학과</StyledOrderDetailInfo>
          <StyledOrderDetailInfo>이름</StyledOrderDetailInfo>
          <StyledOrderDetailInfo>전화번호</StyledOrderDetailInfo>
          <StyledOrderDetailInfo>학번</StyledOrderDetailInfo>
          <StyledOrderDetailInfo>학년</StyledOrderDetailInfo>
          <StyledOrderDetailInfo>분반</StyledOrderDetailInfo>
          <StyledOrderDetailInfo>학적</StyledOrderDetailInfo>
        </StyledOrderDetailUserInfoBox>
        <StyledOrderDetailProductListInfoBox>
          <StyledOrderDetailProductList>
            <StyledOrderDetailProductName style={{ background: '#f2f2f2' }}>
              상품명
            </StyledOrderDetailProductName>
            <StyledOrderDetailProductCount>신청 개수 / 보유 개수</StyledOrderDetailProductCount>
          </StyledOrderDetailProductList>
        </StyledOrderDetailProductListInfoBox>
        <StyledOrderDetailProductListBox>
          {orderProductDetailData.map((item: DetailProductInfo) => (
            <StyledOrderDetailProductList key={item.productId}>
              <StyledOrderDetailProductName>{item.productName}</StyledOrderDetailProductName>
              <StyledOrderDetailProductCount>
                {item.orderCount} / {item.orderAvailableQuantity} EA
              </StyledOrderDetailProductCount>
            </StyledOrderDetailProductList>
          ))}
        </StyledOrderDetailProductListBox>
      </StyledOrderDetailInfoBox>
      <StyledDetailRightBox>
        <StyledCancelReasonForm>
          <StyledCancelReasonContainer>
            <StyledCancelReasonTextarea
              placeholder='취소 사유를 적어주세요.'
              required
            />
          </StyledCancelReasonContainer>
          <StyledCancelReasonBtnBox>
            <StyledCancelReasonButton
              onClick={() => alert('취소 사유 작성완료!')}
            >
              주문 취소
            </StyledCancelReasonButton>
          </StyledCancelReasonBtnBox>
        </StyledCancelReasonForm>
        <StyledApprovalButtonBox>
          <StyledApprovalButton
            onClick={() => alert('승인되었습니다.')}
          >
            승인
          </StyledApprovalButton>
        </StyledApprovalButtonBox>
      </StyledDetailRightBox>
    </StyledOrderDetailContainer>
  );
};

export default AdminOrderDetail;