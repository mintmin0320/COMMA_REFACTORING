import styled from 'styled-components';

export const Form = styled.form`
  width: 55%;
`;

export const InputLabel = styled.label`
  width: calc(100% - 4px);
  height: 40px;
  display: flex;
  border: solid 2px #d8d8d8;
  border-radius: 4px;
`;

export const IconBox = styled.div`
  width: 45px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: solid 2px #d8d8d8;
  border-radius: 4px;
`;

export const Input = styled.input`
  width: calc(100% - 45px);
  height: 38px;
  font-size: 1.15em;
  border: none;
  border-radius: 4px;

  &::placeholder {
    color: #bdbdbd;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  margin-top: 10px;
  font-size: 1em;
  background-color: #0064ff;
  color: #fff;
  cursor: pointer;
`;

export const ErrorTextBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5px;
  font-size: 0.9em;
  color: #FE2E2E;
`;