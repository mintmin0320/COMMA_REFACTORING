import styled, { keyframes } from 'styled-components';

export const blinkAnimation = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px 20px;
  place-items: center;

  @media screen and (min-width: 1500px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 335px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  box-shadow: 0px 4px 15px rgba(22, 21, 21, 0.15);
`;

export const ImgBox = styled.div`
  width: 100%;
  height: 230px;
  background: linear-gradient(-90deg, #ebebeb 50%, #dedede 50%);
  background-size: 200% 100%;
  animation: ${blinkAnimation} 2s infinite;
`;

export const TitleBox = styled.div`
  width: 90%;
  height: 20px;
  margin-top: 10px;
  background: linear-gradient(-90deg, #ebebeb 50%, #dedede 50%);
  background-size: 200% 100%;
  animation: ${blinkAnimation} 2s infinite;
`;