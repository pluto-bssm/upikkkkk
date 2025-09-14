'use client'

import Header from "@/components/common/Header";
import HeaderItemsBox from "@/components/Header/HeaderItemBox";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import NavigationBar from "@/components/common/NavigationBar";
import { mockMainGuideData } from "@/mock/MoreGuide";
import font from "@/packages/design-system/src/font";
import { useRouter } from "next/navigation";
import ChartComponent from "@/components/Guide/ChartComponent";

const MoreGuide = () => {
  const router = useRouter();
  const guide = mockMainGuideData[0]; 

  return (
    <GuidePageLayout>
      <Header 
        LeftItem={
          <img
            src="/svg/Back.svg"
            width={20}
            height={50}
            onClick={() => router.back()}
          />
        } 
        RightItem={<HeaderItemsBox type={'guide'} />}
        types={'none'}
      />

      <MainLayout>
        <Layout>
        <TitleColumn>
          <Thumb src={guide.thumnail} alt="thumbnail" />
          <TitleTexts>
            <Title>{guide.title}</Title>
            <Date>{guide.date}</Date>
          </TitleTexts>
          <Line />
        </TitleColumn>

        <VoteSection>
          <ChartComponent />
        </VoteSection>
        </Layout>
      </MainLayout>

      <NavigationBar />
    </GuidePageLayout>
  );
}

export default MoreGuide;

const GuidePageLayout = styled.div`
  display :flex;
  flex-direction : column;
  align-items : center;
  max-width : 600px;
  width : 100%;
  min-height: 100vh;
  background-color : ${color.white};
`;

const MainLayout = styled.div`
  display :flex;
  flex-direction : column;
  align-items : center;
  max-width : 600px;
  width : 100%;
  min-height: 100vh;
  margin-top:13%;
  background-color : ${color.white};
`;  

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width : 90%;
  align-items: center;
`;
const TitleColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  width: 100%;
`;

const Thumb = styled.img`
  width: 33px;
  height: 33px;
`;

const TitleTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h1`
  margin: 0;
  color: ${color.black};
  ${font.D1};
`;

const Date = styled.span`
  color: ${color.gray500};
  font-family: ${font.p1};
`;

const Line = styled.hr`
  width: 100%;
  border: none;
  height: 1px;
  background: ${color.gray300};
  margin: 0;
`;

const VoteSection = styled.section`
  width: 30vh;
  height:30vh;
  display:flex;
  align-items : center;
  flex-direction : column;
  margin-top: 16px;
`;
