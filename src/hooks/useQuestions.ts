"use client";

import { useQuery, useMutation } from "@apollo/client/react";
import {
  GET_QUESTIONS,        // feat#8: board.getAllPosts
  GET_QUESTION_BY_ID,   // feat#8: board.getPostById(id)
  GET_COMMENTS,         // feat#8: board.getComments(postId)
  CREATE_COMMENT,       // feat#8: board.createComment(input)
} from "@/graphql/queries";
import type { Question, Comment, CreateCommentInput } from "@/types/api";

/* ========================= Questions ========================= */

interface QuestionsDataFeat8 {
  board: {
    getAllPosts: Question[];
  };
}

export function useQuestions() {
  const { data, loading, error, refetch } = useQuery<QuestionsDataFeat8>(
    GET_QUESTIONS,
    { fetchPolicy: "network-only" }
  );

  return {
    questions: data?.board?.getAllPosts || [],
    loading,
    error,
    refetch,
  };
}

/* ========================= Question Detail ========================= */

interface QuestionByIdDataFeat8 {
  board: {
    getPostById: Question;
  };
}

export function useQuestionById(id: string) {
  const { data, loading, error, refetch } = useQuery<QuestionByIdDataFeat8>(
    GET_QUESTION_BY_ID,
    {
      variables: { id },
      fetchPolicy: "cache-first",
      skip: !id,
    }
  );

  return {
    question: data?.board?.getPostById,
    loading,
    error,
    refetch,
  };
}

/* ========================= Comments ========================= */

interface CommentsDataFeat8 {
  board: {
    getComments: Comment[];
  };
}

export function useComments(postId: string) {
  const { data, loading, error, refetch } = useQuery<CommentsDataFeat8>(
    GET_COMMENTS,
    {
      variables: { postId },
      fetchPolicy: "cache-first",
      skip: !postId,
    }
  );

  return {
    comments: data?.board?.getComments || [],
    loading,
    error,
    refetch,
  };
}

/* ========================= Create Comment ========================= */

interface CreateCommentDataFeat8 {
  board: {
    createComment: Comment;
  };
}

export function useCreateComment() {
  const [createCommentMutation, { loading, error }] = useMutation<
    CreateCommentDataFeat8,
    { input: CreateCommentInput }
  >(CREATE_COMMENT);

  const createComment = async (input: CreateCommentInput) => {
    const result = await createCommentMutation({
      variables: { input },
      refetchQueries: [
        {
          query: GET_COMMENTS,
          variables: { postId: input.postId }, // feat#8: 페이지네이션 없음
        },
      ],
    });
    return result.data?.board?.createComment;
  };

  return {
    createComment,
    loading,
    error,
  };
}