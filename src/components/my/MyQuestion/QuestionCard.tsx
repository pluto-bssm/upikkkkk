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
  gap: 16px;
  padding: 20px;
  box-shadow: -4px -4px 10px 0px rgba(0, 0, 0, 0.03), 4px 4px 10px 0px rgba(0, 0, 0, 0.03);
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -20px;
  }
`;

const ContentContainer = styled.div`
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
  min-height: 36px;
  display: flex;
  align-items: center;
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
  width: 38px;
  height: 49px;
  background: ${color.gray50};
  border-radius: 8px;
  padding: 0 7.5px;
  box-sizing: border-box;
  font-family: 'Pretendard Variable';
`;

const CommentCount = styled.div`
  font-size: 15px;
  color: ${color.gray500};
  width: 23px;
  text-align: center;
`;

const CommentText = styled.div`
  font-size: 10px;
  color: ${color.gray500};
  width: 23px;
  text-align: center;
`;

export default QuestionCard;
