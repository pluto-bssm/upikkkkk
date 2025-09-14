"use client";

import React from "react";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";

// Figma node: 392:6229
const imgSrc = "http://localhost:3845/assets/placeholder-392-6229.svg";

const Node3926229 = (): React.ReactElement => {
  return (
    <Card data-node-id="392:6229">
      <Thumb>
        <img src={imgSrc} alt="node-392-6229" />
      </Thumb>

      <Body>
        <Row>
          <Heading>섹션 타이틀</Heading>
          <Count>24</Count>
        </Row>

        <Description>간단한 설명 텍스트가 이 자리에 들어갑니다.</Description>

        <Actions>
          <PrimaryBtn>참여하기</PrimaryBtn>
          <SecondaryBtn>자세히</SecondaryBtn>
        </Actions>
      </Body>
    </Card>
  );
};

export default Node3926229;

/* Styled components (styles at bottom) */
const Card = styled.article`
  display: flex;
  gap: 12px;
  align-items: center;
  background: ${color.white};
  padding: 12px;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
`;

const Thumb = styled.div`
  width: 64px;
  height: 64px;
  flex: 0 0 64px;
  border-radius: 10px;
  overflow: hidden;
  background: ${color.gray100};

  img { width: 100%; height: 100%; object-fit: cover; }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Heading = styled.div`
  ${font.H1}
  color: ${color.black};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Count = styled.div`
  ${font.H3}
  color: ${color.gray500};
`;

const Description = styled.div`
  ${font.H4}
  color: ${color.gray600};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Actions = styled.div`
  display: flex;
  gap: 8px;
`;

const PrimaryBtn = styled.button`
  ${font.btn1}
  background: ${color.primary};
  color: ${color.white};
  border: none;
  padding: 6px 10px;
  border-radius: 8px;
`;

const SecondaryBtn = styled.button`
  ${font.btn2}
  background: transparent;
  color: ${color.gray600};
  border: 1px solid ${color.gray200};
  padding: 6px 10px;
  border-radius: 8px;
`;
