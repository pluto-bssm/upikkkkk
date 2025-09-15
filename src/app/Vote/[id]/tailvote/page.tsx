'use client'

import { useState } from "react";
import styled from "@emotion/styled";
import Header from "@/components/common/Header";
import HeaderItemsBox from "@/components/Header/HeaderItemBox";
import { AnimatePresence } from 'framer-motion';
import CompleteVote from '@/components/Modal/Complete';
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";
import { useRouter } from "next/navigation";

const Tailvote = () => {
  const router = useRouter();
  const [isCompleteOpen, setIsCompleteOpen] = useState(false);



  const handleVoteSubmit = () => {
    setIsCompleteOpen(true);
  };

  function handleComplete() {
    setIsCompleteOpen?.(false);
    router.push("/");
  }


  return (
    <TailvoteLayout>
      <Header 
        LeftItem={
          <img
            src="/svg/Back.svg"
            width={20}
            height={50}
          />
        } 
        RightItem={
          <HeaderItemsBox 
            type={'reportvote'} 
          />
        } 
        types="Nones"
      />
      <DoVoteContainer>
        <ContentWrapper>
            <ContentContainer>
            <TextWrapper>
                <Title>꼬리질문 응답하기</Title>
                <Question>해당 선지를 고른 이유는 무엇인가요?</Question>
                <Description>꼬리질문은 응답하지 않고 넘어갈 수 있어요</Description>
            </TextWrapper>

            <TailvoteTextarea placeholder="응답을 작성해주세요!&#13;&#10;꼬리 질문 응답은 더 질 높은 가이드를 제작하는데 도움이 됩니다."></TailvoteTextarea>
            </ContentContainer>
          

          <SubmitButton onClick={handleVoteSubmit}>
            투표 완료하기
          </SubmitButton>


        </ContentWrapper>
      </DoVoteContainer>

      <AnimatePresence>
      {isCompleteOpen && (
        <CompleteVote
          isOpen={isCompleteOpen}
          setIsOpen={setIsCompleteOpen}
          text1 = '투표를'
          text2= '했어요!'
          text3 = '완료'
          subtext='마이페이지에서 지금까지 한 투표 내역을 확인할 수 있어요'
          img ='/svg/Completevote.svg'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onfunciton={handleComplete}
          
        />
      )}
    </AnimatePresence>
    
    </TailvoteLayout>
  );
}

export default Tailvote;

const TailvoteLayout = styled.div`
  max-width: 600px;
  width: 100%;

  background-color: ${color.white};
  min-height: 100vh;
  display : flex;
`;

const DoVoteContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items : center;
  margin-bottom : 100px;
  
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContentWrapper = styled.div`
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TailvoteTextarea = styled.textarea`
    background-color : ${color.white};
    width : 100%;
    height : 120px;
    border : 1px solid ${color.gray100};
    border-radius : 13px;
    padding : 16px 16px;
    outline : none;
    color :  ${color.gray300};


    &::placeholder {
        color : ${color.gray300};
        ${font.H4};
    }
`

const Title = styled.h1`
  ${font.H1};
  color: #FF8A00;
  margin: 0;
`;

const Question = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #1F2937;
  margin: 0;
  line-height: 1.4;
`;

const Description = styled.p`
  ${font.H3};
  color: #9CA3AF;
  margin: 0;
  line-height: 1.4;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 20px;
  border-radius: 30px;
  border: none;
  background-color: ${color.primary};
  color: ${color.white};
  font-size: 20px;
  font-weight: 600;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: background-color 0.2s ease;
  margin-top: 60px;

`;