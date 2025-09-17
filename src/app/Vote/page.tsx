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
import { Vote } from "@/types/api";

const voteData: Vote[] = [
    {
        id: "1",
        title: "투표제목",
        category: "학교생활",
        totalResponses: 16,
        finishedAt: "2025-08-31T23:59:59Z",
        status: "ACTIVE"
    },
    {
        id: "2",
        title: "투표제목",
        category: "기숙사",
        totalResponses: 16,
        finishedAt: "2025-08-31T23:59:59Z",
        status: "ACTIVE"
    },
    {
        id: "3",
        title: "투표제목",
        category: "유머",
        totalResponses: 20,
        finishedAt: "2025-08-31T23:59:59Z",
        status: "ACTIVE"
    }
];

const VotePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [sortStandard, setSortStandard] = useState("투표 제작일 기준");

    const handleOptionClick = () => {
        setIsModalOpen(true);
    };

    return (
        <VoteLayout>
            <Header
                LeftItem={<img src="/svg/Logo.svg" width={50} height={50} />}
                RightItem={<HeaderItemsBox type={"main"} />}
                types={"default"}
                onOptionClick={handleOptionClick}
            />

            <VoteMakeButtonWrapper>
                <VoteMakeButton />
            </VoteMakeButtonWrapper>

            <VoteListSection>
                {voteData.map((vote) => (
                    <VoteBlock
                        key={vote.id}
                        vote={vote}
                    />
                ))}
            </VoteListSection>

            <NavigationBar />

            <VoteSort
                sortstandard={sortStandard}
                setsortstandard={setSortStandard}
                isOpen={isModalOpen}
                setIsOpen={setIsModalOpen}
            />
        </VoteLayout>
    )
}

export default VotePage;

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
    margin-top : 100px;
    width : 90%;
    display : flex;
    flex-direction : column;
    gap : 16px;
`

const VoteLayout = styled.div`
    display :flex;
    flex-direction : column;
    align-items : center;
    max-width : 600px;
    width : 100%;
    min-height: 100vh;
    background-color : ${color.white};
`