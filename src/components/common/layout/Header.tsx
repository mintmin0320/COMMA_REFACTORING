import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ScrollProgressBar from '../ScrollProgressBar';

//types
import { MenuItem } from '../../../types/common';

// CSS
const Container = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: solid 1px #D8D8D8;
  background-color: #fff;
  position: sticky;
  top: 0px;
  z-index: 1;
`;

const StyledHeaderWrap = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLogoBox = styled(Link)`
  width: 30%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
`;

const StyledLogoImg = styled.img`
  width: 30px;
  height: 30px;
`;

const StyledLogoTitle = styled.div`
  width: 30%;
  height: 45px;
  display: flex;
  align-items: center;
  font-size: 25px;
  font-weight: bolder;
  margin-left: 8px;
`;

const StyledMenuList = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledMenuLinkBox = styled(Link)`
  width: 18%;
  height: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  color: #000;

  &:hover{  
    background-color : #F2F2F2;
  }
`;

const Header = () => {
  const headerItem: MenuItem[] = [
    { name: '공지사항', path: '/notice' },
    { name: '상품', path: '/product' },
    { name: '커뮤니티', path: '/community' },
    { name: '메뉴4', path: '/' },
  ];

  return (
    <Container>
      <StyledHeaderWrap>
        <StyledLogoBox to='/'>
          <StyledLogoImg src='./images/blue_bg.svg' />
          <StyledLogoTitle>
            COMMA
          </StyledLogoTitle>
        </StyledLogoBox>
        <StyledMenuList>
          {headerItem.map(({ name, path }) => (
            <StyledMenuLinkBox
              key={name}
              to={path}
            >
              {name}
            </StyledMenuLinkBox>
          ))}
        </StyledMenuList>
      </StyledHeaderWrap>
      <ScrollProgressBar />
    </Container>
  );
};

export default Header;