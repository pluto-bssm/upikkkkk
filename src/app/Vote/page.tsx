'use client'

import Header from "@/components/common/Header";
import HeaderItemsBox from "@/components/Header/HeaderItemBox";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";

import NavigationBar from "@/components/common/NavigationBar";
import { useState } from "react";
import { HeaderType } from "@/components/Header/HeaderItemBox";
import VoteMakeButton from "@/components/Vote/VoteMakeButton"

const vote = () => {
    const [types,settype] = useState<HeaderType>("main") ;

    return (
    <VotePageLayout>
        <Header LeftItem={<img
        src="/svg/Logo.svg"
        width={50}
        height={50}
         />} RightItem={<HeaderItemsBox type={types}/>}
         types = {types} />
        <VoteButton>
        <VoteMakeButton />
        </VoteButton>
        <NavigationBar />
    </VotePageLayout>
    )

}

export default vote;

const VoteButton = styled.div`
    max-width : 600px;
    width : 100%;
    position : fixed;
    bottom : 100px;
    display : flex;
    justify-content : end;
    padding : 0px 24px;

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