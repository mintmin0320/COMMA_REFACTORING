import styled from 'styled-components';

// CSS
const StyledUserInfoBox = styled.div`
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

const StyledUserInfoContainer = styled.div`
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
  height: 25%;
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

const UserInfo = () => {
  return (
    <StyledUserInfoBox>
      <StyledUserInfoText>회원정보</StyledUserInfoText>
      <StyledUserTopBox>
        <StyledUserInfoContainer>
          <StyledUserInfoTitleBox>
            <StyledUserInfoTitle>
              이메일
            </StyledUserInfoTitle>
            <StyledUserInfoTitle>
              이름
            </StyledUserInfoTitle>
            <StyledUserInfoTitle>
              전화번호
            </StyledUserInfoTitle>
            <StyledUserInfoTitle>
              등급
            </StyledUserInfoTitle>
          </StyledUserInfoTitleBox>
          <StyledUserInfoDataBox>
            <StyledUserInfoTitle>
              mintmin0320@gmail.com
            </StyledUserInfoTitle>
            <StyledUserInfoTitle>
              박하민
            </StyledUserInfoTitle>
            <StyledUserInfoTitle>
              01012345678
            </StyledUserInfoTitle>
            <StyledUserInfoTitle>
              근로
            </StyledUserInfoTitle>
          </StyledUserInfoDataBox>
        </StyledUserInfoContainer>
        <StyledUserInfoContainer>
          <StyledUserInfoTitleBox>
            <StyledUserInfoTitle>
              학번
            </StyledUserInfoTitle>
            <StyledUserInfoTitle>
              학과
            </StyledUserInfoTitle>
            <StyledUserInfoTitle>
              분반
            </StyledUserInfoTitle>
            <StyledUserInfoTitle>
              학적
            </StyledUserInfoTitle>
          </StyledUserInfoTitleBox>
          <StyledUserInfoDataBox>
            <StyledUserInfoTitle>
              20181234
            </StyledUserInfoTitle>
            <StyledUserInfoTitle>
              컴퓨터소프트웨어공학과
            </StyledUserInfoTitle>
            <StyledUserInfoTitle>
              YA
            </StyledUserInfoTitle>
            <StyledUserInfoTitle>
              졸업
            </StyledUserInfoTitle>
          </StyledUserInfoDataBox>
        </StyledUserInfoContainer>
      </StyledUserTopBox>
    </StyledUserInfoBox>
  );
};

export default UserInfo;