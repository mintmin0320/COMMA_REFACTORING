import { useState } from 'react';
import styled from 'styled-components';

// styles
import { Container } from '../styles/CommonStyles';

// CSS
const StyledPasswordInputBox = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const StyledInputLabel = styled.label`
  width: 450px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #d8d8d8;
`;

const StyledPasswordInput = styled.input`
  width: 240px;
  height: 22px;
  border: solid 1px #d8d8d8;
`;

const StyledPasswordCheckButton = styled.button`
  width: 40px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
`;

const StyledWithdrawalButtonBox = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledWithdrawalButton = styled.button`
  width: 130px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;
  border: solid 1px silver;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

const Withdrawal = () => {
  const [checkPw, setCheckPw] = useState<boolean>(false);

  return (
    <Container>
      <StyledPasswordInputBox>
        <StyledInputLabel htmlFor='pw-input'>
          비밀번호 &nbsp;&nbsp;&nbsp;&nbsp;
          <StyledPasswordInput id='pw-input' />
          <StyledPasswordCheckButton>확인</StyledPasswordCheckButton>
        </StyledInputLabel>
      </StyledPasswordInputBox>
      <StyledWithdrawalButtonBox>
        <StyledWithdrawalButton disabled={!checkPw}>
          회원탈퇴
        </StyledWithdrawalButton>
      </StyledWithdrawalButtonBox>
    </Container>
  );
};

export default Withdrawal;