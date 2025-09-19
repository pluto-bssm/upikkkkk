"use client";

import { useQuery, useMutation } from '@apollo/client/react';
import { GET_QUESTIONS, GET_QUESTION_BY_ID, GET_COMMENTS, CREATE_COMMENT, REPORT_QUESTION,CREATE_QUESTION,REPORT_BOARD,REPORT_COMMENT } from '@/graphql/queries';
import { Question, Comment, Page, CreateCommentInput } from '@/types/api';

interface ReportCommentResponse {
  board: {
    reportComment: boolean;
  };
}

interface ReportCommentVariables {
  commentId: string;
  detail: string;
  reason: string;
}

export const useReportComment = () => {
  const [reportCommentMutation, { loading, error }] = useMutation<
    ReportCommentResponse,
    ReportCommentVariables
  >(REPORT_COMMENT);

  const reportComment = async (commentId: string, reason: string, detail: string) => {
    try {
      // commentId가 유효한지 확인
      if (!commentId || commentId.trim() === '') {
        return {
          success: false,
          error: '유효하지 않은 댓글 ID입니다.',
        };
      }

      const { data } = await reportCommentMutation({
        variables: {
          commentId: commentId.trim(),
          reason: reason.trim(),
          detail: detail.trim(),
        },
      });

      if (data?.board?.reportComment) {
        return {
          success: true,
          message: '댓글 신고가 성공적으로 접수되었습니다.',
        };
      }

      return {
        success: false,
        error: '댓글 신고 접수에 실패했습니다.',
      };
    } catch (err) {
      console.error('댓글 신고 접수 오류:', err);
      return {
        success: false,
        error: err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.',
      };
    }
  };

  return {
    reportComment,
    loading,
    error,
  };
};


interface ReportBoardResponse {
  board: {
    reportBoard: boolean;
  };
}

interface ReportBoardVariables {
  boardId: string;
  detail: string;
  reason: string;
}

export const useReportBoard = () => {
  const [reportBoardMutation, { loading, error }] = useMutation<
    ReportBoardResponse,
    ReportBoardVariables
  >(REPORT_BOARD);

  const reportBoard = async (boardId: string, reason: string, detail: string) => {
    try {
      const { data } = await reportBoardMutation({
        variables: {
          boardId: boardId.trim(),
          reason: reason.trim(),
          detail: detail.trim(),
        },
      });

      if (data?.board?.reportBoard) {
        return {
          success: true,
          message: '신고가 성공적으로 접수되었습니다.',
        };
      }

      return {
        success: false,
        error: '신고 접수에 실패했습니다.',
      };
    } catch (err) {
      console.error('신고 접수 오류:', err);
      return {
        success: false,
        error: err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.',
      };
    }
  };

  return {
    reportBoard,
    loading,
    error,
  };
};

interface CreateQuestionResponse {
  board: {
    createQuestion: {
      title: string;
      content: string;
    };
  };
}

interface CreateQuestionVariables {
  title: string;
  content: string;
}

export const useCreateQuestion = () => {
  const [createQuestionMutation, { loading, error }] = useMutation<
    CreateQuestionResponse,
    CreateQuestionVariables
  >(CREATE_QUESTION);

  const createQuestion = async (title: string, content: string) => {
    try {
      const { data } = await createQuestionMutation({
        variables: {
          title: title.trim(),
          content: content.trim(),
        },
      });

      if (data?.board?.createQuestion) {
        return {
          success: true,
          data: data.board.createQuestion,
        };
      }

      return {
        success: false,
        error: '질문 생성에 실패했습니다.',
      };
    } catch (err) {
      console.error('질문 생성 오류:', err);
      return {
        success: false,
        error: err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.',
      };
    }
  };

  return {
    createQuestion,
    loading,
    error,
  };
};

interface QuestionsData {
  board: {
    getQuestionList: Page<Question>;
  }
}

// 질문 목록을 가져오는 훅
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

// 특정 ID의 질문을 가져오는 훅
export function useQuestionById(id: string) {
  const { data, loading, error } = useQuery<QuestionByIdData>(
    GET_QUESTION_BY_ID,
    {
      variables: { id },
      fetchPolicy: 'cache-first', // 이렇게 변경
      skip: !id,
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

export function useComments(boardId: string, page: number = 0, size: number = 10, enabled: boolean = true) {
  const { data, loading, error, refetch } = useQuery<CommentsData>(
    GET_COMMENTS,
    {
      variables: { boardId, page, size },
      fetchPolicy: 'cache-first',
      skip: !boardId || !enabled,  // enabled 파라미터 추가로 question 로드 후 실행
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

// 댓글 생성 훅
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
      console.error('댓글 작성 실패:', err);
      throw err;
    }
  };

  return {
    createComment,
    loading,
    error
  };
}

interface ReportQuestionData {
  report: {
    reportQuestion: boolean;
  };
}

interface ReportQuestionVariables {
  questionId: string;
  reason: string;
}

export function useReportQuestion() {
  const [reportMutation, { loading, error }] = useMutation<ReportQuestionData, ReportQuestionVariables>(
    REPORT_QUESTION
  );

  const reportQuestion = async (questionId: string, reason: string) => {
    try {
      const result = await reportMutation({
        variables: { questionId, reason }
      });
      return result.data?.report?.reportQuestion;
    } catch (err) {
      console.error('질문 신고 실패:', err);
      throw err;
    }
  };

  return {
    reportQuestion,
    loading,
    error
  };
}
