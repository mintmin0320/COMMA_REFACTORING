import Logo from '../../components/common/Logo';
import LoginForm from '../../components/auth/components/loginForm/LoginForm';

// global-styles
import { Container } from '../../components/styles/AuthPageStyles';
import { useSignIn } from '../../query-hooks/useAuth';

export default function LoginPage() {
  const signIn = useSignIn();

  return (
    <Container>
      <Logo />
      <LoginForm
        signIn={signIn}
      />
    </Container>
  );
};
