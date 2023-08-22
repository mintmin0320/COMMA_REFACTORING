import styled from 'styled-components';

// CSS
const Container = styled.div`
  width: 55%;
  position: relative;   // 이 부분 추가
  padding-bottom: 90px; // BottomBox의 높이만큼 패딩 추가
`;

const StyledBasketTopBox = styled.div`
  width: 100%;
  height: 80px;
  background-color: #fff;
  border: solid 1px #d8d8d8;
  border-radius: 8px;
`;

const StyledBasketList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 25px;

  @media screen and (min-width: 1500px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StyledBasketItem = styled.div`
  width: 100%;
  height: 120px;
  background-color: #fff;
  border: solid 1px #d8d8d8;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 25px;
`;

const StyledBasketBottomBox = styled.div`
  width: 100%;
  height: 90px;
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #d8d8d8;
  border-radius: 8px;
  background-color: #fff;
  margin-top: 30px;
`;

const StyledBasketOrderButton = styled.button`
  width: 20%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  font-size: 20px;
  border: solid 1px #d8d8d8;
  border-radius: 8px;
`;

const Basket = () => {
  return (
    <Container>
      <StyledBasketTopBox />
      <StyledBasketList>

        <StyledBasketItem></StyledBasketItem>
        <StyledBasketItem></StyledBasketItem>
        <StyledBasketItem></StyledBasketItem>
        <StyledBasketItem></StyledBasketItem>
        <StyledBasketItem></StyledBasketItem>
        <StyledBasketItem></StyledBasketItem>
        <StyledBasketItem></StyledBasketItem>
        <StyledBasketItem></StyledBasketItem>
        <StyledBasketItem></StyledBasketItem>
        <StyledBasketItem></StyledBasketItem>
        <StyledBasketItem></StyledBasketItem>
        <StyledBasketItem></StyledBasketItem>
        <StyledBasketItem></StyledBasketItem>
        <StyledBasketItem></StyledBasketItem>
        <StyledBasketItem></StyledBasketItem>
        <StyledBasketItem></StyledBasketItem>
        <StyledBasketItem></StyledBasketItem>


      </StyledBasketList>
      <StyledBasketBottomBox>
        <StyledBasketOrderButton>
          주문하기
        </StyledBasketOrderButton>
      </StyledBasketBottomBox>
    </Container>
  );
};

export default Basket;