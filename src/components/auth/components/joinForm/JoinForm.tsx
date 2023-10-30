import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Toast from '../../../common/Toast';

// styles
import * as S from './JoinForm.style';

// types
import {
  JoinFormProps,
  JoinState,
  VerifyAuthCode
} from '../../../../query-hooks/useAuth/api.type';

export default function JoinForm({
  reqAuthCode,
  verifyAuthCode,
  signUp
}: JoinFormProps) {
  const {
    handleSubmit,
    register,
    watch,
    trigger,
    formState: { errors }
  } = useForm<JoinState & { code: string }>();
  const email = watch('email');
  const code = watch('code');

  const navigate = useNavigate();

  const toast = Toast();

  const [isRequestCode, setIsRequestAuthCode] = useState<boolean>(false);
  const [isVerifyCode, setIsVerifyAuthCode] = useState<boolean>(false);

  // 이메일 인증 코드 요청
  const handleAuthCode = async () => {
    if (!await trigger('email')) {
      toast.warning('유효하지 않은 형식');

      return;
    }

    try {
      const data = await reqAuthCode.mutateAsync(email);

      if (data === 200) {
        setIsRequestAuthCode(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 이메일 인증 코드 확인
  const handleVerifyAuthCode = async () => {
    if (!await trigger('code')) {
      toast.warning('유효하지 않은 형식');

      return;
    }

    const params: VerifyAuthCode = { email, code };

    try {
      const data = await verifyAuthCode.mutateAsync(params);

      if (data === 200) {
        setIsVerifyAuthCode(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 회원가입
  const onSubmit = handleSubmit(async (value) => {
    if (!isVerifyCode) {
      toast.warning('우선 이메일 인증을 완료해 주새요.');

      return;
    }

    try {
      const data = await signUp.mutateAsync(value);

      if (data === 201) {
        navigate('/auth/login');
      }
    } catch (error) {
      console.log(error)
    }
  });

  return (
    <S.JoinContainer>
      <S.Form onSubmit={onSubmit}>
        <S.InputWrap>
          <S.VerifyEmailInputBox>
            <S.InputField>
              <S.InputInfo>이메일</S.InputInfo>
              <S.Input
                {...register('email', {
                  pattern: {
                    value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/,
                    message: '유효하지 않은 이메일 형식'
                  }
                })}
              />
              <S.ValidBox>
              </S.ValidBox>
            </S.InputField>
            <S.VerifyButtonBox>
              <S.VerifyButton type='button' onClick={handleAuthCode}>
                인증
              </S.VerifyButton>
            </S.VerifyButtonBox>
          </S.VerifyEmailInputBox>
          <S.VerifyEmailInputBox>
            <S.VerifyEmailInputBox>
              <S.InputField>
                <S.InputInfo>인증코드</S.InputInfo>
                <S.Input
                  disabled={!isRequestCode}
                  maxLength={6}
                  {...register('code', {
                    required: '필수 입력',
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
                >
                  확인
                </S.VerifyButton>
              </S.VerifyButtonBox>
            </S.VerifyEmailInputBox>
          </S.VerifyEmailInputBox>
          <S.InputField>
            <S.InputInfo>아이디</S.InputInfo>
            <S.Input
              {...register('accountId', {
                required: '필수 입력',
                pattern: {
                  value: /^[a-zA-Z0-9]+$/,
                  message: '영문과 숫자 조합만 사용해 주세요.'
                }
              })}
            />
            <S.ValidBox>
              {errors.accountId && (errors.accountId.message)}
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
              {...register('academicNumber', {
                required: '필수 입력',
                pattern: {
                  value: /^[0-9]+$/,
                  message: '숫자만 입력해 주세요.'
                }
              })}
            />
            <S.ValidBox>
              {errors.academicNumber && (errors.academicNumber.message)}
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
          <S.Button>
            회원가입
          </S.Button>
        </S.ButtonBox>
      </S.Form >
    </S.JoinContainer>
  );
};
