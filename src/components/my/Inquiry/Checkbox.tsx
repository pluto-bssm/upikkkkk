"use client";

import React from "react";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <Container onClick={() => onChange(!checked)}>
      <CheckboxInput type="checkbox" checked={checked} onChange={() => {}} />
      <CustomCheckbox checked={checked}>
        {checked && <CheckIcon />}
      </CustomCheckbox>
      <Label>{label}</Label>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const CustomCheckbox = styled.div<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid ${({ checked }) => (checked ? color.primary : color.gray300)};
  background-color: ${({ checked }) => (checked ? color.primary : 'transparent')};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CheckIcon = () => (
  <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1 4L4.5 7.5L11 1"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Label = styled.span`
  ${font.H6}
  color: ${color.gray600};
`;

export default Checkbox;
