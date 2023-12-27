import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
`;

export const Icon = styled.div`
  font-size: 6em;
  color: red;
  margin-bottom: 5px;
`;

export const P = styled.p`
  font-size: 1.5em;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  width: 100px;
  height: 35px;
  font-size: 0.8em;
  border: solid 1px #bdbcbc;
  background-color: #f2f2f2;
  border-radius: 8px;
  cursor: pointer;
`;