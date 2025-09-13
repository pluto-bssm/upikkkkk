'use client'

import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";

interface VoteOptionProps {
  label: string;
  text: string;
  isSelected?: boolean;
  onClick: () => void;
}

const VoteOption = ({ label, text, isSelected = false, onClick }: VoteOptionProps) => {
  return (
    <VoteOptionContainer onClick={onClick} isSelected={isSelected}>
      <LabelCircle isSelected={isSelected}>
        {isSelected && <img src="/svg/Check.svg"/> }
        {!isSelected && label}
      </LabelCircle>
      <OptionText>{text}</OptionText>
    </VoteOptionContainer>
  );
};

export default VoteOption;

const VoteOptionContainer = styled.div<{ isSelected: boolean }>`
  width: 100%;
  padding: 10px 20px;
  border-radius: 18px;
  border: 1px solid ${props => props.isSelected ? color.primary : '#E5E7EB'};
  background-color: ${props => props.isSelected ? '#FEF3E2' : color.white};
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  margin-bottom: 12px;
  transition: all 0.2s ease;

`;

const LabelCircle = styled.div<{ isSelected: boolean }>`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${props => props.isSelected ? color.primary : '#F3F4F6'};
  color: ${props => props.isSelected ? color.white : '#6B7280'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 15px;
  flex-shrink: 0;
`;

const OptionText = styled.span`
  font-size: 14px;
  color: ${color.gray600};
  font-weight: 500;
`;