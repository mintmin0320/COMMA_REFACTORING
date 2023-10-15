import styled from 'styled-components';

export const LoginContainer = styled.section`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrap = styled.div`
  width: 55%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #D8D8D8;
  border-radius: 12px;
  box-shadow: 2px 4px 25px rgba(0, 0, 0, 0.1);
`;

export const Form = styled.form`
  width: 55%;
`;

export const InputBox = styled.div`
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

// 버튼
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
