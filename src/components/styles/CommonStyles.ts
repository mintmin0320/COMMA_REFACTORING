import { styled } from 'styled-components';

/* 메인 frame */
export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

/* 모달 frame */
export const StyledModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
`;