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
import { useRouter } from "next/navigation";

const voteData = [
    {
        id: 1,
        title: "투표제목",
        category: "학교생활",
        views: "16",
        state: "2025-08-31에 마감되는 투표"
    },
    {
        id: 2,
        title: "투표제목",
        category: "기숙사",
        views: "16",
        state: "2025-08-31에 마감되는 투표"
    },
    {
        id: 3,
        title: "투표제목",
        category: "유머",
        views: "20",
        state: "2025-08-31에 마감되는 투표"
    }
];

const Search = () => {
    const [searchitem, setsearchitem] = useState("");

    const handleSearchChange = (value: string) => {
        setsearchitem(value);
    }

    const filteredVotes = voteData.filter(vote =>
        vote.title.includes(searchitem)
    );

    const showResults = searchitem.trim() !== "";

    const router = useRouter();
    return (
        <SearchLayout>
            <Header
                LeftItem={<img src="/svg/Back2.svg" width={20} height={50} onClick={() => { router.back() }} />}
                CenterItem={<HeaderInputs placeholders="원하는 투표 검색하기" value={searchitem} onChange={handleSearchChange} />}
                RightItem={<></>}
                types=""
            />

            <SearchSection>
                {!showResults ? (
                    <p>검색어를 입력해주세요</p>
                ) : filteredVotes.length > 0 ? (
                    <SearchResults>
                        <ResultSection>
                            <ResultText>결과 <ResultNumberText>{filteredVotes.length}</ResultNumberText></ResultText>
                        </ResultSection>
                        {filteredVotes.map(vote => (
                            <VoteBlock
                                key={vote.id}
                                id={vote.id}
                                title={vote.title}
                                catogory={vote.category}
                                views={vote.views}
                                state={vote.state}
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
    width: 100%;
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