'use client'

import Header from "@/components/common/Header";
import HeaderItemsBox from "@/components/Header/HeaderItemBox";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import GuideComponent from "@/components/Main/GuideComponent";
import NavigationBar from "@/components/common/NavigationBar";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Guide = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('전체');
    return (
    <GuidePageLayout>
       <Header LeftItem={
        <img
        src="/svg/Logo.svg"
        width={50}
        height={50}
         />
      } 
        RightItem={<HeaderItemsBox type={'main'} />}
         types={"default"}
         onSelect={(label) => setSelectedCategory(label)}
          />
        
        <MainLayout>
        <GuideComponent gap="16px" category={selectedCategory} />   
        </MainLayout>     
        <NavigationBar />
        
    </GuidePageLayout>
    )

}

export default Guide;

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
  margin-top:15vh;
  background-color : ${color.white};
`;  
