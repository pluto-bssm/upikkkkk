"use client";

import { useMutation } from '@apollo/client/react';
import { CREATE_INQUIRY } from '@/graphql/queries';
import { CreateBoardInput, InquiryInput } from '@/types/api';

interface CreateInquiryData {
  board: {
    createQuestion: {
      id: string;
      title: string;
      content: string;
      createdAt: string;
    }
  }
}

/**
 * 문의하기 기능을 위한 훅
 * 실제 GraphQL API에는 inquiry 전용 뮤테이션이 없으므로 createQuestion을 사용합니다
 */
export function useInquiry() {
  const [createInquiryMutation, { loading, error }] = useMutation<CreateInquiryData, { input: CreateBoardInput }>(
    CREATE_INQUIRY
  );

  // InquiryInput을 CreateBoardInput으로 변환하여 API 호출
  const submitInquiry = async (inquiry: InquiryInput) => {
    // 이메일 정보를 내용에 포함시킴
    const content = `${inquiry.content}\n\n연락처: ${inquiry.email}\n문의유형: ${inquiry.type}`;
    
    const input: CreateBoardInput = {
      title: inquiry.title,
      content: content
    };

    try {
      const result = await createInquiryMutation({
        variables: { input }
      });
      return result.data?.board?.createQuestion;
    } catch (err) {
      console.error('문의 제출 실패:', err);
      throw err;
    }
  };

  return {
    submitInquiry,
    loading,
    error
  };
}
