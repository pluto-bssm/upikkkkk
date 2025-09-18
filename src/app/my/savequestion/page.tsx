"use client";

import React, { useState } from 'react';
import styled from "@emotion/styled";
import Header from "@/components/common/Header";
import Image from "next/image";
import { useRouter } from "next/navigation";
import QuestionItem from "@/components/my/SavedQuestion/QuestionItem";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";
import TabButton from "@/components/common/TabButton";

const DUMMY_SAVED_QUESTIONS = [
  {
    id: 1,
    title: "게시판 질문게시판 질문게시판 질문게시판 질문게시판 질문",
    date: "2025-08-31 21:31",
    views: 16,
    comments: 10
  },
  {
    id: 2,
    title: "게시판 질문게시판 질문게시판 질문게시판 질문게시판 질문",
    date: "2025-08-31 21:31",
    views: 16,
    comments: 10
  },
  {
    id: 3,
    title: "게시판 질문게시판 질문게시판 질문게시판 질문게시판 질문",
    date: "2025-08-31 21:31",
    views: 16,
    comments: 10
  },
  {
    id: 4,
    title: "게시판 질문게시판 질문게시판 질문게시판 질문게시판 질문",
    date: "2025-08-31 21:31",
    views: 16,
    comments: 10
  },
  {
    id: 5,
    title: "게시판 질문게시판 질문게시판 질문게시판 질문게시판 질문",
    date: "2025-08-31 21:31",
    views: 16,
    comments: 10
  }
];

const SavedQuestionPage = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'all' | 'recent'>('all');

  const handleBack = () => {
    router.back();
  };

  const handleQuestionClick = (id: number) => {
    console.log(`질문 ${id} 클릭됨`);
  };

  return (
    <PageContainer>
      <Header 
        LeftItem={
          <BackButton onClick={handleBack}>
            <Image src="/svg/Back.svg" alt="Back" width={24} height={24} />
          </BackButton>
        }
        types="saveQuestion"
      />
        
        <QuestionList>
          {DUMMY_SAVED_QUESTIONS.map(question => (
            <QuestionItem
              key={question.id}
              title={question.title}
              date={question.date}
              views={question.views}
              comments={question.comments}
              onClick={() => handleQuestionClick(question.id)}
            />
          ))}
        </QuestionList>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${color.white};
  align-items: center;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
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
  ${font.H7}
  margin: 0;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 20px 16px;
  margin-top: 56px;
  width: 100%;
`;

const QuestionList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${color.gray100};
  margin-bottom: 16px;
  width: 100%;
`;

export default SavedQuestionPage;
