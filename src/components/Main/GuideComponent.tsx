"use client";
import React from "react";
import styled from "@emotion/styled";
import { mockMainGuideData } from "@/mock/GuideComponent";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";

const GuideComponent = () => {
  return (
    <Root>
      <Section>
        <SectionBody>
          {mockMainGuideData.map((item) => (
            <GuideCard key={item.id}>
              <GuideEmoji src={item.thumnail} alt="thumbnail" />
              <GuideTextWrap>
                <GuideTitle>{item.title}</GuideTitle>
                <GuideMeta>
                  <GuideTag>{item.category}</GuideTag>
                    <GuideCountIcon />
                    <GuideCount>{item.markcount}</GuideCount>
                </GuideMeta>
              </GuideTextWrap>
            </GuideCard>
          ))}
        </SectionBody>
      </Section>
    </Root>
  );
};

export default GuideComponent;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width : 90%;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
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
  height: 67px;
  border: 1px solid ${color.gray50};
  border-radius: 8px;
  background: ${color.white};
  padding: 0 16px;
    box-shadow: 
    -4px -4px 10px 0 rgba(0,0,0,0.03),
     4px  4px 10px 0 rgba(0,0,0,0.03);
`;

const GuideEmoji = styled.img`
  width: 28px;
  height: 28px;
`;

const GuideTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

const GuideTitle = styled.div`
  color: ${color.black};
  font-family:  ${font.P13};
`;

const GuideMeta = styled.div`
  display: flex;
  align-items: center;
`;

const GuideTag = styled.div`
  color: ${color.gray600};
  font-family: ${font.P6};
`;

const GuideCountIcon = styled.span`
  width: 10px;
  height: 10px;
  background-color: ${color.gray500};
  -webkit-mask: url('/svg/Bookmark.svg') no-repeat center / contain;
  mask: url('/svg/Bookmark.svg') no-repeat center / contain;
  display: inline-block;
  margin-left:8px;
`;

const GuideCount = styled.div`
  color: ${color.gray600};
  font-family:${font.p2};
  margin-left:2px;
`;




