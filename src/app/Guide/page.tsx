'use client'

import Header from "@/components/common/Header";
import HeaderItemsBox from "@/components/Header/HeaderItemBox";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import GuideComponent from "@/components/Main/GuideComponent";
import NavigationBar from "@/components/common/NavigationBar";

const Guide = () => {

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
        types='None'/>
        
        <GuideComponent/>        
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

