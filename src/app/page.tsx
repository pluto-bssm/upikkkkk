'use client'

import Header from '@/components/common/Header'
import NavigationBar from '@/components/common/NavigationBar'
import styled from '@emotion/styled'
import HeaderItemsBox from '@/components/Header/HeaderItemBox'
import color from '@/packages/design-system/src/color'
import font from '@/packages/design-system/src/font'

// Inlined Figma node 258:2079 component (moved here per request)
const Node2582079 = (): React.ReactElement => {
  const imgSrc = "http://localhost:3845/assets/placeholder-258-2079.svg";

  return (
    <Wrapper data-node-id="258:2079">
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: ${color.white};
  padding: 10px 12px;
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.04);
`;

const Left = styled.div``;

const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  overflow: hidden;
  background: ${color.gray100};
  img { width: 100%; height: 100%; object-fit: cover; }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Name = styled.div`
  ${font.H3}
  color: ${color.black};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Badge = styled.div`
  ${font.p2}
  background: ${color.primary};
  color: ${color.white};
  padding: 4px 8px;
  border-radius: 999px;
`;

const Message = styled.div`
  ${font.H4}
  color: ${color.gray600};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;


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
        types='None' />


      <ContentArea>
        <div>스크롤해서 sticky 테스트</div>
        <div style={{ margin: '16px 0' }}>
          <Node2582079 />
        </div>
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
  flex: 1;
  margin-top : 100px;
`;