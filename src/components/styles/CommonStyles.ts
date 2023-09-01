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

/* 로고 이미지 */
export const StyledLogoImg = styled.img`
  width: 25px;
  height: 25px;
`;

/* 로고 제목 텍스트 */
export const StyledLogoTitle = styled.div`
  width: 30%;
  height: 45px;
  display: flex;
  align-items: center;
  color: #000;
  font-size: 20px;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
  margin-left: 8px;
`;