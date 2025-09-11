"use client"

import EditInfo from "@/components/ChoseEdits/EditInfo";
import Ballot from "@/components/ChoseEdits/Ballot";
import ChoseButton from "@/components/ChoseEdits/ChoseButton";
import styled from "@emotion/styled";
import Header from "@/components/common/Header";
import HeaderItemsBox from "@/components/Header/HeaderItemBox";
import { useVoteStore } from "@/app/stores/useVoteStore";
import color from "@/packages/design-system/src/color";
import { useRouter } from "next/navigation";
import { useState } from "react";
import MakeCancel from "@/components/Modal/MakeCancel";

export default function ChoseEdit() {  
  const lis = ["A", "B", "C", "D", "E"];
  const maxPossibleBallots = lis.length;
  const router = useRouter();

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

  const [isOpenMakemodal , setIsOpenMakemodal] = useState(false);

  return (

    
      <BullotsLayout>
      <Header LeftItem={<img
        src="/svg/Back.svg"
        width={20}
        height={50}
        onClick={() => {router.back()}}
         />} RightItem={<HeaderItemsBox type={'bollot'} isopen={isOpenMakemodal} setIsOpen={setIsOpenMakemodal}/>} 
         types = "votemake"/>
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

    {isOpenMakemodal ?  <MakeCancel setIsOpen={setIsOpenMakemodal} isOpen={isOpenMakemodal}/> : null}

    </BullotsLayout>
  );
}

const BullotsLayout = styled.div`

  max-width: 600px;
  width : 100%;
  background-color : ${color.white};
  height : 100vh;
`


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