import Logo from '../../components/common/layout/authLogo/Logo';
import LoginForm from '../../components/auth/components/loginForm/LoginForm';

// import { useSignIn } from '../../query-hooks/useAuth';

import { Container } from '../../components/styles/AuthPageStyles';

export default function LoginPage() {
  // const signIn = useSignIn();

  return (
    <Container>
      <Logo />
      {/* <LoginForm
        signIn={signIn}
      /> */}
      <LoginForm

      />
    </Container>
  )
}
