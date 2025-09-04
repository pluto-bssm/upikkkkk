"use client"

import EditInfo from "@/components/ChoseEdits/EditInfo";
import Ballot from "@/components/ChoseEdits/Ballot";
import ChoseButton from "@/components/ChoseEdits/ChoseButton";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import { useVoteStore } from "@/app/stores/useVoteStore";

export default function ChoseEdit() {  
  const lis = ["A", "B", "C", "D", "E"];
  const maxPossibleBallots = lis.length;

  const { title, setTitle, ballots, setBallots } = useVoteStore();


  const handleAddBallot = () => {
    if (ballots.length < maxPossibleBallots) {
      setBallots([...ballots, ""]);
    }
  };


  const handleRemoveBallot = (idx: number) => {
    if (ballots.length > 2) {
      setBallots(ballots.filter((_, i) => i !== idx));
    }
  };

  return (
    <Container>
      <EditInfo title={title} setTitle={setTitle} />

      <BallotForm>
        {ballots.map((b, idx) => (
          <Ballot
            key={idx}
            Info={lis[idx]} 
            value={b}
            onChange={(v) => {
              const newBallots = [...ballots];
              newBallots[idx] = v;
              setBallots(newBallots);
            }}
            minusBallot={() => handleRemoveBallot(idx)}
          />
        ))}
      </BallotForm>

      {ballots.length < maxPossibleBallots && (
        <AddButton onClick={handleAddBallot}>
          <img src="/svg/Plus.svg" alt="plus" width={24} height={24} />
        </AddButton>
      )}

      <Buttons>
        <ChoseButton />
      </Buttons>
    </Container>
  );
}


const Buttons = styled.div`
  width : 90%;

   margin-top: 50px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  width : 100%;

  gap: 16px;

  margin-top: 100px;
`;

const BallotForm = styled.div`
  display: flex;
  flex-direction: column;

  width : 90%;
  gap : 10px;
  margin-top : 30px;
`

const AddButton = styled.div`
  cursor: pointer;
  font-weight: 500;
  padding: 8px 8px;
  border-radius: 50%;
  background-color: #FF9F1C;
  transition: all 0.2s ease;

  aspect-ratio: 1;

  display : flex;


  &:active {
    transform: translateY(1px);
  }
`;