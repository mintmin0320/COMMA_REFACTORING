import styled from 'styled-components'

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
      </HeaderWrap>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  border-bottom: solid 1px #D8D8D8;
  background-color: #fff;
  position: sticky;
  top: 0px;
`;

const HeaderWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const StyledLogoBox = styled.div`
  width: 30%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;

`;

const StyledLogoImg = styled.img`
  width: 45px;
  height: 45px;
`;

const StyledLogoTitle = styled.div`
  width: 30%;
  height: 45px;
  display: flex;
  align-items: center;
  font-size: 30px;
  font-weight: bolder;
  margin-left: 8px;
`;
