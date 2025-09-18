"use client";

import React from "react";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";

interface GuideItemProps {
  title: string;
  category: string;
  views: number;
  emoji: string;
  onClick?: () => void;
}

const GuideItem = ({ title, category, views, emoji, onClick }: GuideItemProps) => {
  return (
    <Container onClick={onClick}>
      <EmojiContainer>{emoji}</EmojiContainer>
      <Content>
        <Title>{title}</Title>
        <InfoRow>
          <Category>{category}</Category>
          <ViewCount>{views}</ViewCount>
        </InfoRow>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: ${color.white};
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
  margin-bottom: 12px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
`;

const EmojiContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  margin-right: 16px;
  min-width: 40px;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h3`
  ${font.H6}
  color: ${color.black};
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Category = styled.span`
  ${font.H3}
  color: ${color.gray400};
`;

const ViewCount = styled.div`
  ${font.H3}
  color: ${color.gray400};
  display: flex;
  align-items: center;
  gap: 4px;
  
  &:before {
    content: "";
    display: inline-block;
    width: 14px;
    height: 14px;
    background-image: url('/svg/Eye.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export default GuideItem;
