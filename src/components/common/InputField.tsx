import React, { memo } from "react";
import styled from "styled-components";

// types
import { InputFieldProps, InputProps } from '../../types/common';

// styles
const StyledTextLabel = styled.label<InputProps>`
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

const StyledInput = styled.input`
  display: inline-block;
  border: none;
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  font-size: 15px;
`;

const InputField = ({ name, value, width, height, placeholder, onChange, onSubmit, type, label }: InputFieldProps) => {
  const onEnterSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!onSubmit || e.nativeEvent.isComposing) {
      return;
    }

    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <StyledTextLabel>
      {label}
      <StyledInput
        name={name}
        value={value}
        onChange={onChange}
        onKeyDown={onEnterSubmit}
        width={width}
        height={height}
        placeholder={placeholder}
        type={type || 'text'}
        required
      />
    </StyledTextLabel>
  );
}

export default memo(InputField);
