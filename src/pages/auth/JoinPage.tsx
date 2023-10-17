import Logo from '../../components/common/Logo';
import JoinForm from '../../components/auth/JoinForm';

import { Container } from '../../components/styles/AuthPageStyles';

// hooks
import { useSignUp } from '../../components/auth/hooks/useAuth';
import { useReqAuthCode, useVerifyAuthCode } from '../../components/auth/hooks/useEmailAuthCode';

export default function JoinPage() {
  const reqAuthCode = useReqAuthCode();
  const verifyAuthCode = useVerifyAuthCode();
  const signUp = useSignUp();

  return (
    <Container>
      <Logo />
      <JoinForm
        reqAuthCode={reqAuthCode}
        verifyAuthCode={verifyAuthCode}
        signUp={signUp}
      />
    </Container>
  );
};
