"use client";

import React from "react";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";

interface QuestionItemProps {
  title: string;
  date: string;
  views: number;
  comments: number;
  onClick?: () => void;
}

const QuestionItem = ({ title, date, views, comments, onClick }: QuestionItemProps) => {
  return (
    <Container onClick={onClick}>
      <Content>
        <Title>{title}</Title>
        <InfoRow>
          <InfoText>{date}</InfoText>
          <Divider />
          <InfoText>{views}</InfoText>
        </InfoRow>
      </Content>
      <CommentCount>
        <Count>{comments}</Count>
        <Label>댓글</Label>
      </CommentCount>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid ${color.gray100};
  cursor: pointer;

  &:hover {
    background-color: ${color.gray50};
  }
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
  gap: 8px;
`;

const InfoText = styled.span`
  ${font.H3}
  color: ${color.gray400};
`;

const Divider = styled.div`
  width: 2px;
  height: 10px;
  background-color: ${color.gray200};
`;

const CommentCount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${color.gray50};
  border-radius: 8px;
  padding: 4px 8px;
  min-width: 40px;
`;

const Count = styled.span`
  ${font.H6}
  font-weight: bold;
  color: ${color.black};
`;

const Label = styled.span`
  ${font.H2}
  color: ${color.gray400};
`;

export default QuestionItem;
