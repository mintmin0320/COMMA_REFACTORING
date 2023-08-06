import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  return (
    <Container>
      <HeaderWrap>
        <StyledLogoBox>
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
          <StyledMenuLinkBox to={'/'}>메뉴2</StyledMenuLinkBox>
          <StyledMenuLinkBox to={'/'}>메뉴3</StyledMenuLinkBox>
          <StyledMenuLinkBox to={'/'}>메뉴4</StyledMenuLinkBox>
        </StyledMenuList>
      </HeaderWrap>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  border-bottom: solid 1px #D8D8D8;
  background-color: #fff;
  position: sticky;
  top: 0px;
  z-index: 1;
`;

const HeaderWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLogoBox = styled.div`
  width: 30%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
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

// const StyledMenuBtn = styled.div`
//   width: 23%;
//   height: 40%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: pink;
// `;

const StyledMenuLinkBox = styled(NavLink)`
  width: 15%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;

  &:hover{  
    background-color : #F2F2F2;
  }
`;