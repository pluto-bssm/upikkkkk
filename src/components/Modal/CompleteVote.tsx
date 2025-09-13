import React from 'react'
import styled from '@emotion/styled'
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import color from '@/packages/design-system/src/color';
import font from '@/packages/design-system/src/font';

type CompleteVoteProps = React.ComponentProps<typeof motion.div> & {
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
};

export default function CompleteVote({ setIsOpen, ...motionProps }: CompleteVoteProps) {
  const router = useRouter();

  function handleComplete() {
    setIsOpen?.(false);
    router.replace("/")
  }

  return (
    <ModalBackground {...motionProps}>
      <ModalContent
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.7, opacity: 0 }}
        transition={{ type: "spring", duration: 0.3 }}
      >
        <IconWrapper>
          <img src='/svg/Completevote.svg' />
        </IconWrapper>

        <Text>
          <Title>
            투표를 <OrangeText>완료</OrangeText>했어요!
          </Title>
          <SubP>마이페이지에서 지금까지 한 투표 내역을 확인할 수 있어요</SubP>
        </Text>

        <ConfirmButton onClick={handleComplete}>
          확인
        </ConfirmButton>
      </ModalContent>
    </ModalBackground>
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
  z-index: 1000;
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
  gap: 10px;
`;

const IconWrapper = styled.div`

`;


const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: 500;
  color: #011627;

`;

const OrangeText = styled.span`
  color: #FF8A00;
`;

const SubP = styled.p`
  ${font.H6};
  color: #9CA3AF;

`;

const ConfirmButton = styled.button`
  width: 100%;
  padding: 14px 10px;
  border: none;
  border-radius: 16px;
  background-color: ${color.primary};
  color: white;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 16px;

  &:hover {
    background-color: #E07600;
  }
`;