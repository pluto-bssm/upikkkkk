import React from 'react'
import styled from '@emotion/styled'
import TwoOptionsModal from '../Modal/TwoOptionsModal';

interface ChoseButtonProps {
  onSubmitClick: () => void;
  onSubmitConfirm: () => void;
  isSubmitModalOpen: boolean;
  setIsSubmitModalOpen: (isOpen: boolean) => void;
  onSubModalOpen: (isOpen: boolean) => void;
}

export default function ChoseButton({ 
  onSubmitClick, 
  onSubmitConfirm, 
  isSubmitModalOpen, 
  setIsSubmitModalOpen,
  onSubModalOpen 
}: ChoseButtonProps) {

  const handlePrimaryClick = () => {
    setIsSubmitModalOpen(false); 
    onSubModalOpen(true); 
    onSubmitConfirm(); 
  };

  return (
    <ButtonDiv>
        <Button onClick={onSubmitClick}>
            <img src="/svg/Plus.svg" alt="plus" />
            <p>투표 제작하기</p>
        </Button>
        {isSubmitModalOpen &&
        <TwoOptionsModal
          isOpen={isSubmitModalOpen}
          setIsOpen={setIsSubmitModalOpen}
          icon="exclamation"
          title="제출하시겠어요?"
          subtitle={`투표 질문 또는 선지에 욕설/ 상대를 비방하는 내용이 담긴 경우\n투표가 삭제되거나 없어 삭제되거나, 툴어의을 받을 수 있습니다.`}
          primaryButtonText="제출하기"
          secondaryButtonText="투표 수정하기"
          onPrimaryClick={handlePrimaryClick}
          onSecondaryClick={() => setIsSubmitModalOpen(false)}
        />
        }
    </ButtonDiv>
  )
}

const ButtonDiv = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`

const Button = styled.button`
    width: 100%;
    height: 54px;
    background: #FF9F1C;
    border: none;
    border-radius: 32px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    
    p {
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        color: #ffffffff;
    }
    `