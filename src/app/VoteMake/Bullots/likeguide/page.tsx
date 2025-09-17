'use client'

import { useState } from "react";
import styled from "@emotion/styled";
import Header from "@/components/common/Header";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";
import HeaderItemsBox from "@/components/Header/HeaderItemBox";
import MakeCancel from "@/components/Modal/MakeCancel"
import { useRouter } from "next/navigation";
import GuideBlock from "@/components/VoteMakes/GuideBlock";
import LoadingModal from "@/components/Modal/LoadingModal";
import Complete from "@/components/Modal/Complete"

const SimilarGuide = () => {
  const guideData = [
    { id: 1, title: '가이드 제목', category: '학교생활', count: 16 },
    { id: 2, title: '가이드 제목', category: '학교생활', count: 16 },
    { id: 3, title: '가이드 제목', category: '학교생활', count: 16 },
    { id: 4, title: '가이드 제목', category: '학교생활', count: 16 },
  ];

  const router = useRouter();
  const [isOpenMakeModal, setIsOpenMakeModal] = useState(false);
  const [LodingModal, setLodingModal] = useState(false);
  const [CompleteModal, setCompleteModal] = useState(false);


  const handleContinue = () => {
    setLodingModal(true);

    setTimeout(() => {
      setLodingModal(false);
      setCompleteModal(true);
    }, 1000);

  };

  const CompleteVotemake = () => {
    router.push("/");
  }

  return (
    <SimilarGuideLayout>
      <Header
        LeftItem={
          <img
            src="/svg/Back.svg"
            width={20}
            height={50}
            onClick={() => router.back()}
          />
        }
        RightItem={
          <div onClick={() => setIsOpenMakeModal(true)}>
            <HeaderItemsBox type="votemake" />
          </div>
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

              <GuideBlock
                key={guide.id}
                id={guide.id}
                title={guide.title}
                catogory={guide.category}
                count={guide.count}
              />

            ))}
          </GuideListWrapper>

          <ContinueButton onClick={handleContinue}>
            <img src="/svg/Plus.svg" width={24} height={24} /> 계속 진행하기
          </ContinueButton>
        </ContentWrapper>
      </SimilarGuideContainer>

      {isOpenMakeModal ? (
        <MakeCancel setIsOpen={setIsOpenMakeModal} isOpen={isOpenMakeModal} />
      ) : null}

      {LodingModal && <LoadingModal title="투표를 제작하고 있어요." des="유픽에서는 재학생들로부터 더 정확한 정보를 제공받을 수 있어요." />}

      {CompleteModal && <Complete text1="투표 제작을" text2="했어요!" text3="완료" subtext="투표 제작 이후 투표 내용은 변경될 수 없어요." img="/svg/Completevote.svg" onfunciton={CompleteVotemake} />}

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
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 60px;

  &:hover {
    background-color: ${color.primary};
    opacity: 0.9;
  }

  display : flex;
  align-items : center;
  justify-content : center;
`;
