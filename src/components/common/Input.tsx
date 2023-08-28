import React, { memo } from "react";
import styled from "styled-components";

// types
import { InputProps } from '../../types/common';

const StyledInput = styled.input<InputProps>`
  display: inline-block;
  border: none;
  width: ${(props) => props.width && props.width};
  height: ${(props) => props.height && props.height};
  font-size: 15px;
`;

const Input = ({ children, name, value, width, height, placeholder, onChange, onSubmit }: InputProps) => {
  const onEnterSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!onSubmit || e.nativeEvent.isComposing) {
      return;
    }

    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <StyledInput
      name={name}
      value={value}
      onChange={onChange}
      onKeyDown={onEnterSubmit}
      width={width}
      height={height}
      placeholder={placeholder}
    >
      {children}
    </StyledInput>
  );
}

export default memo(Input);
