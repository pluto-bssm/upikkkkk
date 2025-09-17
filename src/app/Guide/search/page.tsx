'use client'

import Header from "@/components/common/Header";
import HeaderInputs from "@/packages/ui/src/Inputs/Headerinputs"
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";
import NavigationBar from "@/components/common/NavigationBar";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { mockMainGuideData } from "@/mock/GuideComponent";

// Guide 검색은 메인 가이드 mock 데이터를 사용합니다.
const guideData = mockMainGuideData;

const Search = () => {
    const [searchitem, setsearchitem] = useState("");

    const handleSearchChange = (value: string) => {
        setsearchitem(value);
    }

    const filteredGuides = guideData.filter(item =>
        item.title.includes(searchitem)
    );

    const showResults = searchitem.trim() !== "";

    const router = useRouter();
    return (
        <SearchLayout>
            <Header
                LeftItem={<img src="/svg/Back2.svg" width={20} height={50} onClick={() => { router.back() }} />}
                CenterItem={<HeaderInputs placeholders="원하는 가이드 검색하기" value={searchitem} onChange={handleSearchChange} />}
                RightItem={<></>}
                types=""
            />

            <SearchSection>
                {!showResults ? (
                    <p>검색어를 입력해주세요</p>
                ) : filteredGuides.length > 0 ? (
                    <SearchResults>
                        <ResultSection>
                            <ResultText>결과 <ResultNumberText>{filteredGuides.length}</ResultNumberText></ResultText>
                        </ResultSection>
                        {filteredGuides.map(item => (
                            <GuideCard key={item.id} onClick={() => router.push('/MoreGuide')}>
                                <GuideEmoji src={item.thumnail} alt="thumbnail" />
                                <GuideTextWrap>
                                    <GuideTitle>{item.title}</GuideTitle>
                                    <GuideMeta>
                                        <GuideTag>{item.category}</GuideTag>
                                        <GuideCountIcon />
                                        <GuideCount>{item.markcount}</GuideCount>
                                    </GuideMeta>
                                </GuideTextWrap>
                            </GuideCard>
                        ))}
                    </SearchResults>
                ) : (
                    <p>검색 결과가 없어요</p>
                )}
            </SearchSection>

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

// Guide 결과 카드 스타일
const GuideCard = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
    height: 67px;
    width: 100%;
    border: 1px solid ${color.gray50};
    border-radius: 8px;
    background: ${color.white};
    padding: 0 16px;
    box-shadow: -4px -4px 10px 0 rgba(0,0,0,0.03), 4px  4px 10px 0 rgba(0,0,0,0.03);
    cursor: pointer;
`

const GuideEmoji = styled.img`
    width: 28px;
    height: 28px;
`

const GuideTextWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
`

const GuideTitle = styled.div`
    color: ${color.black};
    font-family:  ${font.P13};
`

const GuideMeta = styled.div`
    display: flex;
    align-items: center;
`

const GuideTag = styled.div`
    color: ${color.gray600};
    font-family: ${font.P6};
`

const GuideCountIcon = styled.span`
    width: 10px;
    height: 10px;
    background-color: ${color.gray500};
    -webkit-mask: url('/svg/Bookmark.svg') no-repeat center / contain;
    mask: url('/svg/Bookmark.svg') no-repeat center / contain;
    display: inline-block;
    margin-left:8px;
`

const GuideCount = styled.div`
    color: ${color.gray600};
    font-family:${font.p2};
    margin-left:2px;
`

export default Search