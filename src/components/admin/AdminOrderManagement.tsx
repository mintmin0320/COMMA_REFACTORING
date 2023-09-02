/*
  주문 목록 컴포넌트
  - 신청된 주문 목록 확인
  - 
*/

import styled from 'styled-components';
import AdminOrderList from './AdminOrderList';

// CSS 
const StyledOrderListContainer = styled.div`
  width: calc(100% - 350px);
  height: 100%;
`;

const StyledOrderListbox = styled.div`
  width: 100%;
  height: 60%;
  border-bottom: solid 1px #d8d8d8;
`;

const StyledOrderListText = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  background-color: #f2f2f2;
  border-bottom: solid 1px #d8d8d8;
`;

const AdminOrderManagement = () => {
  return (
    <StyledOrderListContainer>
      <StyledOrderListbox>
        <StyledOrderListText>주문목록</StyledOrderListText>
        <AdminOrderList />
      </StyledOrderListbox>
    </StyledOrderListContainer>
  );
};

export default AdminOrderManagement;