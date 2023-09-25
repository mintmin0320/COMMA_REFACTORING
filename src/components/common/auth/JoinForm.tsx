import { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from 'react-query';

import InputField from '../InputField';

// apis
import { fetchSignUp, fetchEmailAuthCode, fetchVerifyAuthCode } from '../../../apis/auth';

// types
import { JoinState } from '../../../types/auth';
import { useNavigate } from 'react-router-dom';

// styles
const StyledJoinForm = styled.form`
  width: 60%;
  height: 100%;
  background-color: #fff;
  border: solid 1px #d8d8d8;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledDataInputBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const StyledLeftFormBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  justify-content: space-around;
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

// 학과, 학년, 학적 선택
const StyledRightFormBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
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

const StyledSubmitBtn = styled.button`
  width: 55%;
  height: 55px;
  background-color: #0064ff;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bolder;
  cursor: pointer;
`;

const JoinForm = () => {
  const navigate = useNavigate();
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
  const [isRequestCode, setIsRequestAuthCode] = useState<boolean>(false); // 이메일 코드 요청 여부
  const [isVerifyCode, setIsVerifyAuthCode] = useState<boolean>(true); // 이메일 코드 확인

  const {
    mutate: mutateEmailAuthCode,
    isLoading: isEmailAuthLoading,
  } = useMutation(fetchEmailAuthCode, {
    onSuccess: () => {
      setIsRequestAuthCode(true);

      alert('인증 코드가 이메일로 전송되었습니다.');
    },
    onError: (error) => {
      console.log(error);
      alert('인증 코드 요청 실패!');
    }
  });

  // 이메일 인증 코드 확인
  const {
    mutate: mutateVerifyAuthCode,
    isLoading: isVerifyAuthCode,
  } = useMutation(fetchVerifyAuthCode, {
    onSuccess: () => {
      alert('이메일 코드 인증 성공');
    },
    onError: (error) => {
      console.log(error);
      alert('이메일 코드 인증 실패!');
    }
  });

  const {
    mutate: mutateSignUp,
    isLoading: isSignUpLoading,
  } = useMutation(fetchSignUp, {
    onSuccess: () => {
      alert('회원가입 성공');
      navigate('./auth/login');
    },
    onError: (error) => {
      console.log(error);
      alert('회원가입 실패!');
    }
  });

  // 이메일 인증 코드 요청
  const handleSendAuthCode = () => {
    mutateEmailAuthCode({ email: form.email });
  };

  // 이메일 인증 코드 확인
  const handleVerifyAuthCode = () => {
    const data: { email: string | null; code: string | null } = {
      email: form.email,
      code,
    };

    mutateVerifyAuthCode(data);
  };

  // 회원가입
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const data: JoinState = {
        accountId: form.accountId,
        password: form.password,
        name: form.name,
        email: form.email,
        major: form.major,
        status: form.status,
        academicNumber: form.academicNumber,
      };

      mutateSignUp(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(form)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <StyledJoinForm onSubmit={(e) => handleOnSubmit(e)}>
      <StyledDataInputBox>
        <StyledLeftFormBox>
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
        </StyledLeftFormBox>
        <StyledRightFormBox>
          <InputField width='100%' height='40px' label='학번' name='academicNumber' value={form.academicNumber || ''} placeholder='학번을 입력해 주세요.' onChange={handleChange} />
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
          <StyledSubmitBtn disabled={!isVerifyCode}>
            {isSignUpLoading ? 'please wait' : '회원가입'}
          </StyledSubmitBtn>
        </StyledRightFormBox>
      </StyledDataInputBox>
    </StyledJoinForm >
  );
};

export default JoinForm;