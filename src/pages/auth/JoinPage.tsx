import Logo from '../../components/common/Logo';
import JoinForm from '../../components/auth/JoinForm';

import { Container } from '../../components/styles/AuthPageStyles';

export default function JoinPage() {
  return (
    <Container>
      <Logo />
      <JoinForm />
    </Container>
  );
};
