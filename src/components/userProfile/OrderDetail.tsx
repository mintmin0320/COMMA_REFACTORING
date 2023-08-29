import styled from 'styled-components';

// styles
import { StyledModalContainer } from '../styles/CommonStyles';

// types
import { ModalProps } from '../../types/product';

// CSS
const StyledModalWrap = styled.div`
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

const StyledModalContent = styled.div`
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

const StyledOrderTitle = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: solid 1px #d8d8d8;
`;

const StyledOrderCount = styled.div`
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

const StyledOrderItem = styled.div`
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
    <StyledModalContainer onClick={handleOverlayClick}>
      <StyledModalWrap>
        <StyledModalTextBox>
          <StyledModalText>주문내역</StyledModalText>
        </StyledModalTextBox>
        <StyledModalContent>
          <StyledOrderInfoBox>
            <StyledOrderTitle>상품명</StyledOrderTitle>
            <StyledOrderCount>수량</StyledOrderCount>
          </StyledOrderInfoBox>
          <StyledOrderListBox>
            {orderList?.map((list) => (
              <StyledOrderItem key={list.productId}>
                <StyledOrderTitle>{list.productTitle}</StyledOrderTitle>
                <StyledOrderCount>{list.productCount} EA</StyledOrderCount>
              </StyledOrderItem>
            ))}
          </StyledOrderListBox>
        </StyledModalContent>
      </StyledModalWrap>
    </StyledModalContainer>
  );
};

export default OrderDetail;