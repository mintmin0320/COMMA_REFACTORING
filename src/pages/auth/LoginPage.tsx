import Logo from '../../components/common/Logo';
import LoginForm from '../../components/auth/components/loginForm/LoginForm';

// global-styles
import { Container } from '../../components/styles/AuthPageStyles';

export default function LoginPage() {
  return (
    <Container>
      <Logo />
      <LoginForm />
    </Container>
  );
};
