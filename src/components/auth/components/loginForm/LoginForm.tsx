import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { LoginFormProps, LoginState } from '../../../../query-hooks/useAuth/api.type';

import * as S from './LoginForm.style';

import { HiUser, FaLock } from '../../../common/icons';

// export default function LoginForm({ signIn }: LoginFormProps) {
export default function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<LoginState>();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (value) => {
    try {
      // await signIn.mutateAsync(value);

      navigate('/');
    } catch (error) {
      console.log(error)
    }
  });

  return (
    <S.LoginContainer>
      <S.Wrap>
        <S.Form onSubmit={onSubmit}>
          <S.InputBox style={{ borderBottom: 'none' }}>
            <S.IconBox>
              <HiUser size='22px' />
            </S.IconBox>
            <S.Input
              type='text'
              placeholder='ID'
              {...register('accountId', {
                required: 'Required',
                pattern: {
                  value: /^[a-zA-Z0-9]+$/,
                  message: '영문과 숫자 조합만 사용해 주세요.'
                }
              })}
            />
          </S.InputBox>
          <S.InputBox>
            <S.IconBox>
              <FaLock size='22px' />
            </S.IconBox>
            <S.Input
              type='password'
              placeholder='Password'
              {...register('password', {
                required: 'Required',
                pattern: {
                  value: /^[a-zA-Z0-9]+$/,
                  message: '영문과 숫자 조합만 사용해 주세요.'
                }
              })}
            />
          </S.InputBox>
          {errors.accountId && (
            <S.ErrorTextBox>
              ID : {errors.accountId.message}
            </S.ErrorTextBox>
          )}
          {errors.password && (
            <S.ErrorTextBox>
              PW : {errors.password.message}
            </S.ErrorTextBox>
          )}
          <S.Button type='submit'>
            로그인
          </S.Button>
        </S.Form>
        <S.Button
          style={{
            width: '55%', background: '#e5e1e1', color: '#000'
          }}
          onClick={() => navigate('/auth/join')}
        >
          회원가입
        </S.Button>
      </S.Wrap>
    </S.LoginContainer>
  );
};
