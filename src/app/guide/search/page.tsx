'use client'

import Header from "@/components/common/Header";
import HeaderInputs from "@/packages/ui/src/Inputs/Headerinputs"
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";
import GuideComponent from "@/components/Main/GuideComponent";
import NavigationBar from "@/components/common/NavigationBar";
import React, { useState, useEffect } from "react";
import { useAllGuides } from "@/hooks/useGuides";
import { Guide } from "@/types/api";
import { useRouter } from "next/navigation";

const Search = () => {
  const [searchitem, setSearchitem] = useState("");
  const [filteredGuides, setFilteredGuides] = useState<Guide[]>([]); 
  const { guides, loading, error, refetch } = useAllGuides(0, 100); 
  const router = useRouter();

  useEffect(() => {
    if (searchitem.trim() === "") {
      setFilteredGuides([]);
    } else {
      const result = guides.filter(guide =>
        guide.title.toLowerCase().includes(searchitem.toLowerCase()) ||
        (guide.category && guide.category.toLowerCase().includes(searchitem.toLowerCase()))
      );
      setFilteredGuides(result);
    }
  }, [searchitem, guides]);

  const handleSearchChange = (value: string) => {
    setSearchitem(value);
  };

  const showResults = searchitem.trim() !== "";

  return (
    <SearchLayout>
      <Header
        LeftItem={<img src="/svg/Back2.svg" width={20} height={50} onClick={() => router.back()} />}
        CenterItem={<HeaderInputs placeholders="원하는 가이드 검색하기" value={searchitem} onChange={handleSearchChange} />}
        RightItem={<></>}
        types=""
      />

      <SearchSection>
        {loading ? (
          <LoadingText>로딩 중...</LoadingText>
        ) : error ? (
          <ErrorText>검색 데이터를 불러오는 중 오류가 발생했어요</ErrorText>
        ) : !showResults ? (
          <EmptyText>검색어를 입력해주세요</EmptyText>
        ) : filteredGuides.length > 0 ? (
          <SearchResults>
            <ResultSection>
              <ResultText>결과 <ResultNumberText>{filteredGuides.length}</ResultNumberText></ResultText>
            </ResultSection>
            <GuideComponent 
              gap="16px" 
              guides={filteredGuides}
              category="전체"
              sortstandard="가이드 제작일 기준"
            />
          </SearchResults>
        ) : (
          <NoResultText>검색 결과가 없어요</NoResultText>
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
    margin-bottom: 20px;
`

const SearchSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content : center;
    width: 100%;
    margin-top: 10vh;
    padding-bottom: 80px;
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
    min-height: 100vh;
`

const LoadingText = styled.div`
  color: ${color.gray500};
  font-family: ${font.P1};
  text-align: center;
  padding: 20px;
`;

const ErrorText = styled.div`
  color: ${color.accent};
  font-family: ${font.P1};
  text-align: center;
  padding: 20px;
`;

const EmptyText = styled.div`
  color: ${color.gray400};
  font-family: ${font.P1};
  text-align: center;
  padding: 20px;
`;

const NoResultText = styled.div`
  color: ${color.gray400};
  font-family: ${font.P1};
  text-align: center;
  padding: 20px;
`;

export default Search
