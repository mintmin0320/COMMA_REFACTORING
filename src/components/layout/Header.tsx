import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import ScrollProgressBar from '../common/ScrollProgressBar';

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
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLogoBox = styled(NavLink)`
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

const StyledMenuLinkBox = styled(NavLink)`
  width: 15%;
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
          <StyledMenuLinkBox
            to={'/notice'}
            style={({ isActive }) => ({
              color: isActive ? '#fff' : '#000',
              backgroundColor: isActive ? '#0064ff' : '#fff',
            })}
          >
            공지사항
          </StyledMenuLinkBox>
          <StyledMenuLinkBox
            to={'/product'}
            style={({ isActive }) => ({
              color: isActive ? '#fff' : '#000',
              backgroundColor: isActive ? '#0064ff' : '#fff',
            })}
          >
            상품
          </StyledMenuLinkBox>
          <StyledMenuLinkBox
            to={'/community'}
            style={({ isActive }) => ({
              color: isActive ? '#fff' : '#000',
              backgroundColor: isActive ? '#0064ff' : '#fff',
            })}
          >
            커뮤니티
          </StyledMenuLinkBox>
          <StyledMenuLinkBox to={'/'}>메뉴4</StyledMenuLinkBox>
        </StyledMenuList>
      </StyledHeaderWrap>
      <ScrollProgressBar />
    </Container>
  );
};

export default Header;