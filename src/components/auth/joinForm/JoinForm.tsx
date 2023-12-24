import { useState } from 'react';
import { useForm } from 'react-hook-form';

import * as S from './JoinForm.style';

import renderToast from '../../../lib/toast';

import {
  useRequestEmail,
  useSignUp,
  useVerifyAuthCode
} from '../../../query-hooks/useAuth';

import { JoinState, VerifyAuthCode } from '../../../types/auth';

export default function JoinForm() {
  const {
    handleSubmit,
    register,
    watch,
    trigger,
    formState: { errors }
  } = useForm<JoinState & { code: string }>();

  const [isRequestCode, setIsRequestCode] = useState<Boolean>(false);
  const [isValidCode, setIsValidCode] = useState<Boolean>(false);

  const email = watch('email');
  const code = watch('code');

  const { mutate: requestEmail } = useRequestEmail();
  const { mutate: verifyAuthCode } = useVerifyAuthCode();
  const { mutate: signUp } = useSignUp();

  // 이메일 인증 코드 요청
  const handleRequestEmail = async () => {
    if (!await trigger('email')) {
      renderToast({
        type: 'error',
        message: '유효하지 않은 이메일 형식입니다. \n 동양미래대 이메일 주소를 사용해 주세요.'
      });

      return;
    }

    requestEmail(email, {
      onSuccess: () => {
        setIsRequestCode(true);
      }
    });
  };

  // 이메일 인증 코드 확인
  const handleVerifyAuthCode = async () => {
    if (!await trigger('code')) {
      renderToast({
        type: 'error',
        message: '유효하지 않은 인증 코드입니다.',
      });

      return;
    }

    const params: VerifyAuthCode = {
      email,
      code
    };

    verifyAuthCode(params, {
      onSuccess: () => {
        setIsValidCode(true);
      }
    });
  };

  // 회원가입
  const onSubmit = async ({
    email,
    account_id,
    password,
    name,
    major,
    status,
    academic_number
  }: JoinState) => {
    if (!isValidCode) {
      alert('이메일 인증을 완료해 주세요.');

      return;
    }

    signUp({
      email,
      account_id,
      password,
      name,
      major,
      status,
      academic_number
    });
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.InputWrap>
        <S.VerifyEmailInputBox>
          <S.InputField>
            <S.InputInfo>이메일</S.InputInfo>
            <S.Input
              {...register('email', {
                pattern: {
                  value: /^[a-zA-Z0-9]+@m365\.dongyang\.ac\.kr$/,
                  message: '유효하지 않은 이메일 형식입니다. 동양대 이메일 주소를 사용해 주세요.'
                }
              })}
            />
            <S.ValidBox>
            </S.ValidBox>
          </S.InputField>
          <S.VerifyButtonBox>
            <S.VerifyButton
              type='button'
              onClick={handleRequestEmail}
              aria-label='이메일 인증'
            >
              인증
            </S.VerifyButton>
          </S.VerifyButtonBox>
        </S.VerifyEmailInputBox>
        <S.VerifyEmailInputBox>
          <S.VerifyEmailInputBox>
            <S.InputField>
              <S.InputInfo>인증코드</S.InputInfo>
              <S.Input
                maxLength={6}
                disabled={!isRequestCode}
                {...register('code', {
                  maxLength: { value: 6, message: '코드는 6자리여야 합니다.' },
                  minLength: { value: 6, message: '코드는 6자리여야 합니다.' },
                  pattern: {
                    value: /^[0-9]{6}$/,
                    message: '숫자만 입력해 주세요.'
                  }
                })}
              />
              <S.ValidBox>
              </S.ValidBox>
            </S.InputField>
            <S.VerifyButtonBox>
              <S.VerifyButton
                type='button'
                onClick={handleVerifyAuthCode}
                aria-label='인증코드 확인'
                disabled={!isRequestCode}
              >
                확인
              </S.VerifyButton>
            </S.VerifyButtonBox>
          </S.VerifyEmailInputBox>
        </S.VerifyEmailInputBox>
        <S.InputField>
          <S.InputInfo>아이디</S.InputInfo>
          <S.Input
            {...register('account_id', {
              required: '필수 입력',
              pattern: {
                value: /^[a-zA-Z0-9]+$/,
                message: '영문과 숫자 조합만 사용해 주세요.'
              }
            })}
          />
          <S.ValidBox>
            {errors.account_id && (errors.account_id.message)}
          </S.ValidBox>
        </S.InputField>
        <S.InputField>
          <S.InputInfo>비밀번호</S.InputInfo>
          <S.Input
            type='password'
            {...register('password', {
              required: '필수 입력',
              pattern: {
                value: /^[a-zA-Z0-9]+$/,
                message: '영문과 숫자 조합만 사용해 주세요.'
              }
            })}
          />
          <S.ValidBox>
            {errors.password && (errors.password.message)}
          </S.ValidBox>
        </S.InputField>
        <S.InputField>
          <S.InputInfo>이름</S.InputInfo>
          <S.Input
            {...register('name', {
              required: '필수 입력',
              pattern: {
                value: /^[가-힣]+$/,
                message: '한글만 입력해 주세요.'
              }
            })}
          />
          <S.ValidBox>
            {errors.name && (errors.name.message)}
          </S.ValidBox>
        </S.InputField>
        <S.InputField>
          <S.InputInfo>힉번</S.InputInfo>
          <S.Input
            maxLength={8}
            {...register('academic_number', {
              required: '필수 입력',
              pattern: {
                value: /^[0-9]+$/,
                message: '숫자만 입력해 주세요.'
              }
            })}
          />
          <S.ValidBox>
            {errors.academic_number && (errors.academic_number.message)}
          </S.ValidBox>
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
        <S.Button
          type='submit'
          aria-label='회원가입'
        >
          회원가입
        </S.Button>
      </S.ButtonBox>
    </S.Form >
  );
};
