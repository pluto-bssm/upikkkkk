'use client'

import Header from '@/components/common/Header'
import NavigationBar from '@/components/common/NavigationBar'
import styled from '@emotion/styled'
import HeaderItemsBox from '@/components/Header/HeaderItemBox'
import color from '@/packages/design-system/src/color'

const Home = () => {
  return (
    <MainPageLayout>
      <Header LeftItem={
        <img
        src="/svg/Logo.svg"
        width={50}
        height={50}
         />
      } 
        RightItem={<HeaderItemsBox type={'main'} />}
        types='votemake'/>


        <ContentArea>
          
        </ContentArea>

      <NavigationBar />
    </MainPageLayout>
  );
}


export default Home;

const MainPageLayout = styled.div`
  display :flex;
  flex-direction : column;
  align-items : center;
  max-width : 600px;
  width : 100%;
  min-height: 100vh;
  background-color : ${color.white};
  
`


const ContentArea = styled.div`
  width: 100%;
  flex: 1;
  margin-top : 100px;
`;