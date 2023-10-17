/*
  회원가입
  - 이메일 인증 코드 요청
  - 이메일 인증 코드 확인
*/

import { useCallback, useState } from 'react';

import InputField from '../../../common/InputField';

// types
import { JoinState } from '../../../../types/auth';

// styles
import * as S from './JoinForm.style';

// types
import { JoinFormProps, VerifyAuthCode } from '../../types/auth.type';

export default function JoinForm({
  reqAuthCode,
  verifyAuthCode,
  signUp
}: JoinFormProps) {
  const [joinForm, setJoinForm] = useState<JoinState>({
    accountId: '',
    password: '',
    name: '',
    email: '',
    major: '',             // 학과
    status: '',            // 학적
    academicNumber: '',    // 학번
  });
  const [code, setCode] = useState<string>(''); // 인증 코드 
  // const [isRequestCode, setIsRequestAuthCode] = useState<boolean>(true);
  // const [isVerifyCode, setIsVerifyAuthCode] = useState<boolean>(true);

  // 이메일 인증 코드 요청
  const handleSendAuthCode = () => {
    reqAuthCode(joinForm.email);
  };

  // 이메일 인증 코드 확인
  const handleVerifyAuthCode = () => {
    const data: VerifyAuthCode = {
      email: joinForm.email,
      code,
    };

    verifyAuthCode(data);
  };

  // 회원가입
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signUp(joinForm);
  };

  // <input>, <textarea>, <select> 태그의 변경 이벤트와 모두 호환
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'code') {
      setCode(value);
    } else {
      setJoinForm((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }
  }, []);

  return (
    <S.JoinContainer>
      <S.Form onSubmit={handleSubmit}>
        <S.InputBox>
          <S.VerifyEmailInputBox>
            <InputField width='100%' height='40px' label='이메일' name='email' value={joinForm.email} onChange={handleChange} />
            <S.VerifyButtonBox>
              <S.VerifyButton type='button' onClick={handleSendAuthCode}>
                인증
              </S.VerifyButton>
            </S.VerifyButtonBox>
          </S.VerifyEmailInputBox>
          <S.VerifyEmailInputBox>
            <InputField width='100%' height='40px' label='인증코드' name='code' value={code} onChange={handleChange} />
            <S.VerifyButtonBox>
              <S.VerifyButton onClick={handleVerifyAuthCode} type='button'>
                확인
              </S.VerifyButton>
            </S.VerifyButtonBox>
          </S.VerifyEmailInputBox>
          <InputField width='100%' height='40px' label='아이디' name='accountId' value={joinForm.accountId} onChange={handleChange} />
          <InputField width='100%' height='40px' label='비밀번호' name='password' type='password' value={joinForm.password} onChange={handleChange} />
          <InputField width='100%' height='40px' label='이름' name='name' value={joinForm.name} onChange={handleChange} />
          <InputField width='100%' height='40px' label='학번' name='academicNumber' value={joinForm.academicNumber} onChange={handleChange} />
          <S.TextLabel>
            학과
            <S.Select
              name='major'
              value={joinForm.major}
              onChange={handleChange}
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
              name='status'
              value={joinForm.status}
              onChange={handleChange}
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
