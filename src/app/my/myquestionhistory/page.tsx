"use client";

import React, { useState } from "react";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";
import QuestionList from "@/components/my/MyQuestion/QuestionList";
import Header from "@/components/common/Header";
import Image from "next/image";
import { useRouter } from "next/navigation";
import TabButton from "@/components/common/TabButton";

// 더미 데이터
const DUMMY_QUESTIONS = [
  {
    id: "1",
    title: "게시판 질문게시판 질문게시판 질문게시판 질문게시판 질문",
    author: "박땡땡",
    date: "2025-08-31 21:31",
    bookmarkCount: 16,
    commentCount: 10
  },
  {
    id: "2",
    title: "게시판 질문게시판 질문게시판 질문게시판 질문게시판 질문",
    author: "박땡땡",
    date: "2025-08-31 21:31",
    bookmarkCount: 16,
    commentCount: 10
  },
  {
    id: "3",
    title: "게시판 질문게시판 질문게시판 질문게시판 질문게시판 질문",
    author: "박땡땡",
    date: "2025-08-31 21:31",
    bookmarkCount: 16,
    commentCount: 10
  },
  {
    id: "4",
    title: "게시판 질문",
    author: "박땡땡",
    date: "2025-08-31 21:31",
    bookmarkCount: 16,
    commentCount: 4
  },
  {
    id: "5",
    title: "게시판 질문",
    author: "박땡땡",
    date: "2025-08-31 21:31",
    bookmarkCount: 16,
    commentCount: 4
  }
];

const MyQuestionHistoryPage = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'all' | 'recent'>('all');

  const handleBack = () => {
    router.back();
  };

  return (
    <MainPageLayout>
      <Header 
        LeftItem={
          <BackButton onClick={handleBack}>
            <Image src="/svg/Back.svg" alt="Back" width={24} height={24} />
          </BackButton>
        }
        CenterItem={<Title>질문 게시판 글 작성 내역</Title>}
        types="Nones"
      />
      
      <ContentContainer>
        <TabContainer>
          <TabButton 
            isActive={activeTab === 'all'} 
            onClick={() => setActiveTab('all')}
          >
            전체
          </TabButton>
          <TabButton 
            isActive={activeTab === 'recent'} 
            onClick={() => setActiveTab('recent')}
          >
            최신
          </TabButton>
        </TabContainer>
        
        <QuestionList questions={DUMMY_QUESTIONS} />
      </ContentContainer>
    </MainPageLayout>
  );
};

const MainPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  width: 100%;
  min-height: 100vh;
  background-color: ${color.white};
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

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${color.gray100};
  margin-bottom: 16px;
  width: 100%;
`;

export default MyQuestionHistoryPage;
