"use client";

import React, { useState } from 'react';
import styled from "@emotion/styled";
import Header from "@/components/common/Header";
import Image from "next/image";
import { useRouter } from "next/navigation";
import GuideItem from "@/components/my/SavedGuide/GuideItem";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";
import TabButton from "@/components/common/TabButton";

const DUMMY_SAVED_GUIDES = [
  {
    id: 1,
    title: "가이드 제목",
    category: "기숙사",
    views: 16,
    emoji: "🏫"
  },
  {
    id: 2,
    title: "가이드 제목",
    category: "학식",
    views: 16,
    emoji: "🏫"
  },
  {
    id: 3,
    title: "가이드 제목",
    category: "기숙사",
    views: 16,
    emoji: "🏫"
  },
  {
    id: 4,
    title: "가이드 제목",
    category: "기숙사",
    views: 16,
    emoji: "🏫"
  },
  {
    id: 5,
    title: "가이드 제목",
    category: "기숙사",
    views: 16,
    emoji: "⚠️"
  },
  {
    id: 6,
    title: "가이드 제목",
    category: "기숙사",
    views: 16,
    emoji: "🏫"
  },
  {
    id: 7,
    title: "가이드 제목",
    category: "학식",
    views: 16,
    emoji: "😊"
  },
  {
    id: 8,
    title: "가이드 제목",
    category: "기숙사",
    views: 16,
    emoji: "🏫"
  },
  {
    id: 9,
    title: "가이드 제목",
    category: "기숙사",
    views: 16,
    emoji: "🏫"
  }
];

const SaveGuidePage = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'all' | 'recent'>('all');

  const handleBack = () => {
    router.back();
  };
  return (
    <PageContainer>
      <Header 
        LeftItem={
          <BackButton onClick={handleBack}>
            <Image src="/svg/Back.svg" alt="Back" width={24} height={24} />
          </BackButton>
        }
        CenterItem={<Title>저장한 가이드</Title>}
        types="saveGuide"
      />
      
      <ContentContainer>

        <GuideList>
          {DUMMY_SAVED_GUIDES.map(guide => (
            <GuideItem
              key={guide.id}
              title={guide.title}
              category={guide.category}
              views={guide.views}
              emoji={guide.emoji}
              onClick={() => handleGuideClick(guide.id)}
            />
          ))}
        </GuideList>
      </ContentContainer>
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

const GuideList = styled.div`
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

export default SaveGuidePage;