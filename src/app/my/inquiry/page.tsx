"use client";

import React from "react";
import styled from "@emotion/styled";
import InquiryForm from "@/components/my/Inquiry/InquiryForm";
import Header from "@/components/common/Header";
import { useRouter } from "next/navigation";
import Image from "next/image";

const InquiryPage = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <Header 
        LeftItem={
          <BackButton onClick={handleBack}>
            <Image src="/svg/Back.svg" alt="Back" width={24} height={24} />
          </BackButton>
        }
        CenterItem={<Title>문의하기</Title>}
        types="reports"
      />
      <Container>
        <InquiryForm />
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 20px 16px;
  min-height: calc(100vh - 56px);
  margin-top: 64px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`;

export default InquiryPage;
