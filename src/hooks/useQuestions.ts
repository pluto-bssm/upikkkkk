"use client";

import { useQuery, useMutation } from '@apollo/client/react';
import { GET_QUESTIONS, GET_QUESTION_BY_ID, GET_COMMENTS, CREATE_COMMENT } from '@/graphql/queries';
import { Question, Comment, Page, CreateCommentInput } from '@/types/api';

interface QuestionsData {
  board: {
    getQuestionList: Page<Question>;
  }
}

export function useQuestions(page: number = 0, size: number = 10) {
  const { data, loading, error, refetch } = useQuery<QuestionsData>(
    GET_QUESTIONS,
    {
      variables: { page, size },
      fetchPolicy: 'network-only'
    }
  );

  return {
    questions: data?.board?.getQuestionList?.content || [],
    totalElements: data?.board?.getQuestionList?.totalElements || 0,
    totalPages: data?.board?.getQuestionList?.totalPages || 0,
    loading,
    error,
    refetch
  };
}

interface QuestionByIdData {
  board: {
    getQuestionDetail: Question;
  }
}

export function useQuestionById(id: string) {
  const { data, loading, error } = useQuery<QuestionByIdData>(
    GET_QUESTION_BY_ID,
    {
      variables: { id },
      fetchPolicy: 'network-only'
    }
  );

  return {
    question: data?.board?.getQuestionDetail,
    loading,
    error
  };
}

interface CommentsData {
  board: {
    getComments: Page<Comment>;
  }
}

export function useComments(boardId: string, page: number = 0, size: number = 10) {
  const { data, loading, error, refetch } = useQuery<CommentsData>(
    GET_COMMENTS,
    {
      variables: { boardId, page, size },
      fetchPolicy: 'network-only'
    }
  );

  return {
    comments: data?.board?.getComments?.content || [],
    totalElements: data?.board?.getComments?.totalElements || 0,
    totalPages: data?.board?.getComments?.totalPages || 0,
    loading,
    error,
    refetch
  };
}

interface CreateCommentData {
  board: {
    createComment: Comment;
  }
}

export function useCreateComment() {
  const [createCommentMutation, { loading, error }] = useMutation<CreateCommentData, { input: CreateCommentInput }>(
    CREATE_COMMENT
  );

  const createComment = async (input: CreateCommentInput) => {
    try {
      const result = await createCommentMutation({
        variables: { input },
        refetchQueries: [
          {
            query: GET_COMMENTS,
            variables: { boardId: input.boardId, page: 0, size: 10 }
          }
        ]
      });
      return result.data?.board?.createComment;
    } catch (err) {
      throw err;
    }
  };

  return {
    createComment,
    loading,
    error
  };
}
