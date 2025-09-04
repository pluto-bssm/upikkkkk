'use client'

import Header from "@/components/common/Header";
import HeaderItemsBox from "@/components/Header/HeaderItemBox";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import NavigationBar from "@/components/common/NavigationBar";
import VoteMakeButton from "@/components/Vote/VoteMakeButton";
import VoteBlock from "@/components/Vote/VoteBlock";
import { useState } from "react";

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

const vote = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [sortStandard, setSortStandard] = useState("투표 제작일 기준");

    const handleOptionClick = () => {
        setIsModalOpen(true);
    };


    return (
        <VotePageLayout>
            <Header 
                LeftItem={<img src="/svg/Logo.svg" width={50} height={50}/>} 
                RightItem={<HeaderItemsBox type={"main"}/>}
                types={"default"} 
                
            />
            <VoteButton>
                <VoteMakeButton />
            </VoteButton>
            <Contents>
                {voteData.map((vote) => (
                    <VoteBlock 
                        key={vote.id}
                        title={vote.title} 
                        catogory={vote.category} 
                        views={vote.views} 
                        state={vote.state} 
                    />
                ))}
            </Contents>

            <NavigationBar />

        </VotePageLayout>
    )
}

export default vote;

const VoteButton = styled.div`
    max-width : 600px;
    width : 100%;
    position : fixed;
    bottom : 70px;
    display : flex;
    justify-content : end;
    padding : 0px 24px;
    z-index : 1000;
`

const Contents = styled.div`
    margin-top : 100px;
    width : 100%;
    display : flex;
    flex-direction : column;
    gap : 16px;
`

const VotePageLayout = styled.div`
    display :flex;
    flex-direction : column;
    align-items : center;
    max-width : 600px;
    width : 100%;
    min-height: 100vh;
    background-color : ${color.white};
`