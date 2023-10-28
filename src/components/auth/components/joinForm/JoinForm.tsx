import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

// types
import { JoinState } from '../../../../types/auth';

// styles
import * as S from './JoinForm.style';

// types
import { VerifyAuthCode } from '../../types/auth.type';
import { JoinFormProps } from '../../../../query-hooks/useAuth/api.type';

export default function JoinForm({
  reqAuthCode,
  verifyAuthCode,
  signUp
}: JoinFormProps) {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<JoinState & { code: string }>();

  const navigate = useNavigate();

  // 회원가입
  const onSubmit = handleSubmit(async (value) => {
    console.log(value);
    try {
      // await signUp.mutateAsync(value);

      // navigate('/auth/login');
    } catch (error) {
      console.log(error)
    }
  });

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
    // reqAuthCode(joinForm.email);
  };

  // 이메일 인증 코드 확인
  const handleVerifyAuthCode = () => {
    // const data: VerifyAuthCode = {
    //   email: joinForm.email,
    //   code,
    // };

    // verifyAuthCode(data);
  };

  return (
    <S.JoinContainer>
      <S.Form onSubmit={onSubmit}>
        <S.InputWrap>
          <S.VerifyEmailInputBox>
            <S.InputField>
              이메일
              <S.Input
                {...register('email', {
                  required: 'Required',
                  pattern: {
                    value: /^[a-zA-Z0-9]+$/,
                    message: '영문과 숫자 조합만 사용해 주세요.'
                  }
                })}
              />
            </S.InputField>
            <S.VerifyButtonBox>
              <S.VerifyButton type='button' onClick={handleSendAuthCode}>
                인증
              </S.VerifyButton>
            </S.VerifyButtonBox>
          </S.VerifyEmailInputBox>
          <S.VerifyEmailInputBox>
            <S.InputField>
              인증코드
              <S.Input
                {...register('code', {
                  required: 'Required',
                  pattern: {
                    value: /^[a-zA-Z0-9]+$/,
                    message: '영문과 숫자 조합만 사용해 주세요.'
                  }
                })}
              />
            </S.InputField>
            <S.VerifyButtonBox>
              <S.VerifyButton onClick={handleVerifyAuthCode} type='button'>
                확인
              </S.VerifyButton>
            </S.VerifyButtonBox>
          </S.VerifyEmailInputBox>
          <S.InputField>
            아이디
            <S.Input
              {...register('accountId', {
                required: 'Required',
                pattern: {
                  value: /^[a-zA-Z0-9]+$/,
                  message: '영문과 숫자 조합만 사용해 주세요.'
                }
              })}
            />
          </S.InputField>
          <S.InputField>
            비밀번호
            <S.Input
              type='password'
              {...register('password', {
                required: 'Required',
                pattern: {
                  value: /^[a-zA-Z0-9]+$/,
                  message: '영문과 숫자 조합만 사용해 주세요.'
                }
              })}
            />
          </S.InputField>
          <S.InputField>
            이름
            <S.Input
              {...register('name', {
                required: 'Required',
                pattern: {
                  value: /^[a-zA-Z0-9]+$/,
                  message: '영문과 숫자 조합만 사용해 주세요.'
                }
              })}
            />
          </S.InputField>
          <S.InputField>
            학번
            <S.Input
              {...register('academicNumber', {
                required: 'Required',
                pattern: {
                  value: /^[a-zA-Z0-9]+$/,
                  message: '영문과 숫자 조합만 사용해 주세요.'
                }
              })}
            />
          </S.InputField>
          <S.TextLabel>
            학과
            <S.Select
              {...register('major', { required: '학과 선택은 필수입니다.' })}
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
              {...register('status', { required: '학적 선택은 필수입니다.' })}
            >
              <option value='' disabled>
                선택
              </option>
              <option value='Enrolled'>재학</option>
              <option value='OnLeave'>휴학</option>
              <option value='Graduated'>졸업</option>
            </S.Select>
          </S.TextLabel>
        </S.InputWrap>
        <S.ButtonBox>
          <S.Button>
            회원가입
          </S.Button>
        </S.ButtonBox>
      </S.Form >
    </S.JoinContainer>
  );
};
