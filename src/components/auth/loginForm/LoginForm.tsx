import { useForm } from 'react-hook-form';

import { LoginState } from '../../../types/auth';

import * as S from './LoginForm.style';

import { HiUser, FaLock } from '../../common/icons';

import { useSignIn } from '../../../query-hooks/useSignIn';

export default function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<LoginState>();

  const { mutate: signIn } = useSignIn();

  const onSubmit = ({ account_id, password }: LoginState) => {
    signIn({ account_id, password });
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Label style={{ borderBottom: 'none' }}>
        <S.IconBox>
          <HiUser size='24px' />
        </S.IconBox>
        <S.Input
          id='idInput'
          type='text'
          placeholder='ID'
          {...register('account_id', {
            required: '필수 입력란입니다.',
            pattern: {
              value: /^[a-zA-Z0-9]+$/,
              message: '영문과 숫자 조합만 사용해 주세요.'
            }
          })}
        />
      </S.Label>
      <S.Label>
        <S.IconBox>
          <FaLock size='20px' />
        </S.IconBox>
        <S.Input
          id='passwordInput'
          type='password'
          placeholder='Password'
          {...register('password', {
            required: '필수 입력란입니다.',
            pattern: {
              value: /^[a-zA-Z0-9]+$/,
              message: '영문과 숫자 조합만 사용해 주세요.'
            }
          })}
        />
      </S.Label>
      {errors.account_id && (
        <S.ErrorTextBox>
          ID : {errors.account_id.message}
        </S.ErrorTextBox>
      )}
      {errors.password && (
        <S.ErrorTextBox>
          PW : {errors.password.message}
        </S.ErrorTextBox>
      )}
      <S.Button type='submit' aria-label='로그인'>
        로그인
      </S.Button>
    </S.Form>
  )
}
