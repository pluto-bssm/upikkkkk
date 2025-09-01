'use client'

import Header from "@/components/common/Header";
import HeaderItemsBox from "@/components/Header/HeaderItemBox";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import NavigationBar from "@/components/common/NavigationBar";
import VoteMakeButton from "@/components/Vote/VoteMakeButton";
import VoteBlock from "@/components/Vote/VoteBlock";

const vote = () => {

    return (
    <VotePageLayout>
        <Header LeftItem={<img
        src="/svg/Logo.svg"
        width={50}
        height={50}
         />} RightItem={<HeaderItemsBox type={"main"}/>}
         types = {"default"} />
            <VoteButton>
            <VoteMakeButton />
            </VoteButton>

          <VoteBlock title="투표제목" catogory="기숙사" views="16" state="2025-08-31에 마감되는 투표" />


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

const VotePageLayout = styled.div`
  display :flex;
  flex-direction : column;
  align-items : center;
  max-width : 600px;
  width : 100%;
  min-height: 100vh;
  background-color : ${color.white};
  
`