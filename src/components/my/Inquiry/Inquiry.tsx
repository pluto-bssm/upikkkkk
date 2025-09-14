"use client";

import React from "react";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";

// Reusable Inquiry card (from Figma node 392:6229)
type InquiryProps = {
  imgSrc?: string;
  title?: string;
  count?: number;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
};

const Inquiry = ({
  imgSrc = "http://localhost:3845/assets/placeholder-392-6229.svg",
  title = "섹션 타이틀",
  count = 24,
  description = "간단한 설명 텍스트가 이 자리에 들어갑니다.",
  primaryLabel = "참여하기",
  secondaryLabel = "자세히",
}: InquiryProps): React.ReactElement => {
  return (
    <Card data-node-id="392:6229">
      <Thumb>
        <img src={imgSrc} alt={title} />
      </Thumb>

      <Body>
        <Row>
          <Heading>{title}</Heading>
          <Count>{count}</Count>
        </Row>

        <Description>{description}</Description>

        <Actions>
          <PrimaryBtn>{primaryLabel}</PrimaryBtn>
          <SecondaryBtn>{secondaryLabel}</SecondaryBtn>
        </Actions>
      </Body>
    </Card>
  );
};

export default Inquiry;

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
