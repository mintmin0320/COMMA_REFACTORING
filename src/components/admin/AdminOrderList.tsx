import styled from 'styled-components';

// dummy-data
import orderListData from './orderListData.json';

// CSS 
const StyledOrderListWrap = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  overflow-y: scroll;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledOrderList = styled.div`
  width: 95%;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px #d8d8d8;
  border-radius: 8px;
  margin: 8px;
  cursor: pointer;

  &:hover{
    background-color: #f2f2f2;
  }
`;

const StyledOrderDate = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px #d8d8d8;
  background-color: #FA5858;
  color: #fff;
  border-radius: 8px 8px 0 0;
`;

const StyledOrderCourse = styled.div`
  width: 98%;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
`;

const StyledOrderPurpose = styled.div`
  width: 98%;
  height: 90px;
  border-radius: 0 0 8px 8px;
`;

const AdminOrderList = () => {
  return (
    <StyledOrderListWrap>
      {orderListData.map((item) => (
        <StyledOrderList>
          <StyledOrderDate>{item.orderApplicationDate}</StyledOrderDate>
          <StyledOrderCourse>{item.orderCourse}</StyledOrderCourse>
          <StyledOrderPurpose>{item.orderPurpose}</StyledOrderPurpose>
        </StyledOrderList>
      ))}
    </StyledOrderListWrap>
  );
};

export default AdminOrderList;