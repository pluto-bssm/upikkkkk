'use client'

import Header from '@/components/common/Header'
import NavigationBar from '@/components/common/NavigationBar'
import styled from '@emotion/styled'
import HeaderItemsBox from '@/components/Header/HeaderItemBox'
import color from '@/packages/design-system/src/color'
import font from '@/packages/design-system/src/font'
import RecoVote from '@/components/Main/RecoVote'
import GuideComponent from '@/components/Main/GuideComponent'
import VoteBlock from '@/components/Vote/VoteBlock'

const Main = () => {
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
        types='None'/>
        <RecoVote/>
        <SectionHeader>
          <Book />
          <SectionTitle>인기 가이드</SectionTitle>
        </SectionHeader>
        <GuideComponent/>
        <SectionHeader>
          <VoteMain />
          <SectionTitle>인기 투표</SectionTitle>
        </SectionHeader>
        <VoteListSection>
          {[
            { id: 1, title: '투표제목', category: '학교생활', views: '16', state: '2025-08-31에 마감되는 투표' },
            { id: 2, title: '투표제목', category: '기숙사', views: '16', state: '2025-08-31에 마감되는 투표' },
            { id: 3, title: '투표제목', category: '유머', views: '20', state: '2025-08-31에 마감되는 투표' }
          ].map((vote) => (
            <VoteItemWrapper key={vote.id}>
              <VoteBlock
                id={vote.id}
                title={vote.title}
                catogory={vote.category}
                views={vote.views}
                state={vote.state}
                hrefBase={"/Vote"}
              />
            </VoteItemWrapper>
          ))}
        </VoteListSection>
        <SectionHeader>
          <Book />
          <SectionTitle>오늘의 가이드</SectionTitle>
        </SectionHeader>
        <GuideComponent/>
      <NavigationBar />
    </MainPageLayout>
  );
}


export default Main;

const MainPageLayout = styled.div`
  display :flex;
  flex-direction : column;
  align-items : center;
  max-width : 600px;
  width : 100%;
  min-height: 100vh;
  background-color : ${color.white};
  padding-bottom: 70px;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  height: 37px;
  gap: 8px;
  margin-top:20px;
  align-self:flex-start;
  margin-left:6%;
`;

const SectionTitle = styled.div`
  color: ${color.gray700};
  font-family:${font.P2};
`;

const Book = styled.div`
  width:24px;
  height:22px;
  background-color:${color.gray700};
  -webkit-mask: url('/svg/Book.svg') no-repeat center / contain;
  mask: url('/svg/Book.svg') no-repeat center / contain;
`;

const VoteMain = styled.div`
  width:24px;
  height:22px;
  background-color:${color.gray700};
  -webkit-mask: url('/svg/VoteMain.svg') no-repeat center / contain;
  mask: url('/svg/VoteMain.svg') no-repeat center / contain;
`;

const VoteListSection = styled.div`
  width: 100%;
  padding: 0 6%;
  display: flex;
  flex-direction: row;
  gap: 4px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

const VoteItemWrapper = styled.div`
  flex: 0 0 100%;
  width: 100%;
  scroll-snap-align: start;
`;