import React from 'react'
import styled from '@emotion/styled'
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import color from '@/packages/design-system/src/color';
import font from '@/packages/design-system/src/font';

type TwoOptionsModalProps = React.ComponentProps<typeof motion.div> & {
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
  icon: 'question' | 'exclamation';
  title: string;
  subtitle?: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
};

export default function TwoOptionsModal({
  isOpen,
  setIsOpen,
  icon,
  title,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  ...motionProps
}: TwoOptionsModalProps) {

  function handlePrimaryClick() {
    onPrimaryClick?.();
    setIsOpen?.(false);
  }

  function handleSecondaryClick() {
    onSecondaryClick?.();
    setIsOpen?.(false);
  }

  return (
    (isOpen && <ModalBackground {...motionProps}>
      <ModalContent
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.7, opacity: 0 }}
        transition={{ type: "spring", duration: 0.3 }}
      >
        <IconWrapper>
          {icon === 'question' ? (
            <QuestionIcon>?</QuestionIcon>
          ) : (
            <ExclamationIcon></ExclamationIcon>
          )}
        </IconWrapper>

        <Text>
          <Title>{title}</Title>
          {subtitle && <SubText>{subtitle}</SubText>}
        </Text>

        <ButtonContainer>
          <PrimaryButton onClick={handlePrimaryClick}>
            {primaryButtonText}
          </PrimaryButton>
          <SecondaryButton onClick={handleSecondaryClick}>
            {secondaryButtonText}
          </SecondaryButton>
        </ButtonContainer>
      </ModalContent>
    </ModalBackground>)

  )
}

const ModalBackground = styled(motion.div)`
  position: fixed;
  width: 100%;
  max-width: 600px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  top: 0px;
`;

const ModalContent = styled(motion.div)`
  background-color: #fff;
  padding: 50px 20px;
  border-radius: 24px;
  width: 80%;
  max-width: 400px;
  text-align: center;
  border: 2px solid #DADADA;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuestionIcon = styled.div`
  font-size: 48px;
  font-weight: bold;
  color: #011627;
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ExclamationIcon = styled.div`
  font-size: 48px;
  font-weight: bold;
  color: #011627;
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:before {
    content: '!';
    display: block;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: 600;
  color: #011627;
  line-height: 1.3;
`;

const SubText = styled.p`
  ${font.H6};
  color: #9CA3AF;
  line-height: 1.5;
  white-space: pre-line;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
`;

const PrimaryButton = styled.button`
  width: 100%;
  padding: 16px 20px;
  border: none;
  border-radius: 16px;
  background-color: ${color.primary};
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #E07600;
  }
`;

const SecondaryButton = styled.button`
  width: 100%;
  padding: 16px 20px;
  border: none;
  border-radius: 16px;
  background-color: #E5E7EB;
  color: #374151;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #D1D5DB;
  }
`;