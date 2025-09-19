"use client";

import React from "react";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";
import Image from "next/image";
import { Vote } from "@/types/api";
import { format, isBefore, addDays } from "date-fns";

const CATEGORY_EMOJI: Record<string, string> = {
  "기숙사": "�",
  "학식": "�",
  "수업": "�",
  "동아리": "🎭",
  "교통": "🚌",
  "기타": "✨",
  "default": "🏫",
};

const CATEGORY_TEXT: Record<string, string> = {
  "기숙사": "기숙사",
  "학식": "학식",
  "수업": "수업",
  "동아리": "동아리",
  "교통": "교통",
  "기타": "기타",
  "default": "학교생활",
};

const STATE_CONFIG = {
  urgent: {
    text: (date: string) => `${date}에 마감되는 투표`,
    color: color.accent,
  },
  default: {
    text: (date: string) => `${date}에 마감되는 투표`,
    color: color.gray400,
  },
  finished: {
    text: () => "마감된 투표",
    color: color.primary,
  },
  onGoing: {
    text: () => "진행 중인 투표",
    color: color.secondary,
  },
};

export interface VoteCardProps {
  vote: Vote;
  onClick?: (id: string) => void;
}

const VoteCard = ({
  vote,
  onClick,
}: VoteCardProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick(vote.id);
    }
  };

  const getVoteState = () => {
    const today = new Date();
    const finishDate = new Date(vote.finishedAt);
    
    if (isBefore(finishDate, today)) {
      return "finished";
    }
    
    const urgentThreshold = addDays(today, 3);
    if (isBefore(finishDate, urgentThreshold)) {
      return "urgent";
    }
    
    return "default";
  };

  const state = getVoteState();
  const stateConfig = STATE_CONFIG[state];
  const formattedDate = format(new Date(vote.finishedAt), "yyyy-MM-dd");
  const statusText = state === "finished" 
    ? stateConfig.text("") 
    : stateConfig.text(formattedDate);
  const statusColor = stateConfig.color;

  const categoryKey = vote.category in CATEGORY_EMOJI ? vote.category : "default";
  
  return (
    <StyledVoteCard onClick={handleClick}>
      <CategoryEmoji category={categoryKey}>
        {CATEGORY_EMOJI[categoryKey]}
      </CategoryEmoji>
      
      <ContentWrapper>
        <Title>{vote.title}</Title>
        
        <InfoRow>
          <CategoryText>{CATEGORY_TEXT[categoryKey]}</CategoryText>
          
          <VoteCountWrapper>
            <Image src="/svg/Vote.svg" alt="투표수" width={10} height={10} />
            <VoteCountText>{vote.totalResponses || 0}</VoteCountText>
          </VoteCountWrapper>
          
          <StatusText color={statusColor}>{statusText}</StatusText>
        </InfoRow>
      </ContentWrapper>
    </StyledVoteCard>
  );
};

const StyledVoteCard = styled.div`
  position: relative;
  display: flex;
  gap: 16px;
  align-items: flex-start;
  padding: 18px 20px;
  height: 67px;
  background: ${color.white};
  border-radius: 8px;
  box-shadow: -4px -4px 10px 0px rgba(0, 0, 0, 0.03), 4px 4px 10px 0px rgba(0, 0, 0, 0.03);
  border: 1px solid ${color.gray50};
  box-sizing: border-box;
  cursor: pointer;
  width: 100%;
`;

const CategoryEmoji = styled.div<{ category: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  width: 28px;
  height: 28px;
  overflow: clip;
  ${font.D1}
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
  min-width: 0;
`;

const Title = styled.div`
  ${font.H9}
  color: ${color.black};
  width: 100%;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  overflow: clip;
`;

const CategoryText = styled.div`
  ${font.p1}
  color: ${color.gray500};
`;

const VoteCountWrapper = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
  justify-content: center;
`;

const VoteCountText = styled.span`
  ${font.p2}
  color: ${color.gray500};
`;

const StatusText = styled.div<{ color: string }>`
  ${font.p2}
  color: ${props => props.color};
  margin-left: auto;
  text-align: right;
`;

export default VoteCard;
