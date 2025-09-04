'use client'

import styled from '@emotion/styled'
import color from '@/packages/design-system/src/color'
import font from '@/packages/design-system/src/font'

const RecoVote = () => {
  const mockVoteData = {
    question: "이중에 뭐가 더 싫어?",
    options: ["최병준쌤과 헬스 4시간", "규봉쌤과 수학 4시간"]
  };

  return (
    <RecoCard>
        <RecoInner>
          <RecoHeader>
            <RecoSubTitle>오늘의 추천 투표는?</RecoSubTitle>
            <RecoTitleRow>
              <RecoTitle>이중에 뭐가 더 싫어?</RecoTitle>
            </RecoTitleRow>
            <RecoOptionsRow>
              <RecoOption>최병준쌤과 헬스 3시간</RecoOption>
              <RecoVS>VS</RecoVS>
              <RecoOption>규봉쌤과 수학풀이 5시간</RecoOption>
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
  width: 350px;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  background: #ffffff;
  padding: 20px 20px 10px 20px;
  margin-top:10vh;

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
  color: #c8c8c8;
  font-size: 8px;
  line-height: 9.55px;
`;

const RecoTitleRow = styled.div`
  display: flex;
`;

const RecoTitle = styled.div`
  color: #000;
  font-size: 12px;
  font-weight: 600;
  line-height: 14.32px;
`;

const RecoOptionsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const RecoOption = styled.div`
  color: #000;
  font-size: 14px;
  line-height: 16.7px;
`;

const RecoVS = styled.div`
  color: #ff9f1c;
  font-size: 14px;
  font-weight: 600;
`;

const GoVoteWrap = styled.div`
  margin-top: 10px;
`;

const GoVote = styled.div`
  color: #ff9f1c;
  font-size: 8px;
`;


