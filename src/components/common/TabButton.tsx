"use client";

import React, { useState } from "react";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";

interface TabButtonProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const TabButton = ({ isActive, onClick, children }: TabButtonProps) => {
  return (
    <Button isActive={isActive} onClick={onClick}>
      {children}
      {isActive && <ActiveIndicator />}
    </Button>
  );
};

const Button = styled.button<{ isActive: boolean }>`
  position: relative;
  background: none;
  border: none;
  outline: none;
  padding: 12px 24px;
  cursor: pointer;
  ${font.H6}
  color: ${props => props.isActive ? color.primary : color.gray300};
  font-weight: ${props => props.isActive ? 'bold' : 'normal'};
  transition: color 0.3s;
`;

const ActiveIndicator = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 30%;
  height: 2px;
  background-color: ${color.primary};
`;

export default TabButton;
