'use client'

import { useState } from "react";
import styled from "@emotion/styled";
import Header from "@/components/common/Header";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";

const SimilarGuide = () => {
  const guideData = [
    { id: 1, title: '가이드 제목', category: '학교생활', count: 16 },
    { id: 2, title: '가이드 제목', category: '학교생활', count: 16 },
    { id: 3, title: '가이드 제목', category: '학교생활', count: 16 },
    { id: 4, title: '가이드 제목', category: '학교생활', count: 16 },
  ];

  const handleGuideClick = (guideId: number) => {
    console.log('가이드 클릭:', guideId);
    
  };

  const handleContinue = () => {
    console.log('계속 진행하기');

  };

  const handleClose = () => {
    console.log('닫기');

  };

  return (
    <SimilarGuideLayout>
      <Header 
        LeftItem={
          <img
            src="/svg/Back.svg"
            width={20}
            height={50}
          />
        } 
        RightItem={
          <img
            src="/svg/Close.svg"
            width={20}
            height={20}
            onClick={handleClose}
            style={{ cursor: 'pointer' }}
          />
        } 
        types="Nones"
      />
      <SimilarGuideContainer>
        <ContentWrapper>
          <TextWrapper>
            <SubTitle>유사한 내용의 가이드가 있어요!</SubTitle>
            <MainTitle>아래의 가이드에 원하는 내용이 있다면,<br />상단의 엑스 버튼을 선택해주세요!</MainTitle>
            <Description>가이드 제목을 클릭하면 내용 전부를 확인할 수 있어요.</Description>
          </TextWrapper>

          <GuideListWrapper>
            {guideData.map((guide) => (
              <GuideItem key={guide.id} onClick={() => handleGuideClick(guide.id)}>
                <GuideIcon>
                  <img src="/svg/Guide.svg" alt="guide" width={40} height={40} />
                </GuideIcon>
                <GuideInfo>
                  <GuideTitle>{guide.title}</GuideTitle>
                  <GuideDetails>
                    <Category>{guide.category}</Category>
                    <Count>{guide.count}</Count>
                  </GuideDetails>
                </GuideInfo>
              </GuideItem>
            ))}
          </GuideListWrapper>

          <ContinueButton onClick={handleContinue}>
            + 계속 진행하기
          </ContinueButton>
        </ContentWrapper>
      </SimilarGuideContainer>
    </SimilarGuideLayout>
  );
}

export default SimilarGuide;

const SimilarGuideLayout = styled.div`
  max-width: 600px;
  width: 100%;

  background-color: ${color.white};
  min-height: 100vh;
`;

const SimilarGuideContainer = styled.div`
  width: 100%;
  margin-top : 100px;
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SubTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  color : #FF9F1C;
  margin: 0;
`;

const MainTitle = styled.h1`
  color : #011627;
  font-weight: 600;
  font-size : 23px;

`;

const Description = styled.p`
  ${font.H3};
  color: #9CA3AF;
  margin: 0;

`;

const GuideListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const GuideItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #F9FAFB;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #F3F4F6;
  }
`;

const GuideIcon = styled.div`
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GuideInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const GuideTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #1F2937;
  margin: 0;
`;

const GuideDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Category = styled.span`
  font-size: 12px;
  color: #6B7280;
`;

const Count = styled.span`
  font-size: 12px;
  color: #6B7280;
`;

const ContinueButton = styled.button`
  width: 100%;
  padding: 16px;
  border-radius: 30px;
  border: none;
  background-color: ${color.primary};
  color: ${color.white};
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 60px;

  &:hover {
    background-color: ${color.primary};
    opacity: 0.9;
  }
`;
