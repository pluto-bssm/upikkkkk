"use client";

import React from "react";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";
import Image from "next/image";

export interface QuestionCardProps {
  id: string;
  title: string;
  author: string;
  date: string;
  bookmarkCount: number;
  commentCount: number;
  onClick?: (id: string) => void;
}

const QuestionCard = ({
  id,
  title,
  author,
  date,
  bookmarkCount,
  commentCount,
  onClick,
}: QuestionCardProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick(id);
    }
  };

  return (
    <StyledCardWrapper onClick={handleClick}>
      <ContentContainer>
        <div>
          <Title>{title}</Title>
          
          <InfoRow>
            <InfoItem>
              <InfoText>{author}</InfoText>
            </InfoItem>
            
            <InfoItem>
              <InfoText>{date}</InfoText>
            </InfoItem>
            
            <InfoItem>
              <Image src="/svg/Bookmark.svg" alt="북마크" width={10} height={10} />
              <InfoText>{bookmarkCount}</InfoText>
            </InfoItem>
          </InfoRow>
        </div>
      </ContentContainer>
      
      <CommentCountBox>
        <CommentCount>{commentCount}</CommentCount>
        <CommentText>댓글</CommentText>
      </CommentCountBox>
    </StyledCardWrapper>
  );
};

const StyledCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid ${color.gray100};
  box-sizing: border-box;
  cursor: pointer;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
  min-width: 0;
`;

const Title = styled.div`
  ${font.H6}
  color: ${color.black};
  margin: 0;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  
  &:not(:last-child) {
    margin-right: 6px;
  }
`;

const InfoText = styled.span`
  ${font.p2}
  color: ${color.gray500};
  white-space: nowrap;
`;

const CommentCountBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 40px;
  background: ${color.gray50};
  border-radius: 8px;
  padding: 4px 8px;
  box-sizing: border-box;
`;

const CommentCount = styled.div`
  ${font.H6}
  font-weight: bold;
  color: ${color.black};
  text-align: center;
`;

const CommentText = styled.div`
  ${font.H2}
  color: ${color.gray400};
  text-align: center;
`;

export default QuestionCard;
