import styled from "@emotion/styled";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";


type Props = {
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
};



export default function MemberChose({ isOpen, setIsOpen }: Props) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const options = [
    {
      title: "기본",
      description: "투표가 7일 후 자동으로 종료됩니다."
    },
    {
      title: "몇일 후 투표 종료하기",
      description: "원하는 기간이 지나면 투표가 종료되고 가이드가 제작돼요."
    },
    {
      title: "몇명 이상 참여시 투표 종료하기",
      description: "원하는 인원만큼의 사람이 투표에 참여하면 투표가 종료되고 가이드가 제작돼요."
    }
  ];

  const handleOptionSelect = (index: number) => {
    setSelectedOption(index);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Background
          key="bg1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsOpen && setIsOpen(false)}
        >
          <MotionBox
            key="category-box1"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            onClick={e => e.stopPropagation()}
          >
            <Title>투표 종료 조건 선택하기</Title>
            
            <ChoseOptions>
              {options.map((option, index) => (
                <DesOptions key={index}>
                  <div>
                    <Labels 
                      isSelected={selectedOption === index}
                      onClick={() => handleOptionSelect(index)}
                    >
                      {selectedOption === index && <InnerCircle />}
                    </Labels>
                  </div>
                  <DesOption onClick={() => handleOptionSelect(index)}>
                    <SubP>{option.description}</SubP>
                    <TiltP isSelected={selectedOption === index}>{option.title}</TiltP>
                  </DesOption>
                </DesOptions>
              ))}
            </ChoseOptions>
          </MotionBox>
        </Background>
      )}
    </AnimatePresence>
  );
}

const TiltP = styled.p<{ isSelected?: boolean }>`
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.isSelected ? '#011627' : '#B3B3B3'};
  transition: color 0.2s ease;
`;

const SubP = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #DADADA;
`;

const InnerCircle = styled.div`
  width: 8px;
  height: 8px;
  background: #FF9F1C;
  border-radius: 50%;
  margin: auto;

  aspect-ratio: 1;
`;

const Labels = styled.label<{ isSelected?: boolean }>`
  width: 20px;
  height: 20px;
  display: flex;
  aspect-ratio: 1;
  border: 1.5px solid #FF9F1C;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  background: ${props => props.isSelected ? '#FFF' : 'transparent'};
  
  &:hover {
    transform: scale(1.1);
  }
`;

const DesOptions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
`;

const DesOption = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ChoseOptions = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 90%;
  justify-content: center;
  align-items: start;
`;

const MotionBox = styled(motion.div)`
  width: 100%;
  max-width: 600px;
  background: #fdfffc;
  border-radius: 24px 24px 0 0;
  padding: 32px 24px 0 24px;
  box-sizing: border-box;
  position: fixed;
  height: 64vh;
  bottom: 0;
  transform: translateX(-50%);
  z-index: 1000;
`;

const Title = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  color: #011627;
  margin-bottom: 32px;
  position: relative;
  &:before {
    content: "";
    display: block;
    width: 60px;
    height: 1px;
    background: #c8c8c8;
    margin: 0 auto 12px auto;
  }
`;

const Background = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  align-items: end;
  justify-content: center;
`;
