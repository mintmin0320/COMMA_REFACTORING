import { useState } from 'react';
import { styled } from 'styled-components';

import InputField from '../InputField';

// apis
import { JoinState } from '../../../types/auth';

// styles
const StyledJoinForm = styled.form`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #fff;
  border: solid 1px #d8d8d8;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledJoinFormInputFieldBox = styled.div`
  width: 75%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const EmailCheckBtnBox = styled.div`
  width: 55px;
  height: 38px;
  margin-left: 20px;
  display: flex;
  align-items: center;
`;

const StyledEmailCheckBtn = styled.button`
  width: 100%;
  height: 25px;
  background-color: #0064ff;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: bolder;
`;

const StyledSubmitBtn = styled.button`
  width: 55%;
  height: 35px;
  background-color: #0064ff;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: bolder;
`;

const JoinForm = () => {
  const [form, setForm] = useState<JoinState>({
    email: ' ',
    authNum: ' ',
    password: ' ',
    name: ' ',
    telNum: ' ',
    studentNum: ' ',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value
    }));

    console.log(form)
  };

  return (
    <StyledJoinForm>
      <StyledJoinFormInputFieldBox>
        <InputField width='100%' height='40px' label="이메일" name="email" value={form.email || undefined} onChange={handleChange} />
        <EmailCheckBtnBox>
          <StyledEmailCheckBtn type='button'>
            인증
          </StyledEmailCheckBtn>
        </EmailCheckBtnBox>
      </StyledJoinFormInputFieldBox>
      <StyledJoinFormInputFieldBox>
        <InputField width='100%' height='40px' label="인증코드" name="authNum" value={form.authNum || undefined} onChange={handleChange} />
        <EmailCheckBtnBox>
          <StyledEmailCheckBtn type='button'>
            확인
          </StyledEmailCheckBtn>
        </EmailCheckBtnBox>
      </StyledJoinFormInputFieldBox>
      <InputField width='75%' height='40px' label="비밀번호" name="password" value={form.password || undefined} onChange={handleChange} />
      <InputField width='75%' height='40px' label="이름" name="name" value={form.name || undefined} onChange={handleChange} />
      <InputField width='75%' height='40px' label="전화번호" name="telNum" value={form.telNum || undefined} placeholder='"-" 없이 입력해 주세요.' onChange={handleChange} />
      <InputField width='75%' height='40px' label="학번" name="studentNum" value={form.studentNum || undefined} placeholder='학번을 입력해 주세요.' onChange={handleChange} />
      <StyledSubmitBtn>회원가입</StyledSubmitBtn>
    </StyledJoinForm>
  );
};

export default JoinForm;