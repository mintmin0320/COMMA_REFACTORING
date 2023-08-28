import styled from 'styled-components';

// CSS
const StyledOrderStatusBox = styled.div`
  width: 90%;
  height: 80%;
  border: solid 1px #d8d8d8;
`;

const StyledInfoBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  border-bottom: solid 1px #d8d8d8;
  background-color: #f2f2f2;
`;

const StyledDateInfo = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: solid 1px #d8d8d8;
`;

const StyledOrderListInfo = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: solid 1px #d8d8d8;
`;

const StyledStatusInfo = styled.div`
  width: 20%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledOrderStatusListBox = styled.div`
  width: 100%;
  height: calc(100% - 50px);  // InfoBox의 높이 50px을 제외
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledOrderData = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px #d8d8d8;
`;

const OrderStatusPanel = () => {
  return (
    <StyledOrderStatusBox>
      <StyledInfoBox>
        <StyledDateInfo>신청 날짜</StyledDateInfo>
        <StyledOrderListInfo>주문 목록</StyledOrderListInfo>
        <StyledStatusInfo>상태</StyledStatusInfo>
      </StyledInfoBox>
      <StyledOrderStatusListBox>
        <StyledOrderData>
          <StyledDateInfo>2023.08.24</StyledDateInfo>
          <StyledOrderListInfo>자이로 센서: 2 EA, 모터: 2 EA</StyledOrderListInfo>
          <StyledStatusInfo>승인</StyledStatusInfo>
        </StyledOrderData>
      </StyledOrderStatusListBox>
    </StyledOrderStatusBox>
  );
};

export default OrderStatusPanel;