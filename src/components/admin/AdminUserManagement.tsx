import styled from 'styled-components';

import AdminUserList from './AdminUserList';

const StyledAdminUserInfoContainer = styled.div`
  width: calc(100% - 350px);
  height: 100%;
`;

const StyledClassificationBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  border-bottom: solid 1px #d8d8d8;
`;

const StyledSearchBox = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 400px;
  height: 40px;
  border: solid 1px #BDBDBD;
  border-radius: 8px;
`;

const AdminUserManagement = () => {
  return (
    <StyledAdminUserInfoContainer>
      <StyledClassificationBox>
        <StyledSearchBox>
          <StyledInput />
        </StyledSearchBox>
      </StyledClassificationBox>
      <AdminUserList />
    </StyledAdminUserInfoContainer>
  );
};

export default AdminUserManagement;