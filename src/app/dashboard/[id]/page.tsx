'use client'

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useParams, useRouter } from 'next/navigation';
import Header from '@/components/common/Header';
import HeaderItemsBox from "@/components/Header/HeaderItemBox";
import NavigationBar from '@/components/common/NavigationBar';
import { useQuestionById, useComments, useCreateComment } from '@/hooks/useQuestions';
import color from '@/packages/design-system/src/color';


const QuestionDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const questionId = params?.id as string;
  const [comment, setComment] = useState('');

  const { question, loading: questionLoading, error: questionError } = useQuestionById(questionId);
  const { comments, loading: commentsLoading, refetch: refetchComments } = useComments(questionId);
  const { createComment, loading: commentCreating } = useCreateComment();
  
  const handleSubmitComment = async () => {
    if (!comment.trim()) {
      alert('댓글을 입력해주세요.');
      return;
    }

    try {
      await createComment({
        boardId: questionId,
        content: comment.trim()
      });
      setComment('');
    } catch (error) {
      console.error('댓글 작성 오류:', error);
      alert('댓글 작성에 실패했습니다.');
    }
  };

  // 댓글 신고 페이지로 이동하는 함수
  const handleCommentReport = (commentId: string) => {
    router.push(`/dashboard/reportcomment/${commentId}`);
  };

  const formatDate = (dateString: string): string => {
    try {
      const date = new window.Date(dateString);
      
      if (isNaN(date.getTime())) {
        return dateString; 
      }
      
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      
      return `${year}-${month}-${day} ${hours}:${minutes}`;
    } catch (error) {
      console.error('날짜 포맷팅 오류:', error);
      return dateString; 
    }
  };

  if (questionLoading) return <LoadingContainer>질문을 불러오는 중...</LoadingContainer>;
  if (questionError) return <ErrorContainer>질문 불러오기 실패: {questionError.message}</ErrorContainer>;
  if (!question) return <ErrorContainer>질문을 찾을 수 없습니다.</ErrorContainer>;

  return (
    <QuestionDetailLayout>
      <Header
        LeftItem={
          <BackButton
            src="/svg/Back.svg"
            width={20}
            height={50}
            onClick={() => router.back()}
          />
        }
        RightItem={<HeaderItemsBox type={"reportQuestion"} />}
        types="Nones"
      />

      <QuestionDetailContainer>
        <ContentWrapper>
          {/* Question Section */}
          <QuestionSection>
            <QuestionTitle>{question.title}</QuestionTitle>
            <QuestionMetaRow>
              <QuestionMeta>
                <Author>{question.userName}</Author>
                <Date>{formatDate(question.createdAt)}</Date>
              </QuestionMeta>
            </QuestionMetaRow>
          </QuestionSection>

          {/* Divider */}
          <Divider />

          {/* Content Section */}
          <ContentSection>
            <Content>{question.content}</Content>
          </ContentSection>

          {/* Divider */}
          <Divider />

          {/* Comments Section */}
          <CommentsSection>
            <CommentsHeader>댓글 {comments.length}</CommentsHeader>
            {commentsLoading ? (
              <LoadingText>댓글을 불러오는 중...</LoadingText>
            ) : (
              <CommentsWrapper>
                {comments.map(commentItem => (
                  <CommentItem key={commentItem.id}>
                    <CommentAuthor>{commentItem.userName}</CommentAuthor>
                    <CommentContent>{commentItem.content}</CommentContent>
                    <CommentFooter>
                      <CommentDate>{formatDate(commentItem.createdAt)}</CommentDate>
                      <CommentActions>
                        <ActionButton 
                          onClick={() => handleCommentReport(commentItem.id)}
                          title={`댓글 ID: ${commentItem.id} 신고하기`}
                        >
                          신고하기
                        </ActionButton>
                      </CommentActions>
                    </CommentFooter>
                  </CommentItem>
                ))}
                {comments.length === 0 && !commentsLoading && (
                  <NoCommentsMessage>아직 댓글이 없습니다.</NoCommentsMessage>
                )}
              </CommentsWrapper>
            )}
          </CommentsSection>
        </ContentWrapper>
      </QuestionDetailContainer>

      {/* Comment Input */}
      <CommentInputWrapper>
        <CommentInputContainer>
          <CommentAuthor>댓글달기</CommentAuthor>
          <CommentInputBox>
            <Input
              placeholder="댓글을 남겨주세요"
              value={comment}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setComment(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSubmitComment();
                }
              }}
            />
            <SendButton 
              onClick={handleSubmitComment}
              disabled={!comment.trim() || commentCreating}
            >
              {commentCreating ? "전송 중..." : "전송"}
            </SendButton>
          </CommentInputBox>
        </CommentInputContainer>
      </CommentInputWrapper>

      <NavigationBar />
    </QuestionDetailLayout>
  );
};

