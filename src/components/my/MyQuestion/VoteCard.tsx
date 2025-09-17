"use client";

import React from "react";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";
import Image from "next/image";

const CATEGORY_EMOJI = {
  schoolLife: "🏫",
  dormitory: "🏠",
  humor: "😄",
};

const CATEGORY_TEXT = {
  schoolLife: "학교생활",
  dormitory: "기숙사",
  humor: "유머",
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
    text: () => "가이드 제작이 완료된 투표",
    color: color.primary,
  },
  onGoing: {
    text: () => "가이드가 제작 중인 투표",
    color: color.secondary,
  },
};

export interface VoteCardProps {
  id: string;
  title: string;
  category: "schoolLife" | "dormitory" | "humor";
  state: "urgent" | "default" | "finished" | "onGoing";
  voteCount: number;
  endDate?: string;
  onClick?: (id: string) => void;
}

const VoteCard = ({
  id,
  title,
  category,
  state,
  voteCount,
  endDate = "2025-08-31",
  onClick,
}: VoteCardProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick(id);
    }
  };

  const stateConfig = STATE_CONFIG[state];
  const statusText = stateConfig.text(endDate);
  const statusColor = stateConfig.color;

  return (
    <StyledVoteCard onClick={handleClick}>
      <CategoryEmoji category={category}>{CATEGORY_EMOJI[category]}</CategoryEmoji>
      
      <ContentWrapper>
        <Title>{title}</Title>
        
        <InfoRow>
          <CategoryText>{CATEGORY_TEXT[category]}</CategoryText>
          
          <VoteCountWrapper>
            <Image src="/svg/Vote.svg" alt="투표수" width={10} height={10} />
            <VoteCountText>{voteCount}</VoteCountText>
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
  ${font.H13}
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
