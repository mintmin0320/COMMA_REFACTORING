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
  border: 1px solid #D8D8D8;
  border-radius: 12px;
  box-shadow: 2px 4px 25px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

export const InputWrap = styled.div`
  width: 100%;
  height: 85%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: flex-end;
  margin-left: 25px;
`;

export const VerifyEmailInputBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const VerifyButtonBox = styled.div`
  width: 25%;
  height: 95px;
  display: flex;
  justify-content: center;
`;

export const VerifyButton = styled.button`
  width: 65px;
  height: 30px;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: bolder;
  margin-top: 19px;
  background-color: #0064ff;
  cursor: pointer;
`;

export const TextLabel = styled.label`
  width: 65%;
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
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 120px;
  height: 40px;
  background-color: #0064ff;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bolder;
  cursor: pointer;
`;

export const InputField = styled.div`
  width: 65%;
  height: 95px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 15px;

  & > input{
    border: solid 1px #d8d8d8;
    border-radius: 8px;

    &::placeholder {
      font-size: 12px;
      padding: 5px;
    }
  }
`;

export const InputInfo = styled.p`
  width: 100%;
  height: 20px;
`;

export const Input = styled.input`
  display: inline-block;
  border: none;
  width: calc(100% - 4px);
  height: 30px;
  font-size: 15px;
`;

export const ValidBox = styled.div`
  width: 100%;
  height: 41px;
  display: flex;
  justify-content: center;
  margin-top: 4px;
  color: #FE2E2E;
`;