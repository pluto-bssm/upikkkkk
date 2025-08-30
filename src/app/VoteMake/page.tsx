'use client'

import Header from "@/components/common/Header";
import HeaderItemsBox from "@/components/Header/HeaderItemBox";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";

import NavigationBar from "@/components/common/NavigationBar";

const votemake = () => {

    return (
    <VoteMakePageLayout>
        <Header LeftItem={<img
        src="/svg/Logo.svg"
        width={50}
        height={50}
         />} RightItem={<HeaderItemsBox type={'votemake'}/>} />

        <NavigationBar />
        
    </VoteMakePageLayout>
    )

}

export default votemake;

const VoteMakePageLayout = styled.div`
  display :flex;
  flex-direction : column;
  align-items : center;
  max-width : 600px;
  width : 100%;
  min-height: 100vh;
  background-color : ${color.white};
  
`