export default QuestionDetailPage;

// Styled Components
const QuestionDetailLayout = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  min-height: 100vh;
`;

const QuestionDetailContainer = styled.div`
  width: 100%;
  padding: 80px 0 120px 0;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 16px;
  color: #6c757d;
`;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 16px;
  color: #dc3545;
  text-align: center;
  padding: 20px;
`;

const LoadingText = styled.div`
  text-align: center;
  color: #6c757d;
  padding: 20px;
`;

const BackButton = styled.img`
  cursor: pointer;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 0.7;
  }
`;

// Question Section
const QuestionSection = styled.div`
  padding: 20px 24px;
`;

const QuestionTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #1F2937;
  margin: 0 0 12px 0;
  line-height: 1.4;
`;

const QuestionMetaRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const QuestionMeta = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
`;

const Author = styled.span`
  font-weight: 500;
  font-size: 12px;
  color: #9CA3AF;
`;

const Date = styled.span`
  font-size: 12px;
  color: #9CA3AF;
`;

// Divider
const Divider = styled.div`
  height: 1px;
  background-color: ${color.gray200};
  width: 100%;
`;

// Content Section
const ContentSection = styled.div`
  padding: 20px 24px;
`;

const Content = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: #374151;
  margin: 0;
  white-space: pre-wrap;
`;

// Comments Section
const CommentsSection = styled.div`
  padding: 20px 24px;
`;

const CommentsHeader = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #1F2937;
  margin: 0 0 16px 0;
`;

const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentItem = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid #f1f3f4;
  max-width: 600px; 
  
  &:last-child {
    border-bottom: none;
  }
`;

const CommentAuthor = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #374151;
  margin-bottom: 8px;
`;

const CommentContent = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: #374151;
  margin: 0 0 8px 0;
`;

const CommentFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CommentDate = styled.span`
  font-size: 12px;
  color: #9CA3AF;
`;

const CommentActions = styled.div`
  display: flex;
  gap: 12px;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: #9CA3AF;
  font-size: 12px;
  cursor: pointer;
  transition: color 0.2s ease;
  
  &:hover {
    color: #FF8A00;
  }
  
  &:active {
    color: #e67700;
  }
`;

const NoCommentsMessage = styled.div`
  text-align: center;
  color: #9CA3AF;
  padding: 40px 20px;
  font-size: 14px;
`;

// Comment Input
const CommentInputWrapper = styled.div`
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 600px;
  background: white;
  border-top: 1px solid #e5e7eb;
  padding: 16px 24px;
  z-index: 10;
`;

const CommentInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CommentInputBox = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  font-size: 14px;
  background: white;
  color: #374151;
  
  &:focus {
    outline: none;
    border-color: #FF8A00;
  }
  
  &::placeholder {
    color: #9CA3AF;
  }
`;

const SendButton = styled.button<{ disabled: boolean }>`
  padding: 8px 16px;
  background-color: ${(props) => props.disabled ? "#D1D5DB" : "#FF8A00"};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: ${(props) => props.disabled ? "not-allowed" : "pointer"};
  white-space: nowrap;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => props.disabled ? "#D1D5DB" : "#e67700"};
  }
`;
