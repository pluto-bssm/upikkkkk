"use client";

import React from "react";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";

type MinimumModalProps = {
  visible: boolean;
  title?: string;
  onClose?: () => void;
  children?: React.ReactNode;
};

const MinimumModal = ({
  visible,
  title = "알림",
  onClose,
  children,
}: MinimumModalProps): React.ReactElement | null => {
  if (!visible) return null;

  return (
    <Backdrop onClick={onClose}>
      <Dialog onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>{title}</Title>
          <CloseButton onClick={onClose} aria-label="close">✕</CloseButton>
        </Header>

        <Body>{children}</Body>

        <Footer>
          <OkButton onClick={onClose}>확인</OkButton>
        </Footer>
      </Dialog>
    </Backdrop>
  );
};

export default MinimumModal;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.36);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const Dialog = styled.div`
  width: 340px;
  max-width: calc(100% - 32px);
  background: ${color.white};
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.12);
  padding: 16px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Title = styled.h3`
  ${font.H2}
  margin: 0;
  color: ${color.black};
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

const Body = styled.div`
  ${font.p1}
  color: ${color.gray600};
  margin-bottom: 12px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const OkButton = styled.button`
  ${font.btn1}
  background: ${color.primary};
  color: ${color.white};
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
`;
