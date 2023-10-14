import { useIsFetching, useIsMutating } from 'react-query';
import styled from 'styled-components';

const StyledLoadingWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 999;
  transform: translate(-50%, -50%);
`;

const StyledLoadingText = styled.p`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: 800;
`;

const Loading = () => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  const display = isFetching || isMutating ? 'block' : 'none';

  return (
    <StyledLoadingWrap style={{ display: display }}>
      <StyledLoadingText>Loading</StyledLoadingText>
    </StyledLoadingWrap>
  );
};

export default Loading;