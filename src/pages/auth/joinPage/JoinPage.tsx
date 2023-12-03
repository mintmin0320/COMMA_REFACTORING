import Logo from '../../../components/common/layout/authLogo/Logo';
import JoinForm from '../../../components/auth/components/joinForm/JoinForm';

import { Container } from '../../../components/styles/AuthPageStyles';
import * as S from './JoinPage.style';

export default function JoinPage() {
  return (
    <Container>
      <Logo />
      <S.JoinContainer>
        <JoinForm />
      </S.JoinContainer>
    </Container>
  );
};
