import Logo from '../../components/common/Logo';
import Login from '../../components/auth/Login';

// styles
import { Container } from '../../components/styles/AuthPageStyles';

const LoginPage = () => {
  return (
    <Container>
      <Logo />
      <Login />
    </Container>
  );
};

export default LoginPage;