import Logo from '../../components/common/Logo';
import JoinForm from '../../components/auth/components/joinForm/JoinForm';

import { Container } from '../../components/styles/AuthPageStyles';

// hooks
import { useSignUp, useReqAuthCode, useVerifyAuthCode } from '../../query-hooks/useAuth';

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
