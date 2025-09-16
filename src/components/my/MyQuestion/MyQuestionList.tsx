"use client";

import React from "react";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import VoteCard, { VoteCardProps } from "./VoteCard";
import { useRouter } from "next/navigation";

interface MyQuestionListProps {
  questions: Omit<VoteCardProps, "onClick">[];
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
          {...question}
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
