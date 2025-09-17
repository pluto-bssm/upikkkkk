import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import font from "@/packages/design-system/src/font";
import color from "@/packages/design-system/src/color";
import { useRouter } from "next/navigation";
import TwoOptionsModal from './TwoOptionsModal';
import BottomSheetSelector from './BottomSheetSelector';

type Props = {
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
};

export default function VoteEndConditionModal({ isOpen, setIsOpen }: Props) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const router = useRouter();

  const [OpenModal, setOpenModal] = useState(false);
  const [isTimeOpen, setIsTimeOpen] = useState(false);
  const [isMemberOpen, setIsMemberOpen] = useState(false);
  
  const [selectedTime, setSelectedTime] = useState("7");
  const [selectedMembers, setSelectedMembers] = useState("13");

 
  const timeOptions = [
    { value: '2', label: '2일' },
    { value: '3', label: '3일' },
    { value: '4', label: '4일' },
    { value: '5', label: '5일', badge: '추천' },
    { value: '6', label: '6일' },
    { value: '7', label: '7일', badge: '권장' },
    { value: '8', label: '8일' },
    { value: '9', label: '9일' },
    { value: '10', label: '10일' },
    { value: '11', label: '11일' }
  ];


  const memberOptions = [
    { value: '3', label: '3인' },
    { value: '5', label: '5인' },
    { value: '7', label: '7인' },
    { value: '10', label: '10인' },
    { value: '13', label: '13인', badge: '추천' },
    { value: '15', label: '15인' },
    { value: '18', label: '18인' },
    { value: '21', label: '21인' },
    { value: '24', label: '24인' },
    { value: '30', label: '30인' },
    { value: '40', label: '40인' }
  ];

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
    

    switch (index) {
      case 1: 
        setTimeout(() => setIsTimeOpen(true), 300); 
        break;
      case 2: 
        setTimeout(() => setIsMemberOpen(true), 300);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <ModalBackground
            key="bg1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen && setIsOpen(false)}
          >
            <ModalContentBox
              key="category-box1"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              onClick={e => e.stopPropagation()}
            >
              <ModalTitle>투표 종료 조건 선택하기</ModalTitle>
              
              <OptionList>
                {options.map((option, index) => (
                  <OptionItem key={index}>
                    <div>
                      <RadioButton 
                        isSelected={selectedOption === index}
                        onClick={() => handleOptionSelect(index)}
                      >
                        {selectedOption === index && <RadioInnerDot />}
                      </RadioButton>
                    </div>
                    <OptionContent onClick={() => handleOptionSelect(index)}>
                      <OptionDescription>{option.description}</OptionDescription>
                      <OptionTitle isSelected={selectedOption === index}>
                        {option.title}
        
                        {index === 1 && selectedOption === 1 && ` (${selectedTime}일)`}
                        {index === 2 && selectedOption === 2 && ` (${selectedMembers}명)`}
                      </OptionTitle>
                    </OptionContent>
                  </OptionItem>
                ))}
              </OptionList>

              <ResultBox>
                <Result onClick={() => {setOpenModal(true)}}>
                  더욱 빠르게 답변을 받고 싶다면?
                </Result>
              </ResultBox>
            </ModalContentBox>
          </ModalBackground>
        )}
      </AnimatePresence>


      <TwoOptionsModal
        isOpen={OpenModal}
        setIsOpen={setOpenModal}
        icon="question"
        title="질문 게시판으로 이동할까요?"
        subtitle={`질문 게시판에 질문을 작성하면,\n더 빠르게 답변을 받을 수 있어요`}
        primaryButtonText="이동하기"
        secondaryButtonText="뒤로가기"
        onPrimaryClick={() => router.push('/question-board')}
        onSecondaryClick={() => {}}
      />


      <BottomSheetSelector
        title="시간 선택하기"
        selectedValue={selectedTime}
        setSelectedValue={setSelectedTime}
        items={timeOptions}
        isOpen={isTimeOpen}
        setIsOpen={setIsTimeOpen}
      />


      <BottomSheetSelector
        title="인원수 선택하기"
        selectedValue={selectedMembers}
        setSelectedValue={setSelectedMembers}
        items={memberOptions}
        isOpen={isMemberOpen}
        setIsOpen={setIsMemberOpen}
      />
    </>
  );
}

const OptionTitle = styled.p<{ isSelected?: boolean }>`
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.isSelected ? '#011627' : '#B3B3B3'};
  transition: color 0.2s ease;
`;

const OptionDescription = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #DADADA;
`;

const RadioInnerDot = styled.div`
  width: 8px;
  height: 8px;
  background: #FF9F1C;
  border-radius: 50%;
  margin: auto;
  aspect-ratio: 1;
`;

const RadioButton = styled.label<{ isSelected?: boolean }>`
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

const OptionItem = styled.div`
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

const OptionContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const OptionList = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 90%;
  justify-content: center;
  align-items: start;
`;

const ResultBox = styled.div`
  width: 100%;
  max-width: 600px;
  display : flex;
  justify-content : end;
  margin-top : 30px;
`

const Result = styled.p`
  ${font.H3};
  color : ${color.gray500};
  border-bottom : 0.5px solid ${color.gray500};
  cursor : pointer;
`

const ModalContentBox = styled(motion.div)`
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

const ModalTitle = styled.div`
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

const ModalBackground = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1001;
  display: flex;
  align-items: end;
  justify-content: center;
`;