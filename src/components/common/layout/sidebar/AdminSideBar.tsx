import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

// common-style
import { StyledLogoImg, StyledLogoTitle } from '../../../styles/CommonStyles';

// types
import { MenuItem } from '../../../../types/common';

// CSS
const Container = styled.div`
  width: 350px;
  height: 100%;
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

const StyledMenu = styled(NavLink)`
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
`;

const AdminSideBar = () => {
  const menuItems: MenuItem[] = [
    { name: '회원목록', path: '/admin/user-info' },
    { name: '주문목록', path: '/admin/order-list' },
    { name: '상품관리', path: '/admin/product-management' },
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
            style={({ isActive }) => ({
              color: isActive ? 'white' : '#0064ff',
              backgroundColor: isActive ? '#0064ff' : 'white',
            })}
          >
            {item.name}
          </StyledMenu>
        ))}
      </StyledMenuBox>
    </Container>
  );
};

export default AdminSideBar;