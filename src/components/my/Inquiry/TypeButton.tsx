"use client";

import React from "react";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";

interface TypeButtonProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

const TypeButton = ({ label, selected, onClick }: TypeButtonProps) => {
  return (
    <StyledTypeButton 
      onClick={onClick} 
      selected={selected}
      aria-selected={selected}
    >
      {label}
    </StyledTypeButton>
  );
};

const StyledTypeButton = styled.button<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  border-radius: 100px;
  border: 1px solid ${props => props.selected ? color.primary : color.gray100};
  background-color: ${props => props.selected ? color.primary : color.white};
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  
  ${font.H9}
  color: ${props => props.selected ? color.white : color.gray600};
  
  &:hover {
    background-color: ${props => props.selected ? color.primary : color.gray50};
  }
`;

export default TypeButton;
