'use client'

import Header from "@/components/common/Header";
import HeaderInputs from "@/packages/ui/src/Inputs/Headerinputs"
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";
import VoteMakeButton from "@/components/Vote/VoteMakeButton";
import NavigationBar from "@/components/common/NavigationBar";
import React, { useState } from "react";
import VoteBlock from "@/components/Vote/VoteBlock";
import { useVotes } from "@/hooks/useVote"; 
import { useEffect } from "react";
import { Vote } from "@/types/api";
import { useRouter } from "next/navigation";

const Search = () => {
  const [searchitem, setSearchitem] = useState("");
  const [filteredVotes, setFilteredVotes] = useState<Vote[]>([]); 
  const { votes, loading, error, refetch } = useVotes();

  useEffect(() => {
  if (searchitem.trim() === "") {
    setFilteredVotes([]);
  } else {
    const currentDate = new Date();
    const result = votes.filter(vote => {
      const matchesSearch = vote.title.includes(searchitem);
      const finishedDate = new Date(vote.finishedAt);
      const isNotExpired = finishedDate > currentDate; // 마감일이 현재보다 미래인 경우만
      
      return matchesSearch && isNotExpired;
    });
    setFilteredVotes(result);
  }
}, [searchitem, votes]);


  const handleSearchChange = (value: string) => {
    setSearchitem(value);
  };

  const showResults = searchitem.trim() !== "";
  const router = useRouter();

  return (
    <SearchLayout>
      <Header
        LeftItem={<img src="/svg/Back2.svg" width={20} height={50} onClick={() => router.back()} />}
        CenterItem={<HeaderInputs placeholders="원하는 투표 검색하기" value={searchitem} onChange={handleSearchChange} />}
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
        ) : filteredVotes.length > 0 ? (
          <SearchResults>
            <ResultSection>
              <ResultText>결과 <ResultNumberText>{filteredVotes.length}</ResultNumberText></ResultText>
            </ResultSection>
            {filteredVotes.map(vote => (
              <VoteBlock
                    key={vote.id}
                    vote={vote}
                        />
            ))}
          </SearchResults>
        ) : (
          <p>검색 결과가 없어요</p>
        )}
      </SearchSection>

      <VoteButton>
        <VoteMakeButton />
      </VoteButton>

      <NavigationBar />
    </SearchLayout>
  )
}

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

const VoteButton = styled.div`
    max-width: 600px;
    width: 100%;
    position: fixed;
    bottom: 70px;
    display: flex;
    justify-content: end;
    padding: 0px 24px;
    z-index: 1000;
`

export default Search