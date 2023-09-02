import styled from 'styled-components';

// dummy-data
import userInfoData from './userInfoData.json';

const StyledUserInfoListWrap = styled.div`
  width: 100%;
  height: calc(100% - 101px);
  background-color: #fff;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledUserInfoBox = styled.div`
  width: 100%;
  height: 120px;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(5, 1fr);
  border-bottom: solid 1px #d8d8d8;
`;

const StyledUserInfo = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledBanUserButton = styled.button`
  width: 65px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const AdminUserList = () => {
  return (
    <StyledUserInfoListWrap>
      {userInfoData.map((item) => (
        <StyledUserInfoBox key={item.userId}>
          <StyledUserInfo>{item.userEmail}</StyledUserInfo>
          <StyledUserInfo>{item.userName}</StyledUserInfo>
          <StyledUserInfo>{item.userPhoneNum}</StyledUserInfo>
          <StyledUserInfo>{item.userStatus}</StyledUserInfo>
          <StyledUserInfo>{item.userStudentNum}</StyledUserInfo>
          <StyledUserInfo>{item.userMajor}</StyledUserInfo>
          <StyledUserInfo>{item.userGrade}</StyledUserInfo>
          <StyledUserInfo>{item.userClass}</StyledUserInfo>
          <StyledUserInfo>{item.userTier}</StyledUserInfo>
          <StyledBanUserButton>추방</StyledBanUserButton>
        </StyledUserInfoBox>
      ))}
    </StyledUserInfoListWrap>
  );
};

export default AdminUserList;