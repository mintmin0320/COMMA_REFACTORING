/*
  회원가입
  - 이메일 인증 코드 요청
  - 이메일 인증 코드 확인
*/

import { useCallback, useState } from 'react';

import InputField from '../common/InputField';

// types
import { JoinState } from '../../types/auth';

// styles
import * as S from './JoinForm.style';

// types
import { JoinFormProps } from './types/auth.type';

export default function JoinForm({
  reqAuthCode,
  verifyAuthCode,
  signUp
}: JoinFormProps) {
  const [joinForm, setJoinForm] = useState<JoinState>({
    accountId: '',         // 아이디
    password: '',
    name: '',              // 이름(실명)
    email: '',
    major: '',             // 학과
    status: '',            // 학적
    academicNumber: '',    // 학번
  });
  const [code, setCode] = useState<string | null>(''); // 인증 코드 
  // const [isRequestCode, setIsRequestAuthCode] = useState<boolean>(true);
  // const [isVerifyCode, setIsVerifyAuthCode] = useState<boolean>(true);

  // 이메일 인증 코드 요청
  const handleSendAuthCode = () => {
    reqAuthCode(joinForm.email);
  };

  // 이메일 인증 코드 확인
  const handleVerifyAuthCode = () => {
    const data: {
      email: string | null; code: string | null
    } = {
      email: joinForm.email,
      code,
    };

    verifyAuthCode(data);
  };

  // 회원가입
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: JoinState = {
      accountId: joinForm.accountId,
      password: joinForm.password,
      name: joinForm.name,
      email: joinForm.email,
      major: joinForm.major,
      status: joinForm.status,
      academicNumber: joinForm.academicNumber,
    };

    signUp(data);
  };

  const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setJoinForm((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }, []);

  return (
    <S.JoinContainer>
      <S.Form onSubmit={(e) => handleOnSubmit(e)}>
        <S.InputBox>
          <S.VerifyEmailInputBox>
            <InputField width='100%' height='40px' label='이메일' name='email' value={joinForm.email || ''} onChange={handleOnChange} />
            <S.VerifyButtonBox>
              <S.VerifyButton type='button' onClick={handleSendAuthCode}>
                인증
              </S.VerifyButton>
            </S.VerifyButtonBox>
          </S.VerifyEmailInputBox>
          <S.VerifyEmailInputBox>
            <InputField width='100%' height='40px' label='인증코드' name='code' value={code || ''} onChange={(e) => setCode(e.target.value)} />
            <S.VerifyButtonBox>
              <S.VerifyButton onClick={handleVerifyAuthCode} type='button'>
                확인
              </S.VerifyButton>
            </S.VerifyButtonBox>
          </S.VerifyEmailInputBox>
          <InputField width='100%' height='40px' label='아이디' name='accountId' value={joinForm.accountId || ''} onChange={handleOnChange} />
          <InputField width='100%' height='40px' label='비밀번호' name='password' value={joinForm.password || ''} onChange={handleOnChange} />
          <InputField width='100%' height='40px' label='이름' name='name' value={joinForm.name || ''} onChange={handleOnChange} />
          <InputField width='100%' height='40px' label='학번' name='academicNumber' value={joinForm.academicNumber || ''} onChange={handleOnChange} />
          <S.TextLabel>
            학과
            <S.Select
              value={joinForm.major || ''}
              onChange={(e) => {
                setJoinForm({ ...joinForm, major: e.target.value });
              }}
              required
            >
              <option value='' disabled>
                선택
              </option>
              <option value='SoftwareEngineering'>소프트웨어공학</option>
              <option value='InformationEngineering'>정보공학</option>
              <option value='AIEngineering'>인공지능</option>
            </S.Select>
          </S.TextLabel>
          <S.TextLabel>
            학적
            <S.Select
              value={joinForm.status || ''}
              onChange={(e) => {
                setJoinForm({ ...joinForm, status: e.target.value });
              }}
              required
            >
              <option value='' disabled>
                선택
              </option>
              <option value='Enrolled'>재학</option>
              <option value='OnLeave'>휴학</option>
              <option value='Graduated'>졸업</option>
            </S.Select>
          </S.TextLabel>
        </S.InputBox>
        <S.ButtonBox>
          <S.Button>
            회원가입
          </S.Button>
        </S.ButtonBox>
      </S.Form >
    </S.JoinContainer>
  );
};
