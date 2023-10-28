import styled from 'styled-components';

export const JoinContainer = styled.section`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 75%;
  height: 65%;
  background-color: #fff;
  border: 1px solid #D8D8D8;
  border-radius: 12px;
  box-shadow: 2px 4px 25px rgba(0, 0, 0, 0.1);
`;

export const InputWrap = styled.div`
  width: 100%;
  height: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  margin-left: 40px;
`;

export const VerifyEmailInputBox = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: flex-end;
`;

export const VerifyButtonBox = styled.div`
  width: 55px;
  height: 38px;
  margin-left: 20px;
  display: flex;
  align-items: center;
`;

export const VerifyButton = styled.button`
  width: 100%;
  height: 25px;
  background-color: #0064ff;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: bolder;
  cursor: pointer;
`;

export const TextLabel = styled.label`
  width: 62%;
  height: 55px;
  display: flex;
  flex-direction: column;
  font-size: 15px;
`;

export const Select = styled.select`
  width: 100%;
  height: 41px;
  border: solid 1px #d8d8d8;
  border-radius: 8px;
  margin-top: 5px;
`;

export const ButtonBox = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 25%;
  height: 50px;
  background-color: #0064ff;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bolder;
  cursor: pointer;
`;

export const InputField = styled.label`
  width: 60%;
  height: 55px;
  display: flex;
  flex-direction: column;
  font-size: 15px;

  & > input{
    border: solid 1px #d8d8d8;
    border-radius: 8px;
    margin-top: 5px;

    &::placeholder {
      font-size: 12px;
      padding: 5px;
    }
  }
`;

export const Input = styled.input`
  display: inline-block;
  border: none;
  width: 100%;
  height: 40px;
  font-size: 15px;
`; 