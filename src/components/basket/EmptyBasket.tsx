import styled from 'styled-components';

// CSS
const StyledEmptyBasketBox = styled.div`
  width: 100%;
  height: 100px;
  background-color: #fff;
`;

const EmptyBasket = () => {
  return (
    <StyledEmptyBasketBox>
      상품 계속 구경하기
    </StyledEmptyBasketBox>
  );
};

export default EmptyBasket;