import styled from 'styled-components';

export const Aside = styled.aside`
  width: 20%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1500px) {
    width: 28%;
  }
`;

export const DietTitle = styled.h1`
  width: 80%;
  font-size: 25px;
  display: flex;
  margin-top: 30px;
  margin-bottom: 10px;
`;