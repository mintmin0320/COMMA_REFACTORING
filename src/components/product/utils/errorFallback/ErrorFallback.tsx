import { AiFillWarning } from '../../../common/icons';
import * as S from './ErrorFallback.style';

interface ErrorFallbackProps {
  resetErrorBoundary: () => void;
}

const ErrorFallback = ({ resetErrorBoundary }: ErrorFallbackProps) => {
  return (
    <S.Container >
      <S.Icon><AiFillWarning /></S.Icon>
      <S.P>문제가 발생했습니다.</S.P>
      <S.Button
        onClick={() => resetErrorBoundary()}
        aria-label='새로 고침'
      >
        새로 고침
      </S.Button>
    </S.Container>
  );
};

export default ErrorFallback;
