import { useState } from 'react';
import styled from 'styled-components';

// components
import InputField from '../common/InputField';

// hooks
import { useSignUp } from './hooks/useAuth';
import { useReqAuthCode, useVerifyAuthCode } from './hooks/useEmailAuthCode';

// types
import { JoinState } from '../../types/auth';

// styles
const Form = styled.form`
  width: 60%;
  height: 100%;
  background-color: #fff;
  border: solid 1px #d8d8d8;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledDataInputBox = styled.div`
  width: 100%;
  height: 85%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  /* place-items: center; */
  margin-left: 30px;
  /* padding-left: 40px; */
  /* background-color: red; */
`;

const StyledJoinFormInputFieldBox = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: flex-end;
`;

const StyledEmailCheckBtnBox = styled.div`
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
  cursor: pointer;
`;

const StyledTextLabel = styled.label`
  width: 60%;
  height: 55px;
  display: flex;
  flex-direction: column;
  font-size: 15px;
  `;

const StyledSelect = styled.select`
  width: 100%;
  height: 41px;
  border: solid 1px #d8d8d8;
  border-radius: 8px;
  margin-top: 5px;
`;

const StyledSubmitBtnBox = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSubmitBtn = styled.button`
  width: 25%;
  height: 50px;
  background-color: #0064ff;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bolder;
  cursor: pointer;
`;

const JoinForm = () => {
  const reqAuthCode = useReqAuthCode();
  const verifyAuthCode = useVerifyAuthCode();
  const signUp = useSignUp();

  const [form, setForm] = useState<JoinState>({
    accountId: '',         // 아이디
    password: '',
    name: '',              // 이름(실명)
    email: '',
    major: '',             // 학과
    status: '',            // 학적
    academicNumber: '',    // 학번
  });
  const [code, setCode] = useState<string | null>(''); // 인증 코드 
  const [isRequestCode, setIsRequestAuthCode] = useState<boolean>(true);
  const [isVerifyCode, setIsVerifyAuthCode] = useState<boolean>(true);

  // 이메일 인증 코드 요청
  const handleSendAuthCode = () => {
    reqAuthCode(form.email);
  };

  // 이메일 인증 코드 확인
  const handleVerifyAuthCode = () => {
    const data: {
      email: string | null; code: string | null
    } = {
      email: form.email,
      code,
    };

    verifyAuthCode(data);
  };

  // 회원가입
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: JoinState = {
      accountId: form.accountId,
      password: form.password,
      name: form.name,
      email: form.email,
      major: form.major,
      status: form.status,
      academicNumber: form.academicNumber,
    };

    signUp(data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <Form onSubmit={(e) => handleOnSubmit(e)}>
      <StyledDataInputBox>
        <StyledJoinFormInputFieldBox>
          <InputField width='100%' height='40px' label='이메일' name='email' value={form.email || ''} onChange={handleChange} />
          <StyledEmailCheckBtnBox>
            <StyledEmailCheckBtn type='button' onClick={handleSendAuthCode}>
              인증
            </StyledEmailCheckBtn>
          </StyledEmailCheckBtnBox>
        </StyledJoinFormInputFieldBox>
        <StyledJoinFormInputFieldBox>
          <InputField width='100%' height='40px' label='인증코드' name='code' value={code || ''} onChange={(e) => setCode(e.target.value)} />
          <StyledEmailCheckBtnBox>
            <StyledEmailCheckBtn onClick={handleVerifyAuthCode} type='button' disabled={!isRequestCode}>
              확인
            </StyledEmailCheckBtn>
          </StyledEmailCheckBtnBox>
        </StyledJoinFormInputFieldBox>
        <InputField width='100%' height='40px' label='아이디' name='accountId' value={form.accountId || ''} onChange={handleChange} />
        <InputField width='100%' height='40px' label='비밀번호' name='password' value={form.password || ''} onChange={handleChange} />
        <InputField width='100%' height='40px' label='이름' name='name' value={form.name || ''} onChange={handleChange} />
        <InputField width='100%' height='40px' label='학번' name='academicNumber' value={form.academicNumber || ''} onChange={handleChange} />
        <StyledTextLabel>
          학과
          <StyledSelect
            value={form.major || ''}
            onChange={(e) => {
              setForm({ ...form, major: e.target.value });
            }}
          >
            <option value='' disabled>
              선택
            </option>
            <option value='SoftwareEngineering'>소프트웨어공학</option>
            <option value='InformationEngineering'>정보공학</option>
            <option value='AIEngineering'>인공지능</option>
          </StyledSelect>
        </StyledTextLabel>
        <StyledTextLabel>
          학적
          <StyledSelect
            value={form.status || ''}
            onChange={(e) => {
              setForm({ ...form, status: e.target.value });
            }}
          >
            <option value='' disabled>
              선택
            </option>
            <option value='Enrolled'>재학</option>
            <option value='OnLeave'>휴학</option>
            <option value='Graduated'>졸업</option>
          </StyledSelect>
        </StyledTextLabel>
      </StyledDataInputBox>
      <StyledSubmitBtnBox>
        <StyledSubmitBtn disabled={!isVerifyCode}>
          회원가입
        </StyledSubmitBtn>
      </StyledSubmitBtnBox>
    </Form >
  );
};

export default JoinForm;