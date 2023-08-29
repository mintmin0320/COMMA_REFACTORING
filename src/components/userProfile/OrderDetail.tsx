import styled from 'styled-components';

// types
import { ModalProps } from '../../types/product';

// CSS
const StyledDetailModalBox = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
`;

const StyledModalContent = styled.div`
  width: 35%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
`;

const StyledModalTextBox = styled.div`
  width: 85%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

const StyledModalText = styled.h1`
  font-size: 35px;
`;

const StyledModalContainer = styled.div`
  width: 85%;
  height: calc(95% - 120px);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px #d8d8d8;
`;

const StyledOrderInfoBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  border-bottom: solid 1px #d8d8d8;
`;

const StyledOrderTitleInfo = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: solid 1px #d8d8d8;
`;

const StyledOrderCountInfo = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledOrderListBox = styled.div`
  width: 100%;
  height: calc(95% - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledOrderList = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px #d8d8d8;
`;

const OrderDetail = ({ isOpen, onClose, orderList }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <StyledDetailModalBox onClick={handleOverlayClick}>
      <StyledModalContent>
        <StyledModalTextBox>
          <StyledModalText>주문내역</StyledModalText>
        </StyledModalTextBox>
        <StyledModalContainer>
          <StyledOrderInfoBox>
            <StyledOrderTitleInfo>상품명</StyledOrderTitleInfo>
            <StyledOrderCountInfo>수량</StyledOrderCountInfo>
          </StyledOrderInfoBox>
          <StyledOrderListBox>
            {orderList?.map((list) => (
              <StyledOrderList key={list.productId}>
                <StyledOrderTitleInfo>{list.productTitle}</StyledOrderTitleInfo>
                <StyledOrderCountInfo>{list.productCount} EA</StyledOrderCountInfo>
              </StyledOrderList>
            ))}
          </StyledOrderListBox>
        </StyledModalContainer>
      </StyledModalContent>
    </StyledDetailModalBox>
  );
};

export default OrderDetail;