'use client'

import Header from "@/components/common/Header";
import HeaderInputs from "@/packages/ui/src/Inputs/Headerinputs"
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";
import NavigationBar from "@/components/common/NavigationBar";
import React, { useState, useMemo } from "react";
import { useQuestions } from "@/hooks/useQuestions"; 
import { Question } from "@/types/api";
import { useRouter } from "next/navigation";
import DashMake from "@/components/Dashboard/DashboardMake";

const Search = () => {
  const [searchitem, setSearchitem] = useState("");
  const { questions, loading, error, refetch } = useQuestions();

  // useEffect 대신 useMemo를 사용하여 필터링
  const filteredQuestions = useMemo(() => {
    if (searchitem.trim() === "") {
      return [];
    }
    return questions.filter(question => 
      question.title.includes(searchitem)
    );
  }, [searchitem, questions]);

  const handleSearchChange = (value: string) => {
    setSearchitem(value);
  };

  const showResults = searchitem.trim() !== "";
  const router = useRouter();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  return (
    <SearchLayout>
      <Header
        LeftItem={<img src="/svg/Back2.svg" width={20} height={50} onClick={() => router.back()} />}
        CenterItem={<HeaderInputs placeholders="원하는 질문 검색하기" value={searchitem} onChange={handleSearchChange} />}
        RightItem={<></>}
        types=""
      />

      <SearchSection>
        {loading ? (
          <p>로딩 중...</p>
        ) : error ? (
          <p>검색 데이터를 불러오는 중 오류가 발생했어요</p>
        ) : !showResults ? (
          <p>검색어를 입력해주세요</p>
        ) : filteredQuestions.length > 0 ? (
          <SearchResults>
            <ResultSection>
              <ResultText>결과 <ResultNumberText>{filteredQuestions.length}</ResultNumberText></ResultText>
            </ResultSection>
            {filteredQuestions.map((question: Question) => {
              const GoDetails = () => {
                router.push(`/questions/${question.id}`);
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
            })}
          </SearchResults>
        ) : (
          <p>검색 결과가 없어요</p>
        )}
      </SearchSection>

      <QuestionButton>
        <DashMake />
      </QuestionButton>

      <NavigationBar />
    </SearchLayout>
  )
}

// 나머지 스타일 컴포넌트들은 동일...


// 스타일 컴포넌트들
const ResultText = styled.p`
    ${font.H1}
`
const ResultNumberText = styled.span`
    ${font.H1};
    color : ${color.primary};
`

const ResultSection = styled.div`
    max-width: 600px;
    width : 90%;
`

const SearchSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content : center;
    width: 100%;
    margin-top: 10vh;
`

const SearchResults = styled.div`
    width: 90%;
    display: flex;
    justify-content : center;
    align-items : center;
    flex-direction: column;
    gap: 16px;
`

const SearchLayout = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 600px;
    width: 100%;
    background-color: ${color.white};
    height: 100vh;
`

const QuestionButton = styled.div`
    max-width: 600px;
    width: 100%;
    position: fixed;
    bottom: 70px;
    display: flex;
    justify-content: end;
    padding: 0px 24px;
    z-index: 1000;
`

// 질문 아이템 스타일들 (기존 QuestionPage에서 가져옴)
const QuestionItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid ${color.gray200};
  background-color: ${color.white};
  position: relative;
  width: 100%;
  cursor: pointer;
  
  &:hover {
    background-color: ${color.gray50};
  }
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

export default Search
