import { styled } from 'styled-components';

function Diet() {
  return (
    <Container>
      <StyledDateBox>
        2023-08-07
      </StyledDateBox>
      <StyledDivisionBox>
      </StyledDivisionBox>
      <StyledMenuBox>
        <StyledMenu>- 백미밥</StyledMenu>
        <StyledMenu>- 닭가슴살순살튀김</StyledMenu>
        <StyledMenu>- 메추리알조림</StyledMenu>
        <StyledMenu>- 두부시금치무침</StyledMenu>
        <StyledMenu>- 배추김치</StyledMenu>
        <StyledMenu>- 두부스팸김치전골</StyledMenu>
      </StyledMenuBox>
    </Container>
  );
};

export default Diet;

const Container = styled.div`
  width: 80%;
  height: 160px;
  background-color: #fff;
  border: solid 1px #d8d8d8;
  border-radius: 8px;
`;

const StyledDateBox = styled.div`
  width: 100%;
  height: 40px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px #d8d8d8;
`;

const StyledDivisionBox = styled.div`
  width: 100%;
  display: flex;
`;

const StyledMenuBox = styled.div`
  width: 100%;
  height: 120px;
  display: grid;
  place-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr;
`;

const StyledMenu = styled.p`
  width: 83%;
  height: 18px;
  font-size: 15px;
  display: flex;
  padding-top: 2px;
`;
