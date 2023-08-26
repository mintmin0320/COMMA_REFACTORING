import styled from 'styled-components';

// CSS
const StyledOrderStatusBox = styled.div`
  width: 95%;
  height: 55%;
  display: flex;
  flex-direction: column;
  /* align-items: flex-end; */
`;

const StyledOrderStatusTabBox = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: flex-end;
`;

const StyledOrderStatusTab = styled.div`
  width: 15%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #d8d8d8;
  border-radius: 8px 8px 0 0;
  border-bottom: solid 1px #fff;
  /* margin-right: 2px; */
`;

const StyledOrderStatusBlankTab = styled.div`
  width: 55%;
  height: 45px;
  border-bottom: solid 1px #d8d8d8;
`;

const StyledOrderStatusViewBox = styled.div`
  width: 100%;
  height: 80%;
  border: solid 1px #d8d8d8;
  /* border-radius: 8px 8px 0 0; */
  border-top: none;
  /* background-color: red; */
`;

const OrderStatus = () => {
  return (
    <StyledOrderStatusBox>
      <StyledOrderStatusTabBox>
        <StyledOrderStatusTab>항목1</StyledOrderStatusTab>
        <StyledOrderStatusTab>항목2</StyledOrderStatusTab>
        <StyledOrderStatusTab>항목3</StyledOrderStatusTab>
        <StyledOrderStatusBlankTab />
      </StyledOrderStatusTabBox>
      <StyledOrderStatusViewBox>

      </StyledOrderStatusViewBox>
    </StyledOrderStatusBox>
  );
};

export default OrderStatus;