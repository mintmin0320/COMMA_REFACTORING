/*
  비밀번호 변경 컴포넌트
  - 회원탈퇴와 공통되는 style-component 컴포넌트 모듈화 필요
*/

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
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const StyledPasswordLabel = styled.label`
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
  border: solid 1px silver;
`;

const PasswordChangeForm = () => {
  const [checkPW, setCheckPW] = useState<boolean>(false);

  return (
    <StyledWithdrawalBox>
      <StyledPasswordInputBox>
        <StyledPasswordLabel htmlFor='pw-input' style={{ borderBottom: 'none' }}>
          기존 비밀번호 &nbsp;
          <StyledPasswordInput id='pw-input' />
          <StyledPasswordCheckButton>확인</StyledPasswordCheckButton>
        </StyledPasswordLabel>
        <StyledPasswordLabel htmlFor='pw-input'  >
          변경 비밀번호 &nbsp;
          <StyledPasswordInput id='pw-input' disabled={!checkPW} />
          <StyledPasswordCheckButton disabled={!checkPW}>확인</StyledPasswordCheckButton>
        </StyledPasswordLabel>
      </StyledPasswordInputBox>
    </StyledWithdrawalBox>
  );
};

export default PasswordChangeForm;