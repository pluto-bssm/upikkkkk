import React from "react";

import styled from '@emotion/styled'




type Props = {
  category: string;
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
};

export default function CategoryChoseBox({ category, isOpen, setIsOpen }: Props) {
  return (
    <Appdiv>
    <CatogoryBox>
        
        <Category>투표 카테고리 선택</Category>

        <BoxDiv onClick={() => setIsOpen && setIsOpen(!isOpen)}>
            <CategoryP>{category}</CategoryP>
            <img src="svg/UnderBar.svg" alt="underbar" />
        </BoxDiv>

        <div>
            {category === "기숙사" && <DesP>학교 기숙사에 관한 내용이 궁금할 때 이 카테고리를 선택해주세요</DesP>}
            {category === "학교생활" && <DesP>학교 생활에 내용이 궁금할 때 이 카테고리를 선택해주세요</DesP>}
            {category === "유머" && <DesP>유머유머유머유머유머유머유머유머유머유머유머유머유머유머유머</DesP>}
        </div>
        
        
    </CatogoryBox>
    </Appdiv>
  );
}

const Appdiv = styled.div`
    width : 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const CatogoryBox= styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap : 16px;
    width : 90%;
    padding : 6%;
    background-color : #F0F0F0;
    border-radius : 16px;
`

const BoxDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    border : 1px solid #E6E6E6;
    border-radius : 8px;
    background-color : #FFFFFF;
    width : 70%;
    padding : 8px 16px;
`

const Category = styled.p`
    color : #777777;
    font-size : 16px;
    font-weight : 600;
`

const DesP = styled.p`
    font-size : 12px;
    color : #B3B3B3;
`

const CategoryP = styled.p`
    font-weight : 500;

`