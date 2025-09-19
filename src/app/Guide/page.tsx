'use client'

import Header from "@/components/common/Header";
import HeaderItemsBox from "@/components/Header/HeaderItemBox";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import NavigationBar from "@/components/common/NavigationBar";
import { useRouter } from "next/navigation";
import { useGuides } from "@/hooks/useGuides";
import { useState } from "react";
import GuideItem from "@/components/Guide/GuideItem";

const Guide = () => {
    const router = useRouter();
    const [category, setCategory] = useState<string | undefined>(undefined);
    const { guides, loading, error } = useGuides(category);

    const categories = ["전체", "기숙사", "학식", "수업", "동아리", "교통", "기타"];

    return (
    <GuidePageLayout>
        <Header 
            LeftItem={
                <img
                    src="/svg/Back.svg"
                    width={24}
                    height={24}
                    alt="Back"
                    onClick={() => router.back()}
                    style={{ cursor: 'pointer' }}
                />
            } 
            CenterItem={<HeaderItemsBox type={'searchguide'}/>}
            types="searchguide" 
        />
        
        <CategoryContainer>
            {categories.map((cat) => (
                <CategoryButton 
                    key={cat} 
                    selected={cat === "전체" ? category === undefined : cat === category}
                    onClick={() => setCategory(cat === "전체" ? undefined : cat)}
                >
                    {cat}
                </CategoryButton>
            ))}
        </CategoryContainer>

        <GuideContent>
            {loading ? (
                <LoadingMessage>가이드를 불러오는 중...</LoadingMessage>
            ) : error ? (
                <ErrorMessage>가이드를 불러오는데 문제가 발생했습니다</ErrorMessage>
            ) : guides.length === 0 ? (
                <EmptyMessage>등록된 가이드가 없습니다</EmptyMessage>
            ) : (
                guides.map((guide) => (
                    <GuideItem key={guide.id} guide={guide} />
                ))
            )}
        </GuideContent>

        <NavigationBar />
    </GuidePageLayout>
    )
}

export default Guide;

const GuidePageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  width: 100%;
  min-height: 100vh;
  background-color: ${color.white};
`

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 8px;
  padding: 16px;
  width: 100%;
  margin-top: 60px;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  -ms-overflow-style: none;
  scrollbar-width: none;
`

interface CategoryButtonProps {
  selected: boolean;
}

const CategoryButton = styled.button<CategoryButtonProps>`
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 14px;
  white-space: nowrap;
  cursor: pointer;
  background-color: ${props => props.selected ? color.primary : color.gray100};
  color: ${props => props.selected ? color.white : color.gray600};
  border: none;
  outline: none;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.selected ? color.primary : color.gray200};
  }
`

const GuideContent = styled.div`
  width: 100%;
  padding: 16px;
  flex: 1;
  margin-bottom: 70px;
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