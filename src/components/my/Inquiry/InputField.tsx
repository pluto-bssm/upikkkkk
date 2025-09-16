"use client";

import React, { useState } from "react";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";

interface InputFieldProps {
  label: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
  minHeight?: string;
  helperText?: string;
}

const InputField = ({
  label,
  placeholder,
  required = false,
  value,
  onChange,
  multiline = false,
  minHeight = "auto",
  helperText
}: InputFieldProps) => {
  return (
    <Container>
      <Label>
        {label} {required && <Required>*</Required>}
      </Label>
      <InputContainer minHeight={minHeight}>
        {multiline ? (
          <StyledTextarea
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        ) : (
          <StyledInput
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        )}
      </InputContainer>
      {helperText && <HelperText>{helperText}</HelperText>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

const Label = styled.div`
  ${font.H9}
  color: ${color.gray600};
  padding: 0 20px;
`;

const Required = styled.span`
  color: ${color.accent};
`;

const InputContainer = styled.div<{ minHeight: string }>`
  border: 1px solid ${color.gray100};
  border-radius: 16px;
  box-shadow: -4px -4px 10px 0px rgba(0, 0, 0, 0.03), 4px 4px 10px 0px rgba(0, 0, 0, 0.03);
  padding: 20px;
  min-height: ${props => props.minHeight};
  width: 100%;
  box-sizing: border-box;
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  ${font.H1}
  color: ${color.black};
  
  &::placeholder {
    color: ${color.gray300};
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  resize: none;
  min-height: 80px;
  ${font.H4}
  color: ${color.black};
  
  &::placeholder {
    color: ${color.gray300};
  }
`;

const HelperText = styled.div`
  ${font.H3}
  color: ${color.gray300};
  padding: 0 20px;
`;

export default InputField;
