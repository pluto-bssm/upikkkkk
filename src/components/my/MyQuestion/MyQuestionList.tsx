"use client";

import React from "react";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import VoteCard, { VoteCardProps } from "./VoteCard";
import { useRouter } from "next/navigation";

interface MyQuestionListProps {
  questions: Array<{
    id: string;
    title: string;
    category: string;
    state: string;
    voteCount: number;
    endDate: string;
    createdAt: string;
  }>;
}

const MyQuestionList = ({ questions }: MyQuestionListProps) => {
  const router = useRouter();

  const handleVoteClick = (id: string) => {
    router.push(`/Vote/${id}`);
  };

  return (
    <Container>
      {questions.map((question) => (
        <VoteCard
          key={question.id}
          vote={{
            id: question.id,
            title: question.title,
            category: question.category,
            status: question.state,
            totalResponses: question.voteCount,
            finishedAt: question.endDate,
            createdAt: question.createdAt
          }}
          onClick={handleVoteClick}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  width: 100%;
`;

export default MyQuestionList;
