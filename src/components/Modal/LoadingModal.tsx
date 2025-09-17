import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import color from '@/packages/design-system/src/color';

type LodingProps = {
  title: string;
  des: string;
}


export default function LoadingModal({ title, des }: LodingProps) {
  return (
    <ModalBackground>
      <ModalContainer>
        <SpinnerContainer>
          <LoadingSpinner
            src="/svg/loading.svg"
            alt="loading"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </SpinnerContainer>

        <Title>
          {title}
        </Title>

        <Description>
          {des}
        </Description>
      </ModalContainer>
    </ModalBackground>
  );
}

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

const ModalContainer = styled.div`
  background-color: white;
  border-radius: 24px;
  padding: 48px;
  max-width: 384px;
  margin: 0 16px;
  text-align: center;
  border : 2px solid ${color.gray200};
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

const LoadingSpinner = styled(motion.img)`
  width: 80px;
  height: 80px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 12px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #6b7280;
  line-height: 1.5;
`;