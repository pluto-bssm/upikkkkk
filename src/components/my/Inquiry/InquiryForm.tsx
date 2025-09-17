"use client";

import React, { useState } from "react";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";
import TypeButton from "./TypeButton";
import InputField from "./InputField";
import Checkbox from "./Checkbox";
import SuccessModal from "./SuccessModal/SuccessModal";

const InquiryForm = () => {
  const [inquiryType, setInquiryType] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [agreeTerms, setAgreeTerms] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  const handleSubmit = () => {
    if (!inquiryType || !title || !content || !email || !agreeTerms) {
      return;
    }

    console.log({
      inquiryType,
      title,
      content,
      email,
      agreeTerms
    });
    setShowSuccessModal(true);
  };

  const handleReset = () => {
    setInquiryType("");
    setTitle("");
    setContent("");
    setEmail("");
    setAgreeTerms(false);
  };

  return (
    <>
      <Container>
        <Title>문의하기</Title>
        <Description>
          사용 중 불편하신 점이나 문의사항을 남겨주시면 빠르게 도와드리겠습니다.
        </Description>

        <Section>
          <SectionTitle>문의 유형</SectionTitle>
          <TypeButtonGroup>
            <TypeButton 
              label="일반 문의" 
              selected={inquiryType === "일반 문의"} 
              onClick={() => setInquiryType("일반 문의")} 
            />
            <TypeButton 
              label="오류 제보" 
              selected={inquiryType === "오류 제보"} 
              onClick={() => setInquiryType("오류 제보")} 
            />
            <TypeButton 
              label="기능 제안" 
              selected={inquiryType === "기능 제안"} 
              onClick={() => setInquiryType("기능 제안")} 
            />
            <TypeButton 
              label="기타" 
              selected={inquiryType === "기타"} 
              onClick={() => setInquiryType("기타")} 
            />
          </TypeButtonGroup>
        </Section>

        <Section>
          <InputField 
            label="제목" 
            placeholder="제목을 입력해주세요." 
            required 
            value={title} 
            onChange={setTitle} 
          />
        </Section>

        <Section>
          <InputField 
            label="내용" 
            placeholder="문의 내용을 상세히 적어주세요." 
            required 
            value={content} 
            onChange={setContent} 
            multiline 
            minHeight="180px"
            helperText="*답변은 이메일로 발송됩니다."
          />
        </Section>

        <Section>
          <InputField 
            label="이메일" 
            placeholder="이메일 주소를 입력해주세요." 
            required 
            value={email} 
            onChange={setEmail}
          />
        </Section>

        <AgreementSection>
          <Checkbox 
            label="개인정보 수집 및 이용에 동의합니다." 
            checked={agreeTerms} 
            onChange={setAgreeTerms} 
          />
          <TermsDescription>
            문의하기 접수를 위한 최소한의 개인정보(이메일)를 수집하며, 문의 답변 후 바로 파기됩니다.
          </TermsDescription>
        </AgreementSection>

        <ButtonGroup>
          <ResetButton onClick={handleReset}>다시 작성</ResetButton>
          <SubmitButton onClick={handleSubmit}>제출하기</SubmitButton>
        </ButtonGroup>
      </Container>

      <SuccessModal 
        visible={showSuccessModal}
        message="문의하신 내용이 접수되었습니다."
        onClose={() => {
          setShowSuccessModal(false);
          handleReset();
        }} 
      />
    </>
  );
};

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  ${font.H7}
  color: ${color.black};
  margin-bottom: 12px;
  text-align: center;
`;

const Description = styled.p`
  ${font.H5}
  color: ${color.gray600};
  text-align: center;
  margin-bottom: 40px;
`;

const Section = styled.div`
  margin-bottom: 24px;
`;

const SectionTitle = styled.div`
  ${font.H6}
  color: ${color.gray600};
  margin-bottom: 16px;
  padding: 0 20px;
`;

const TypeButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 16px;
`;

const AgreementSection = styled.div`
  margin: 32px 0;
  padding: 0 20px;
`;

const TermsDescription = styled.p`
  ${font.H3}
  color: ${color.gray300};
  margin-top: 8px;
  margin-left: 28px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 40px;
`;

const ResetButton = styled.button`
  padding: 14px 32px;
  border-radius: 16px;
  background-color: ${color.gray100};
  border: none;
  ${font.H4}
  color: ${color.gray600};
  cursor: pointer;
  
  &:hover {
    background-color: ${color.gray200};
  }
`;

const SubmitButton = styled.button`
  padding: 14px 32px;
  border-radius: 16px;
  background-color: ${color.primary};
  border: none;
  ${font.H4}
  color: ${color.white};
  font-weight: 700;
  cursor: pointer;
  
  &:hover {
    background-color: ${color.primary};
    opacity: 0.9;
  }
`;

export default InquiryForm;
