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
import { useVotes } from '@/hooks/useVote'

const Main = () => {
  const { votes, loading, error } = useVotes();

  return (
    <MainPageLayout>
      <Header LeftItem={
        <img
        src="/svg/Logo.svg"
        width={50}
        height={50}
         />
      } 
        RightItem={<HeaderItemsBox type={'Main'} />}
        types='None'/>
        <RecoVote/>
        <SectionHeader>
          <Book />
          <SectionTitle>인기 가이드</SectionTitle>
        </SectionHeader>
        <GuideComponent sortstandard={'많이 저장한 가이드 기준'} limit={3}/>
        <SectionHeader>
          <VoteMain />
          <SectionTitle>인기 투표</SectionTitle>
        </SectionHeader>
        <VoteListSection>
          {loading ? (
            <LoadingText>투표를 불러오는 중...</LoadingText>
          ) : error ? (
            <ErrorText>투표를 불러오는데 실패했습니다.</ErrorText>
          ) : votes.length > 0 ? (
             votes.slice(0, 3).map((vote) => (
               <VoteItemWrapper key={vote.id}>
                 <VoteBlock                         
                vote={vote} 
              />
               </VoteItemWrapper>
             ))
          ) : (
            <NoDataText>등록된 투표가 없습니다.</NoDataText>
          )}
        </VoteListSection>
        <SectionHeader>
          <Book />
          <SectionTitle>오늘의 가이드</SectionTitle>
        </SectionHeader>
        <GuideComponent sortstandard={'가이드 제작일 빠른순'} limit={3}/>
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

const LoadingText = styled.div`
  color: ${color.gray500};
  font-family: ${font.P1};
  text-align: center;
  padding: 20px;
  width: 100%;
`;

const ErrorText = styled.div`
  color: ${color.accent};
  font-family: ${font.P1};
  text-align: center;
  padding: 20px;
  width: 100%;
`;

const NoDataText = styled.div`
  color: ${color.gray400};
  font-family: ${font.P1};
  text-align: center;
  padding: 20px;
  width: 100%;
`;