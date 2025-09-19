'use client'

import styled from '@emotion/styled'
import color from '@/packages/design-system/src/color'
import font from '@/packages/design-system/src/font'
import { useTodayVote } from '@/hooks/useVote'

const RecoVote = () => {
  const { vote, loading, error } = useTodayVote();

  if (loading) {
    return (
      <RecoCard>
        <RecoInner>
          <RecoHeader>
            <RecoSubTitle>오늘의 추천 투표는?</RecoSubTitle>
            <RecoTitleRow>
              <RecoTitle>투표를 불러오는 중...</RecoTitle>
            </RecoTitleRow>
            <RecoOptionsRow>
              <RecoOption>로딩 중...</RecoOption>
              <RecoVS>VS</RecoVS>
              <RecoOption>로딩 중...</RecoOption>
            </RecoOptionsRow>
          </RecoHeader>
        </RecoInner>
      </RecoCard>
    );
  }

  if (error || !vote) {
    return (
      <RecoCard>
        <RecoInner>
          <RecoHeader>
            <RecoSubTitle>오늘의 추천 투표는?</RecoSubTitle>
            <RecoTitleRow>
              <RecoTitle>투표를 불러올 수 없습니다.</RecoTitle>
            </RecoTitleRow>
            <RecoOptionsRow>
              <RecoOption>오류 발생</RecoOption>
              <RecoVS>VS</RecoVS>
              <RecoOption>오류 발생</RecoOption>
            </RecoOptionsRow>
          </RecoHeader>
        </RecoInner>
      </RecoCard>
    );
  }

  const options = vote.options || [];
  const firstOption = options[0] || { content: "옵션 없음", id: "", responseCount: 0, percentage: 0 };
  const secondOption = options[1] || firstOption;

  return (
    <RecoCard>
        <RecoInner>
          <RecoHeader>
            <RecoSubTitle>오늘의 추천 투표는?</RecoSubTitle>
            <RecoTitleRow>
              <RecoTitle>{vote.title}</RecoTitle>
            </RecoTitleRow>
            <RecoOptionsRow>
              <RecoOption>{firstOption.content}</RecoOption>
              <RecoVS>VS</RecoVS>
              <RecoOption>{secondOption.content}</RecoOption>
            </RecoOptionsRow>
          </RecoHeader>
        </RecoInner>
        <GoVoteWrap>
          <GoVote>투표하러 가기</GoVote>
        </GoVoteWrap>
      </RecoCard>
  );
}

export default RecoVote;


const RecoCard = styled.div`
  width : 90%;
  border : 1px solid ${color.gray50};
  border-radius: 8px;
  background-color : ${color.white};
  padding: 20px 20px 10px 20px;
  margin-top:10vh;
  gap : 4px;
`;

const RecoInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const RecoHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const RecoSubTitle = styled.div`
  color: ${color.gray300};
  font-family:${font.btn3};
  line-height: 9.55px;
`;

const RecoTitleRow = styled.div`
  display: flex;
`;

const RecoTitle = styled.div`
  color: ${color.black};
  font-family:${font.P16};
  font-weight: 600;
  line-height: 14.32px;
`;

const RecoOptionsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const RecoOption = styled.div`
  color: ${color.black};
  font-family:${font.P2};
  line-height: 16.7px;
`;

const RecoVS = styled.div`
  color: ${color.primary};
  font-family:${font.P14};
`;

const GoVoteWrap = styled.div`
  margin-top: 10px;
`;

const GoVote = styled.div`
  color: ${color.primary};
  font-family:${font.btn3};
`;


