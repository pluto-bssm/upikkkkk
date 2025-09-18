'use client'

import Header from "@/components/common/Header";
import HeaderItemsBox from "@/components/Header/HeaderItemBox";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import NavigationBar from "@/components/common/NavigationBar";
import VoteMakeButton from "@/components/Vote/VoteMakeButton";
import VoteBlock from "@/components/Vote/VoteBlock";
import VoteSort from "@/components/Modal/VoteSort";
import { useState } from "react";
import { useVotes } from "@/hooks/useVote";

const categories = ['전체', '학교생활', '기숙사', '유머'];

const VotePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortStandard, setSortStandard] = useState("투표 제작일 기준");
  const [activeIdx, setActiveIdx] = useState(0);

  const { votes, loading, error, refetch } = useVotes();

  const handleOptionClick = () => {
    setIsModalOpen(true);
  };

  
  let filteredVotes =
    activeIdx === 0
      ? votes
      : votes.filter((vote) => vote.category === categories[activeIdx]);


  filteredVotes = filteredVotes.filter(vote => !vote.hasVoted);


  filteredVotes = [...filteredVotes].sort((a, b) => {
    switch (sortStandard) {
      case "투표 제작일 기준":
        const dateA = new Date(a.finishedAt).getTime() - 7 * 24 * 60 * 60 * 1000;
        const dateB = new Date(b.finishedAt).getTime() - 7 * 24 * 60 * 60 * 1000;
        return dateB - dateA;
      case "투표 종료일 기준":
        return new Date(a.finishedAt).getTime() - new Date(b.finishedAt).getTime();
      case "투표 참여율 기준":
        const participationA = a.totalResponses / (a.options?.reduce((sum, o) => sum + (o.responseCount || 0), 0) || 1);
        const participationB = b.totalResponses / (b.options?.reduce((sum, o) => sum + (o.responseCount || 0), 0) || 1);
        return participationB - participationA;
      default:
        return 0;
    }
  });

  if (loading) {
    return (
      <VoteLayout>
        <Header
          LeftItem={<img src="/svg/Logo.svg" width={50} height={50} />}
          RightItem={<HeaderItemsBox type={"main"} />}
          types={"default"}
          onOptionClick={handleOptionClick}
          activeIdx={activeIdx}
          setActiveIdx={setActiveIdx}
        />
        <LoadingContainer>
          <LoadingText>투표 목록을 불러오는 중...</LoadingText>
        </LoadingContainer>
        <NavigationBar />
      </VoteLayout>
    );
  }

  if (error) {
    return (
      <VoteLayout>
        <Header
          LeftItem={<img src="/svg/Logo.svg" width={50} height={50} />}
          RightItem={<HeaderItemsBox type={"main"} />}
          types={"default"}
          onOptionClick={handleOptionClick}
          activeIdx={activeIdx}
          setActiveIdx={setActiveIdx}
        />
        <ErrorContainer>
          <ErrorText>투표 목록을 불러오는데 실패했습니다.</ErrorText>
          <RetryButton onClick={() => refetch()}>다시 시도</RetryButton>
        </ErrorContainer>

        <VoteMakeButtonWrapper>
          <VoteMakeButton />
        </VoteMakeButtonWrapper>
        <NavigationBar />
      </VoteLayout>
    );
  }

  return (
    <VoteLayout>
      <Header
        LeftItem={<img src="/svg/Logo.svg" width={50} height={50} />}
        RightItem={<HeaderItemsBox type={"main"} />}
        types={"default"}
        onOptionClick={handleOptionClick}
        activeIdx={activeIdx}
        setActiveIdx={setActiveIdx}
      />

      <VoteListSection>
        {filteredVotes.length === 0 ? (
          <EmptyContainer>
            <EmptyText>해당 카테고리의 투표가 없습니다.</EmptyText>
          </EmptyContainer>
        ) : (
          filteredVotes.map((vote) => (
            <VoteBlock key={vote.id} vote={vote} />
          ))
        )}
      </VoteListSection>

      <VoteMakeButtonWrapper>
        <VoteMakeButton />
      </VoteMakeButtonWrapper>

      <NavigationBar />

      <VoteSort
        sortstandard={sortStandard}
        setsortstandard={setSortStandard}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      />
    </VoteLayout>
  );
};

export default VotePage;

// styled-components
const VoteMakeButtonWrapper = styled.div`
  max-width : 600px;
  width : 100%;
  position : fixed;
  bottom : 70px;
  display : flex;
  justify-content : end;
  padding : 0px 24px;
  z-index : 1000;
`

const VoteListSection = styled.div`
  margin-top: 100px;
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 100px; /* NavigationBar 공간 확보 */
`

const VoteLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  width: 100%;
  min-height: 100vh;
  background-color: ${color.white};
`

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
`

const LoadingText = styled.p`
  font-size: 16px;
  color: ${color.gray600};
`

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 100%;
  gap: 16px;
`

const ErrorText = styled.p`
  font-size: 16px;
  color: #ff0000ff;
  text-align: center;
`

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
`

const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  margin-top : 130px;
`

const EmptyText = styled.p`
  font-size: 16px;
  color: ${color.gray500};
  text-align: center;
`
