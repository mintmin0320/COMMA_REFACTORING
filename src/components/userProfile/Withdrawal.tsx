import { useState } from 'react';
import styled from 'styled-components';

// CSS
const StyledWithdrawalBox = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledPasswordInputBox = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const StyledPasswordLabel = styled.label`
  width: 500px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  border: solid 1px #f2f2f2;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

const Withdrawal = () => {
  const [password, setPassword] = useState<string | null>(null);
  const [checkPw, setCheckPw] = useState<boolean>(false);

  return (
    <StyledWithdrawalBox>
      <StyledPasswordInputBox>
        <StyledPasswordLabel htmlFor='pw-input'>
          비밀번호 &nbsp;
          <StyledPasswordInput id='pw-input' />
          <StyledPasswordCheckButton>확인</StyledPasswordCheckButton>
        </StyledPasswordLabel>
      </StyledPasswordInputBox>
      <StyledWithdrawalButtonBox>
        <StyledWithdrawalButton disabled={!checkPw}>
          회원탈퇴
        </StyledWithdrawalButton>
      </StyledWithdrawalButtonBox>
    </StyledWithdrawalBox>
  );
};

export default Withdrawal;