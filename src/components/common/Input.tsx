import React from "react";
import { InputFieldProps } from '../../types/common';
// import { StyledTextLabel, StyledInput } from './InputField';

export const Input = ({ name, value, width, height, placeholder, onChange, onSubmit, label }: InputFieldProps) => {
  const onEnterSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!onSubmit || e.nativeEvent.isComposing) {
      return;
    }

    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <></>
    // <StyledTextLabel>
    //   {label}
    //   <StyledInput
    //     name={name}
    //     value={value}
    //     onChange={onChange}
    //     onKeyDown={onEnterSubmit}
    //     width={width}
    //     height={height}
    //     placeholder={placeholder} />
    // </StyledTextLabel>
  );
};
