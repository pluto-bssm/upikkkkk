'use client'

import Header from "@/components/common/Header";
import HeaderItemsBox from "@/components/Header/HeaderItemBox";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import NavigationBar from "@/components/common/NavigationBar";
import VoteMakeButton from "@/components/Vote/VoteMakeButton";
import VoteBlock from "@/components/Vote/VoteBlock";
import { useVotes } from "@/hooks/useVote";

const VotePage = () => {
    const { votes, loading, error } = useVotes();

    return (
        <VotePageLayout>
            <Header 
                LeftItem={
                    <img src="/svg/Logo.svg" width={50} height={50} alt="Logo" />
                } 
                RightItem={<HeaderItemsBox type={"main"}/>}
                types={"default"} 
            />
            <VoteButton>
                <VoteMakeButton />
            </VoteButton>
            
            <VoteContent>
                {loading ? (
                    <LoadingMessage>투표를 불러오는 중...</LoadingMessage>
                ) : error ? (
                    <ErrorMessage>투표를 불러오는데 문제가 발생했습니다</ErrorMessage>
                ) : votes.length === 0 ? (
                    <EmptyMessage>등록된 투표가 없습니다</EmptyMessage>
                ) : (
                    votes.map((vote) => (
                        <VoteBlock key={vote.id} vote={vote} />
                    ))
                )}
            </VoteContent>

            <NavigationBar />
        </VotePageLayout>
    )
}

export default VotePage;

const VotePageLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 600px;
    width: 100%;
    min-height: 100vh;
    background-color: ${color.white};
    margin: 0 auto;
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

const VoteContent = styled.div`
    padding: 100px 0 80px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    gap: 16px;
`

const LoadingMessage = styled.div`
    color: ${color.gray500};
    font-size: 16px;
    margin-top: 40px;
    text-align: center;
`

const ErrorMessage = styled.div`
    color: ${color.accent};
    font-size: 16px;
    margin-top: 40px;
    text-align: center;
`

const EmptyMessage = styled.div`
    color: ${color.gray500};
    font-size: 16px;
    margin-top: 40px;
    text-align: center;
`
