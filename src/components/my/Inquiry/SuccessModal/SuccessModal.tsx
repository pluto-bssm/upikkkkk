"use client";

import React from "react";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";

type SuccessModalProps = {
  visible: boolean;
  message?: string;
  onClose?: () => void;
};

const SuccessModal = ({ visible, message = "완료되었습니다.", onClose }: SuccessModalProps): React.ReactElement | null => {
  if (!visible) return null;

  return (
    <Backdrop onClick={onClose}>
      <Dialog onClick={(e) => e.stopPropagation()}>
        <IconWrap>
          <CheckMark>✓</CheckMark>
        </IconWrap>
        <Text>{message}</Text>
        <Ok onClick={onClose}>확인</Ok>
      </Dialog>
    </Backdrop>
  );
};

export default SuccessModal;

/* Styled */
const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.28);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const Dialog = styled.div`
  width: 300px;
  background: ${color.white};
  border-radius: 14px;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
`;

const IconWrap = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 999px;
  background: ${color.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CheckMark = styled.div`
  color: ${color.white};
  ${font.D2}
`;

const Text = styled.div`
  ${font.H2}
  color: ${color.black};
  text-align: center;
`;

const Ok = styled.button`
  ${font.btn1}
  background: ${color.primary};
  color: ${color.white};
  border: none;
  padding: 8px 14px;
  border-radius: 10px;
  cursor: pointer;
`;
