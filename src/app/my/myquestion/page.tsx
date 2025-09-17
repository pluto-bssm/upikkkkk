"use client";

import React from "react";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import MyPageHeader from "@/components/my/MyQuestion/MyPageHeader";
import MyQuestionList from "@/components/my/MyQuestion/MyQuestionList";

// 더미 데이터
const DUMMY_QUESTIONS = [
  {
    id: "1",
    title: "투표 제목",
    category: "schoolLife" as const,
    state: "default" as const,
    voteCount: 16,
    endDate: "2025-08-31"
  },
  {
    id: "2",
    title: "투표 제목",
    category: "schoolLife" as const,
    state: "default" as const,
    voteCount: 16,
    endDate: "2025-08-31"
  },
  {
    id: "3",
    title: "투표 제목",
    category: "schoolLife" as const,
    state: "finished" as const,
    voteCount: 16,
    endDate: "2025-08-31"
  },
  {
    id: "4",
    title: "투표 제목",
    category: "schoolLife" as const,
    state: "default" as const,
    voteCount: 16,
    endDate: "2025-08-31"
  },
  {
    id: "5",
    title: "투표 제목",
    category: "schoolLife" as const,
    state: "onGoing" as const,
    voteCount: 16,
    endDate: "2025-08-31"
  },
  {
    id: "6",
    title: "투표 제목",
    category: "schoolLife" as const,
    state: "urgent" as const,
    voteCount: 16,
    endDate: "2025-08-31"
  },
  {
    id: "7",
    title: "투표 제목",
    category: "schoolLife" as const,
    state: "finished" as const,
    voteCount: 16,
    endDate: "2025-08-31"
  }
];

const MyQuestionPage = () => {
  return (
    <MainPageLayout>
      <MyPageHeader title="내가 만든 투표" backLink="/my" headerType="makeVote" />
      <MyQuestionList questions={DUMMY_QUESTIONS} />
    </MainPageLayout>
  );
};

export default MyQuestionPage;

const MainPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  width: 100%;
  min-height: 100vh;
  background-color: ${color.white};
`

const PageContainer = styled.main`
  background: ${color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`;