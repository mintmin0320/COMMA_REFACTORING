import { useIsFetching, useIsMutating } from 'react-query';
import styled from 'styled-components';

import { PacmanLoader } from 'react-spinners';

const LoadingWrap = styled.div`
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

const LoadingBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Loading() {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  const display = isFetching || isMutating ? 'block' : 'none';

  return (
    <LoadingWrap style={{ display: display }}>
      <LoadingBox>
        <PacmanLoader color='#36d7b7' size='40' margin='5' />
      </LoadingBox>
    </LoadingWrap>
  );
};
