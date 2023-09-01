import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

// common-style
import { StyledLogoImg, StyledLogoTitle } from '../../../styles/CommonStyles';

// types
import { MenuItem, CustomNavLinkProps } from '../../../../types/common';

// CSS
const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  border-right: solid 1px #d8d8d8;
`;

const StyledLogoBox = styled(Link)`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledMenuBox = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  border-top: solid 1px #d8d8d8;
`;

/*
  StyledMenu는 NavLink 컴포넌트에 스타일을 추가하되, NavLink의 원래 프로퍼티와 CustomNavLinkProps에 정의된 activeClassName 프로퍼티까지 모두 사용할 수 있는 새로운 컴포넌트를 생성
 */
const StyledMenu = styled(NavLink as React.FC<CustomNavLinkProps>)`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-family: 'ADLaMDisplay', sans-serif;
  font-weight: 700;
  color: #000;
  background-color: #f2f2f2;
  border-bottom: solid 1px #d8d8d8;
  cursor: pointer;
  
  &.active {
    background-color: #0064ff;
    color: #fff;
  }
`;

const AdminSideBar = () => {
  const menuItems: MenuItem[] = [
    { name: '회원목록', path: '/admin/' },
    { name: '주문목록', path: '/admin/order-list' },
    { name: '상품추가', path: '/add-product' },
  ];

  return (
    <Container>
      <StyledLogoBox to='/'>
        <StyledLogoImg src='../images/blue_bg.svg' />
        <StyledLogoTitle>COMMA</StyledLogoTitle>
      </StyledLogoBox>
      <StyledMenuBox>
        {menuItems.map((item: MenuItem, index: number) => (
          <StyledMenu
            key={item.name}
            to={item.path}
            activeClassName="active"
          >
            {item.name}
          </StyledMenu>
        ))}
      </StyledMenuBox>
    </Container>
  );
};

export default AdminSideBar;