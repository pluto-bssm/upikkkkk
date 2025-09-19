'use client'

import Header from "@/components/common/Header";
import HeaderItemsBox from "@/components/Header/HeaderItemBox";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import NavigationBar from "@/components/common/NavigationBar";

import { useState } from "react";
import { useQuestions } from "@/hooks/useQuestions";
import { Question } from "@/types/api";
import font from "@/packages/design-system/src/font";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import DashMake from "@/components/Dashboard/DashboardMake";

const QuestionPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const router = useRouter();
  const path = usePathname();
  

  const { questions, loading, error, refetch } = useQuestions();
    console.log(questions)
  const handleOptionClick = () => {
    setIsModalOpen(true);
  };
  let filteredQuestions = questions;



if (activeIdx === 1) {
  filteredQuestions = [...filteredQuestions].sort((a: Question, b: Question) => b.commentCount - a.commentCount);
}



  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  if (loading) {
    return (
      <QuestionLayout>
        <Header
          LeftItem={<img src="/svg/Logo.svg" width={50} height={50} />}
          RightItem={<HeaderItemsBox type={"main"} />}
          types={"Question"}
          onOptionClick={handleOptionClick}
          activeIdx={activeIdx}
          setActiveIdx={setActiveIdx}
        />
        <LoadingContainer>
          <LoadingText>질문 목록을 불러오는 중...</LoadingText>
        </LoadingContainer>
        <NavigationBar />
      </QuestionLayout>
    );
  }

  if (error) {
    return (
      <QuestionLayout>
        <Header
          LeftItem={<img src="/svg/Logo.svg" width={50} height={50} />}
          RightItem={<HeaderItemsBox type={"main"} />}
          types={"Question"}
          onOptionClick={handleOptionClick}
          activeIdx={activeIdx}
          setActiveIdx={setActiveIdx}
        />
        <ErrorContainer>
          <ErrorText>질문 목록을 불러오는데 실패했습니다.</ErrorText>
          <RetryButton onClick={() => refetch()}>다시 시도</RetryButton>
        </ErrorContainer>
        <NavigationBar />
      </QuestionLayout>
    );
  }

  return (
    <QuestionLayout>
      <Header
        LeftItem={<img src="/svg/Logo.svg" width={50} height={50} />}
        RightItem={<HeaderItemsBox type={"main"} />}
        types={"Question"}
        onOptionClick={handleOptionClick}
        activeIdx={activeIdx}
        setActiveIdx={setActiveIdx}
      />

      <QuestionListSection>
        {filteredQuestions.length === 0 ? (
          <EmptyContainer>
            <EmptyText>
              {activeIdx === 1 ? '인기 질문이 없습니다.' : '질문이 없습니다.'}
            </EmptyText>
          </EmptyContainer>
        ) : (

          filteredQuestions.map((question: Question) => {
            const GoDetails = () => {
              router.push(`${path}/${question.id}`);
            };

            return (
              <QuestionItem key={question.id} onClick={GoDetails}>
                <QuestionContent>
                  <QuestionTitle>{question.title}</QuestionTitle>
                  <QuestionMeta>
                    <UserInfo>
                      <AuthorInfo>{question.userName}</AuthorInfo>
                    </UserInfo>
                    <MetaInfo>
                      <span>{formatDate(question.createdAt)}</span>
                    </MetaInfo>
                  </QuestionMeta>
                </QuestionContent>
                <CommentCount>
                  <Comment>{question.commentCount}</Comment>
                  <CommentLabel>댓글</CommentLabel>
                </CommentCount>
              </QuestionItem>
            );
          })

        )}
      
      </QuestionListSection>

      <NavigationBar />
      <QuestionButtonWrapper>
         <DashMake />
      </QuestionButtonWrapper>

    </QuestionLayout>
  );
};

export default QuestionPage;

const QuestionButtonWrapper = styled.div`
  max-width : 600px;
  width : 100%;
  position : fixed;
  bottom : 70px;
  display : flex;
  justify-content : end;
  padding : 0px 24px;
  z-index : 1000;
`


const Boookmarkimg = styled.img`
  filter: invert(84%) sepia(1%) saturate(170%) hue-rotate(317deg) brightness(87%) contrast(85%);
`
const QuestionListSection = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
`;

const QuestionLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  width: 100%;
  min-height: 100vh;
  background-color: ${color.white};
`;

const QuestionItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid ${color.gray200};
  background-color: ${color.white};
  position: relative;
`;

const QuestionContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 12px;
`;

const QuestionTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${color.black};
  margin-bottom: 8px;
  line-height: 1.4;
  
  /* 텍스트 말줄임 처리 */
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const QuestionMeta = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 8px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const ProfileImage = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorInfo = styled.div`
  font-size: 12px;
  color: ${color.gray600};
  font-weight: 500;
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: ${color.gray600};
`;

const ViewIcon = styled.span`
  font-size: 10px;
`;
const CommentCount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  font-size: 16px;
  font-weight: 600;
  padding : 8px 10px;
  border : none;
  border-radius : 8px;
  color: ${color.gray600};
  background-color : ${color.gray50};
`;

const CommentLabel = styled.span`
  font-size: 10px;
  color: ${color.gray600};
  margin-top: 2px;
`;

const Comment = styled.p`
  ${font.H1};
`

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
`;

const LoadingText = styled.p`
  font-size: 16px;
  color: ${color.gray600};
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 100%;
  gap: 16px;
`;

const ErrorText = styled.p`
  font-size: 16px;
  color: #ff0000ff;
  text-align: center;
`;

const RetryButton = styled.button`
  padding: 8px 16px;
  background-color: ${color.primary};
  color: ${color.white};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  
  &:hover {
    opacity: 0.8;
  }
`;

const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  margin-top: 130px;
`;

const EmptyText = styled.p`
  font-size: 16px;
  color: ${color.gray500};
  text-align: center;
`;
