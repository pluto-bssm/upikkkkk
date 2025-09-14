"use client";

import React from "react";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";

// MadeVote component (derived from Figma node 383:7250)
type MadeVoteProps = {
  imgSrc?: string;
  title?: string;
  subtitle?: string;
  author?: string;
  date?: string;
};

const MadeVote = ({
  imgSrc = "http://localhost:3845/assets/placeholder-383-7250.svg",
  title = "타이틀 텍스트",
  subtitle = "보조 설명 또는 서브타이틀",
  author = "작성자명",
  date = "2025-09-14",
}: MadeVoteProps): React.ReactElement => {
  return (
    <StyledMadeVote>
      <Preview>
        <img src={imgSrc} alt={title} />
      </Preview>

      <Content>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>

        <MetaRow>
          <Author>{author}</Author>
          <DateText>{date}</DateText>
        </MetaRow>
      </Content>
    </StyledMadeVote>
  );
};

export default MadeVote;

/* Styled components (kept at bottom per project convention) */
const StyledMadeVote = styled.article`
  display: flex;
  align-items: center;
  gap: 16px;
  background: ${color.white};
  padding: 12px 16px;
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.04);
`;

const Preview = styled.div`
  width: 56px;
  height: 56px;
  flex: 0 0 56px;
  border-radius: 8px;
  background: ${color.gray100};
  display: flex;
  align-items: center;
  justify-content: center;

  img { width: 100%; height: 100%; object-fit: cover; border-radius: 6px; }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`;

const Title = styled.div`
  color: ${color.black};
  ${font.H1}
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Subtitle = styled.div`
  color: ${color.gray600};
  ${font.H2}
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const MetaRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Author = styled.div`
  color: ${color.gray500};
  ${font.H3}
`;

const DateText = styled.div`
  color: ${color.gray400};
  ${font.H4}
`;
