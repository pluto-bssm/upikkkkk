'use client'

import { useState } from "react";
import styled from "@emotion/styled";
import Header from "@/components/common/Header";
import HeaderItemsBox from "@/components/Header/HeaderItemBox";
import VoteOption from "@/components/Vote/VoteOption";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation"

const DoVote = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const voteOptions = [
    { label: 'A', text: '선지선지1' },
    { label: 'B', text: '선지선지1' },
    { label: 'C', text: '선지선지1' },
    { label: 'D', text: '선지선지1' },
    { label: 'E', text: '선지선지' }
  ];


  const router = useRouter();
  const path = usePathname();
  const handleVoteSubmit = () => {
    if (!selectedOption) {
      alert('선택지를 선택해주세요.');
      return;
    }
    router.push(`${path}/tailvote`)

  };

  return (
    <DoVoteLayout>
      <Header
        LeftItem={
          <img
            src="/svg/Back.svg"
            width={20}
            height={50}
            onClick={() => { router.back() }}
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
          <TextWrapper>
            <Title>투표하기</Title>
            <Question>투표 질문투표 질문투표 질문투표 질문투표 질문투표 질문투표 질문투표 질문투표 질문</Question>
            <Description>부적절한 투표는 위에 있는 신고버튼을 이용해 신고해주세요</Description>
          </TextWrapper>

          <OptionsWrapper>
            {voteOptions.map((option) => (
              <VoteOption
                key={option.label}
                label={option.label}
                text={option.text}
                isSelected={selectedOption === option.label}
                onClick={() =>
                  setSelectedOption(prev =>
                    prev === option.label ? null : option.label
                  )
                }
              />
            ))}
          </OptionsWrapper>

          <SubmitButton onClick={handleVoteSubmit} disabled={!selectedOption}>
            투표 완료하기
          </SubmitButton>
        </ContentWrapper>
      </DoVoteContainer>
    </DoVoteLayout>
  );
}

export default DoVote;

const DoVoteLayout = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  background-color: ${color.white};
  min-height: 100vh;
`;

const DoVoteContainer = styled.div`
  width: 100%;
  padding: 100px 20px 40px 20px;
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

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

const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubmitButton = styled.button<{ disabled: boolean }>`
  width: 100%;
  padding: 20px;
  border-radius: 30px;
  border: none;
  background-color: ${props => props.disabled ? '#D1D5DB' : `${color.primary}`};
  color: ${color.white};
  font-size: 20px;
  font-weight: 600;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: background-color 0.2s ease;
  margin-top: 60px;

  &:hover {
    background-color: ${props => props.disabled ? '#D1D5DB' : `${color.primary}`};
  }
`;