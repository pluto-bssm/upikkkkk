'use client'

import Header from '@/components/common/Header'
import NavigationBar from '@/components/common/NavigationBar'
import styled from '@emotion/styled'
import HeaderItems from './packages/ui/HeaderItem'
import color from './packages/design-system/src/color'


  const iconItems = [
    <img key="bell" src="svg/Bell.svg" alt="알림" width={24} height={24} />,
    <img key="search" src="svg/Search.svg" alt="검색" width={24} height={24} />,
    <img key="user" src="svg/User.svg" alt="사용자" width={24} height={24} />
  ];


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
        RightItem={<HeaderItems ItemsCount={3} Items={iconItems} />}/>


        <ContentArea>
        <div>스크롤해서 sticky 테스트</div>
        {Array.from({ length: 50 }, (_, i) => (
          <div key={i} style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
            콘텐츠 {i + 1}
          </div>
        ))}
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
  flex: 1; /* 남은 공간 채우기 */
  margin-top : 100px;
`;