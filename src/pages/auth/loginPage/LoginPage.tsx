import { useNavigate } from 'react-router-dom';

import Logo from '../../../components/common/layout/authLogo/Logo';
import LoginForm from '../../../components/auth/components/loginForm/LoginForm';

import { Container } from '../../../components/styles/AuthPageStyles';
import * as S from './LoginPage.style';

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo />
      <S.LoginContainer>
        <S.Wrap>
          <LoginForm />
          <S.Button
            onClick={() => navigate('/auth/join')}
            aria-label='회원가입 페이지로 이동'
          >
            회원가입
          </S.Button>
        </S.Wrap>
      </S.LoginContainer>
    </Container>
  );
};
