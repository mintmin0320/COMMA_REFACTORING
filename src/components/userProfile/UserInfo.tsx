import styled from 'styled-components';
import OrderStatus from './OrderStatus';

// CSS
const Container = styled.div`
  width: 55%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px #d8d8d8;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const StyledTopBox = styled.div`
  width: 95%;
  height: 45%;
  border-bottom: solid 1px #000;
`;

const StyledUserInfoText = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
`;

const StyledUserTopBox = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  align-items: center;
  border: solid 1px #d8d8d8;
  border-right: none;
  border-bottom: none;
`;

const StyledUserInfoBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledUserInfoTitleBox = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledUserInfoTitle = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: solid 1px #d8d8d8;
  border-bottom: solid 1px #d8d8d8;
`;

const StyledUserInfoDataBox = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledBottomBox = styled.div`
  width: 95%;
  height: 55%;
`;


const UserInfo = () => {
  return (
    <Container>
      <StyledTopBox>
        <StyledUserInfoText>회원정보</StyledUserInfoText>
        <StyledUserTopBox>
          <StyledUserInfoBox>
            <StyledUserInfoTitleBox>
              <StyledUserInfoTitle>
                sd
              </StyledUserInfoTitle>
              <StyledUserInfoTitle>
                sd
              </StyledUserInfoTitle>
              <StyledUserInfoTitle>
                sd
              </StyledUserInfoTitle>
              <StyledUserInfoTitle>
                sd
              </StyledUserInfoTitle>
              <StyledUserInfoTitle>
                sd
              </StyledUserInfoTitle>
            </StyledUserInfoTitleBox>
            <StyledUserInfoDataBox>
              <StyledUserInfoTitle>
                sd
              </StyledUserInfoTitle>
              <StyledUserInfoTitle>
                sd
              </StyledUserInfoTitle>
              <StyledUserInfoTitle>
                sd
              </StyledUserInfoTitle>
              <StyledUserInfoTitle>
                sd
              </StyledUserInfoTitle>
              <StyledUserInfoTitle>
                sd
              </StyledUserInfoTitle>
            </StyledUserInfoDataBox>
          </StyledUserInfoBox>
          <StyledUserInfoBox>
            <StyledUserInfoTitleBox>
              <StyledUserInfoTitle>
                sd
              </StyledUserInfoTitle>
              <StyledUserInfoTitle>
                sd
              </StyledUserInfoTitle>
              <StyledUserInfoTitle>
                sd
              </StyledUserInfoTitle>
              <StyledUserInfoTitle>
                sd
              </StyledUserInfoTitle>
              <StyledUserInfoTitle>

              </StyledUserInfoTitle>
            </StyledUserInfoTitleBox>
            <StyledUserInfoDataBox>
              <StyledUserInfoTitle>
                sd
              </StyledUserInfoTitle>
              <StyledUserInfoTitle>
                sd
              </StyledUserInfoTitle>
              <StyledUserInfoTitle>
                sd
              </StyledUserInfoTitle>
              <StyledUserInfoTitle>
                sd
              </StyledUserInfoTitle>
              <StyledUserInfoTitle>
              </StyledUserInfoTitle>
            </StyledUserInfoDataBox>
          </StyledUserInfoBox>
        </StyledUserTopBox>
      </StyledTopBox>
      <OrderStatus />
    </Container>
  );
};

export default UserInfo;