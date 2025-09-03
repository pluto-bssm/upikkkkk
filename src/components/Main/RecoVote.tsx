'use client'

import styled from '@emotion/styled'
import color from '@/packages/design-system/src/color'
import font from '@/packages/design-system/src/font'

const RecoVote = () => {
  const mockVoteData = {
    question: "이중에 뭐가 더 싫어?",
    options: ["새벽 1시 알바", "새벽 1시 과제"]
  };

  return (
    <RecoVoteBoxLayout>
        <Text>오늘의 추천 투표는?</Text>
        <Ques>{mockVoteData.question}</Ques>
        <OptionsContainer>
          {mockVoteData.options.map((option, index) => (
            <Option key={index}>
              <OptionText>{option}</OptionText>

            </Option>
          ))}
        </OptionsContainer>
    </RecoVoteBoxLayout>
  );
}


export default RecoVote;

const RecoVoteBoxLayout = styled.div`
  display :flex;
  flex-direction : column;
  align-items : center;
  min-height: 30vh;
  width: 89.7%;
  max-width: 350px;
  background-color : ${color.white};
  border:1px solid ${color.gray50};
  margin-top:10vh;
`


const Text = styled.div`
  font-family : ${font.p2};
  font-size : 16px; 
  font-weight : 500;
  color : ${color.gray300};
  margin-top : 20px;
`;

const Ques = styled.div`
  font-weight : 600;
  color : ${color.black};
  margin-top : 20px;
  text-align: center;
  font-family: ${font.H16};
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
  width: 100%;
  padding: 0 20px;
`;

const Option = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border: 1px solid ${color.gray100};
  border-radius: 8px;
  background-color: ${color.white};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${color.primary};
    background-color: ${color.gray50};
  }
`;

const OptionText = styled.div`
  font-family : ${font.p2};
  font-size : 14px;
  font-weight : 500;
  color : ${color.black};
`;

const VoteCount = styled.div`
  font-family : ${font.p2};
  font-size : 12px;
  font-weight : 400;
  color : ${color.gray400};
`;