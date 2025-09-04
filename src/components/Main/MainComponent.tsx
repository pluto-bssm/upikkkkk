"use client";
import React from "react";
import styled from "@emotion/styled";

const MainComponent: React.FC = () => {
  return (
    <Root>
      <Section>
        <SectionHeader>
          <SectionTitle>인기 가이드</SectionTitle>
        </SectionHeader>
        <SectionBody>
          <GuideCard>
            <GuideEmoji>⛺️</GuideEmoji>
            <GuideTextWrap>
              <GuideTitle>가이드 제목</GuideTitle>
              <GuideMeta>
                <GuideTag>기숙사</GuideTag>
                <GuideCountWrap>
                  <GuideCountIcon aria-hidden />
                  <GuideCount>16</GuideCount>
                </GuideCountWrap>
              </GuideMeta>
            </GuideTextWrap>
          </GuideCard>
          <GuideCard>
            <GuideEmoji>😁</GuideEmoji>
            <GuideTextWrap>
              <GuideTitle>가이드 제목</GuideTitle>
              <GuideMeta>
                <GuideTag>유머</GuideTag>
                <GuideCountWrap>
                  <GuideCountIcon aria-hidden />
                  <GuideCount>16</GuideCount>
                </GuideCountWrap>
              </GuideMeta>
            </GuideTextWrap>
          </GuideCard>
          <GuideCard>
            <GuideEmoji>🏫</GuideEmoji>
            <GuideTextWrap>
              <GuideTitle>가이드 제목</GuideTitle>
              <GuideMeta>
                <GuideTag>학교생활</GuideTag>
                <GuideCountWrap>
                  <GuideCountIcon aria-hidden />
                  <GuideCount>16</GuideCount>
                </GuideCountWrap>
              </GuideMeta>
            </GuideTextWrap>
          </GuideCard>
        </SectionBody>
      </Section>

      <Section>
        <SectionHeader>
          <SectionTitle>인기 투표</SectionTitle>
        </SectionHeader>
        <VoteList>
          <VoteCard>
            <VoteEmoji>⛺️</VoteEmoji>
            <VoteTextWrap>
              <VoteTitle>투표 제목</VoteTitle>
              <VoteMeta>
                <VoteTag>기숙사</VoteTag>
                <VoteCountWrap>
                  <VoteCount>16</VoteCount>
                </VoteCountWrap>
                <VoteDue>2025-08-31에 마감되는 투표</VoteDue>
              </VoteMeta>
            </VoteTextWrap>
          </VoteCard>
          <VoteCard>
            <VoteEmoji>⛺️</VoteEmoji>
            <VoteTextWrap>
              <VoteTitle>투표 제목</VoteTitle>
              <VoteMeta>
                <VoteTag>기숙사</VoteTag>
                <VoteCountWrap>
                  <VoteCount>16</VoteCount>
                </VoteCountWrap>
                <VoteDue>2025-08-31에 마감되는 투표</VoteDue>
              </VoteMeta>
            </VoteTextWrap>
          </VoteCard>
        </VoteList>
      </Section>
    </Root>
  );
};

export default MainComponent;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 350px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  height: 37px;
`;

const SectionTitle = styled.div`
  color: #616161;
  font-size: 14px;
`;

const SectionBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const GuideCard = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  width: 350px;
  height: 67px;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  background: #fdfffc;
  padding: 0 16px;
`;

const GuideEmoji = styled.div`
  font-size: 28px;
`;

const GuideTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

const GuideTitle = styled.div`
  color: #011627;
  font-size: 15px;
  font-weight: 600;
`;

const GuideMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const GuideTag = styled.div`
  color: #777777;
  font-size: 8px;
`;

const GuideCountWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const GuideCountIcon = styled.span`
  width: 10px;
  height: 10px;
  display: inline-block;
`;

const GuideCount = styled.div`
  color: #777777;
  font-size: 8px;
`;

const VoteList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const VoteCard = styled(GuideCard)`
  width: 313px;
`;

const VoteEmoji = styled(GuideEmoji)``;

const VoteTextWrap = styled(GuideTextWrap)``;

const VoteTitle = styled(GuideTitle)``;

const VoteMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
`;

const VoteTag = styled(GuideTag)``;

const VoteCountWrap = styled(GuideCountWrap)``;

const VoteCount = styled(GuideCount)``;

const VoteDue = styled.div`
  color: #b3b3b3;
  font-size: 8px;
`;


