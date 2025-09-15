'use client'

import Header from "@/components/common/Header";
import HeaderItemsBox from "@/components/Header/HeaderItemBox";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import NavigationBar from "@/components/common/NavigationBar";
import font from "@/packages/design-system/src/font";
import { useRouter } from "next/navigation";
import RevoteComponent from "@/components/Guide/RevoteComponent";

const Revote = () => {
  const router = useRouter();

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
        RightItem={<HeaderItemsBox type={'revote'} />}
        types={'none'}
      />

      <RevoteLayout>
        <Layout>
        <RevoteHeader>
          <SmallHeader>재투표 신청</SmallHeader>
            <Title>가이드 재투표 신청하기</Title>
        </RevoteHeader>

        <Column>
                <SmallTitle>재투표 요청 이유 선택 <Star>*</Star></SmallTitle>
                <RevoteComponent/>
        </Column>

        <Column>
                <SmallTitle>상세 내용 <Star>*</Star></SmallTitle>
                
        </Column>
        </Layout>
      </RevoteLayout>

      <NavigationBar />
    </GuidePageLayout>
  );
}

export default Revote;

const GuidePageLayout = styled.div`
  display :flex;
  flex-direction : column;
  align-items : center;
  max-width : 600px;
  width : 100%;
  min-height: 100vh;
  background-color : ${color.white};
`;

const RevoteLayout = styled.div`
  display :flex;
  flex-direction : column;
  align-items : center;
  max-width : 600px;
  width : 100%;
  min-height: 100vh;
  margin-top:15%;
  background-color : ${color.white};
`;  

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.74vh;  
  width: 90%;
  align-items: start; 
`;

const RevoteHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;   
  width: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px; 
  width: 100%;
`;

const SmallHeader = styled.div`
  font-family:${font.P1};
  color:${color.gray700};
`;

const Title = styled.h1`
  margin: 0;
  color: ${color.black};
  font-family:${font.D2};
`;

const SmallTitle = styled.div`
font-family:${font.P13};
  color:${color.gray700};
`;

const Star = styled.span`
    color:${color.accent};
`;