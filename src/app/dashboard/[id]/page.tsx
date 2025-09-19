'use client'

import React, { useState } from 'react';
import styled from '@emotion/styled';
import Header from '@/components/common/Header';
import HeaderItemsBox from "@/components/Header/HeaderItemBox";
import NavigationBar from '@/components/common/NavigationBar';

const QuestionDetailPage = () => {
  const [comment, setComment] = useState('');
  const [showReportModal, setShowReportModal] = useState(false);

  const questionData = {
    title: "질문 게시판 질문",
    author: "박맹맹",
    createdAt: "2025-08-31 21:31",
    views: 16,
    content: "게시글 내용 게시글 내용 게시글 내용..."
  };

  const comments = [
    {
      id: 1,
      author: "박맹맹",
      content: "댓글댓글댓글댓글댓글댓글 댓글댓글",
      createdAt: "2025-08-31 21:31"
    }
  ];

  return (
    <Container>

      <QuestionContent>
        <QuestionTitle>{questionData.title}</QuestionTitle>
        <QuestionMeta>
          <Author>{questionData.author}</Author>
          <Date>{questionData.createdAt}</Date>
          <Views>👁 {questionData.views}</Views>
        </QuestionMeta>
        <Content>{questionData.content}</Content>
      </QuestionContent>

      <CommentsSection>
        <CommentsHeader>댓글 {comments.length}</CommentsHeader>
        {comments.map(comment => (
          <CommentItem key={comment.id}>
            <CommentAuthor>{comment.author}</CommentAuthor>
            <CommentContent>{comment.content}</CommentContent>
            <CommentMeta>
              <CommentDate>{comment.createdAt}</CommentDate>
              <ReportButton onClick={() => setShowReportModal(true)}>
                신고하기
              </ReportButton>
              <ReplyButton>답글쓰기</ReplyButton>
            </CommentMeta>
          </CommentItem>
        ))}
      </CommentsSection>

      <CommentInput>
        <Input
          placeholder="댓글을 남겨주세요"
          value={comment}
          onChange={(e : any) => setComment(e.target.value)}
        />
        <SendButton>전송</SendButton>
      </CommentInput>

      <NavigationBar />


    </Container>
  );
};

export default QuestionDetailPage;

const Container = styled.div`
  max-width: 600px;
  background: #ffffffff;
  min-height: 100vh;
  width : 100%;
`;


const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

const QuestionContent = styled.div`
  background: white;
  padding: 20px;
  margin-bottom: 8px;
`;

const QuestionTitle = styled.h1`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 12px 0;
  line-height: 1.4;
`;

const QuestionMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  font-size: 14px;
  color: #6c757d;
`;

const Author = styled.span`
  font-weight: 500;
`;

const Date = styled.span``;
const Views = styled.span``;

const Content = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  margin: 0;
`;

const CommentsSection = styled.div`
  background: white;
  padding: 20px;
`;

const CommentsHeader = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 16px 0;
`;

const CommentItem = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid #f1f3f4;
  
  &:last-child {
    border-bottom: none;
  }
`;

const CommentAuthor = styled.div`
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 8px;
`;

const CommentContent = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin: 0 0 8px 0;
`;

const CommentMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  color: #6c757d;
`;

const CommentDate = styled.span``;

const ReportButton = styled.button`
  background: none;
  border: none;
  color: #6c757d;
  font-size: 12px;
  cursor: pointer;
`;

const ReplyButton = styled.button`
  background: none;
  border: none;
  color: #6c757d;
  font-size: 12px;
  cursor: pointer;
`;

const CommentInput = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 375px;
  display: flex;
  padding: 16px;
  background: white;
  border-top: 1px solid #e9ecef;
  gap: 12px;
`;

const Input = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid #e9ecef;
  border-radius: 20px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const SendButton = styled.button`
  padding: 12px 20px;
  background: #ff6b35;
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;
