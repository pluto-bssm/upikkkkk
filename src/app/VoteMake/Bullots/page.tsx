"use client"

import EditInfo from "@/components/ChoseEdits/EditInfo";
import Ballot from "@/components/ChoseEdits/Ballot";
import ChoseButton from "@/components/ChoseEdits/ChoseButton";
import styled from "@emotion/styled";
import Header from "@/components/common/Header";
import HeaderItemsBox from "@/components/Header/HeaderItemBox";
import { useVoteStore } from "@/app/stores/useVoteStore";
import color from "@/packages/design-system/src/color";
import { useRouter , usePathname } from "next/navigation";
import { useState } from "react";
import MakeCancel from "@/components/Modal/MakeCancel";
import LoadingModal from "@/components/Modal/LoadingModal";

export default function BallotEditPage() {  
  const lis = ["A", "B", "C", "D", "E"];
  const maxPossibleBallots = lis.length;
  const router = useRouter();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenSubmitModal, setIsOpenSubmitModal] = useState(false); 
  const [LikeguideModal, setLikeguideModal] = useState(false); 

  const { title, setTitle, ballots, setBallots } = useVoteStore();
  const path = usePathname();

const handleSubmit = () => {



    setIsOpenSubmitModal(true);
    

    setTimeout(() => {
      setIsOpenSubmitModal(false);
      setLikeguideModal(true);
    }, 1000);


    setTimeout(() => {
        setLikeguideModal(false);
    }, 4000);
    setTimeout(() => {
        router.push(`${path}/likeguide`);
    }, 3000);
    
};


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
    <BallotEditLayout>
      <Header 
        LeftItem={
          <img
            src="/svg/Back.svg"
            width={20}
            height={50}
            onClick={() => router.back()}
          />
        } 
        RightItem={
          <HeaderItemsBox 
            type={'bollot'} 
            isopen={isOpenMakemodal} 
            setIsOpen={setIsOpenMakemodal}
          />
        } 
        types="votemake"
      />

      <BallotEditContainer>
        <EditInfo title={title} setTitle={setTitle} />
        
        <BallotListForm>
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
        </BallotListForm>

        {ballots.length < maxPossibleBallots && (
          <AddBallotButton onClick={handleAddBallot}>
            <img src="/svg/Plus.svg" alt="plus" width={24} height={24} />
          </AddBallotButton>
        )}

        <ActionButtonWrapper>
          <ChoseButton 
            onSubmitClick={() => setIsOpenModal(true)}
            onSubmitConfirm={handleSubmit}
            isSubmitModalOpen={isOpenModal}
            setIsSubmitModalOpen={setIsOpenModal}
            onSubModalOpen={setIsOpenSubmitModal}
          />
        </ActionButtonWrapper>
      </BallotEditContainer>

      {isOpenMakemodal ? (
        <MakeCancel setIsOpen={setIsOpenMakemodal} isOpen={isOpenMakemodal}/> 
      ) : null}

      {isOpenSubmitModal && (
        <LoadingModal 
          title="욕설이 있는지 확인하고 있어요" 
          des="욕설이 포함된 투표는 제작될 수 없어요."
        />
      )}

      {LikeguideModal && (
        <LoadingModal 
          title={`유사한 내용의 가이드가 있는지\n확인하고 있어요`}
          des="유사한 내용의 가이드가 있다면, 기다리지 않아도 돼요."
        />
      )}
    </BallotEditLayout>
  );
}

const BallotEditLayout = styled.div`
  max-width: 600px;
  width : 100%;
  background-color : ${color.white};
  height : 100vh;
`

const ActionButtonWrapper = styled.div`
  width : 90%;
  margin-top: 50px;
`

const BallotEditContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  width : 100%;
  gap: 16px;
  margin-top: 100px;
`;

const BallotListForm = styled.div`
  display: flex;
  flex-direction: column;
  width : 90%;
  gap : 10px;
  margin-top : 30px;
`

const AddBallotButton = styled.div`
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