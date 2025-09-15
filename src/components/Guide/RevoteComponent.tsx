"use client";
import Reac, { useState} from "react";
import styled from "@emotion/styled";
import { mockRevoteeData } from "@/mock/RevoteComponent";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";

const RevoteComponent = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <Section>
        <SectionBody>
        {mockRevoteeData.map((text, idx) => (
            <GuideCard key={idx}
            isSelected={selected === idx}
            onClick={()=>setSelected(idx)}>
                <GuideTextWrap>
                <GuideTitle>{text}</GuideTitle>
                </GuideTextWrap>
            </GuideCard>
            ))}
        </SectionBody>
    </Section>
  );
};

export default RevoteComponent;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width : 90%;
`;

const SectionBody = styled.div`
  display: flex;
  flex-direction: column;
  gap:8px;
`;

const GuideCard = styled.div<{ isSelected:boolean}>`
  display: flex;
  align-items: center;
  gap: 14px;
  height: 67px;
  border: 1px solid
    ${({ isSelected }) => (isSelected ? color.primary : color.gray100)};
  border-radius: 16px;
  background-color: ${({ isSelected }) =>
    isSelected ? `${color.primary}33` : color.white};
  padding: 0 16px;
  box-shadow: 
    -4px -4px 10px 0 rgba(0,0,0,0.03),
     4px  4px 10px 0 rgba(0,0,0,0.03);
`;

const GuideTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

const GuideTitle = styled.div`
  color: ${color.gray600};
  font-family:  ${font.P1};
  text-align:center;
`;


