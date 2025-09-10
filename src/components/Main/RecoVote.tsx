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
              <RecoTitle>{mockVoteData.question}</RecoTitle>
            </RecoTitleRow>
            <RecoOptionsRow>
              <RecoOption>{mockVoteData.options[0]}</RecoOption>
              <RecoVS>VS</RecoVS>
              <RecoOption>{mockVoteData.options[1]}</RecoOption>
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


