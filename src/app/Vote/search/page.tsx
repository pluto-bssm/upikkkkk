'use client'

import Header from "@/components/common/Header";
import HeaderInputs from "@/packages/ui/src/Inputs/Headerinputs"
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import VoteMakeButton from "@/components/Vote/VoteMakeButton";
import NavigationBar from "@/components/common/NavigationBar";

const Search = () =>{
    return(
        <SearchLayout>
            <Header LeftItem={<img
            src="/svg/Back2.svg"
            width={20}
            height={50}
                />}
            CenterItem={<HeaderInputs placeholders="원하는 투표 검색하기"/>}
            RightItem={<></>}
            types=""
            />

            <VoteButton>
                <VoteMakeButton />
            </VoteButton>

            <NavigationBar />
            
        </SearchLayout>
    )
}

const SearchLayout = styled.div`
    display : flex;
    max-width : 600px;
    width : 100%;
    background-color : ${color.white};
    height : 100vh;
`


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



export default Search