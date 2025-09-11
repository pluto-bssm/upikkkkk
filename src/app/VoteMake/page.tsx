'use client'

import Header from "@/components/common/Header";
import HeaderItemsBox from "@/components/Header/HeaderItemBox";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import GuideCategoryImage from "@/components/VoteMakes/GuideCategoryImage";
import GuideCategoryText from "@/components/VoteMakes/GuideCategoryText";
import CategoryChoseBox from "@/components/VoteMakes/CategoryChoseBox";
import CategoryChose from "@/components/Modal/CategoryChose";
import ChoseButton from "@/components/VoteMakes/ChoseButton";
import MakeCancel from "@/components/Modal/MakeCancel";
import { useRouter } from "next/navigation";
import { useState } from "react";

const votemake = () => {

  const router =useRouter();

    const [GuideCategory, setGuideCategory] = useState('학교생활');
    const [isOpen , setIsOpen] = useState(false);
    const [isOpenMakemodal , setIsOpenMakemodal] = useState(false);

    return (
    <VoteMakePageLayout>
        <Header LeftItem={<img
        src="/svg/Back.svg"
        width={20}
        height={50}
        onClick={() => {router.back()}}
         />} RightItem={<div onClick={() => {setIsOpenMakemodal(true)}}><HeaderItemsBox type={'votemake'}/></div>} 
         types = "votemake"/>

        <Appdiv> 
         <UIdataDiv>
        <GuideCategoryImage category={GuideCategory} />
        <GuideCategoryText />
        </UIdataDiv>
      <CategoryChoseBox category={GuideCategory} setIsOpen={setIsOpen} isOpen={isOpen} />
      <ChoseButton />

      <CategoryChose setGuideCategory={setGuideCategory} category={GuideCategory} setIsOpen={setIsOpen} isOpen={isOpen}/>
        </Appdiv>

      {isOpenMakemodal ?  <MakeCancel setIsOpen={setIsOpenMakemodal} isOpen={isOpenMakemodal}/> : null}
    </VoteMakePageLayout>
    )

}

export default votemake;

const VoteMakePageLayout = styled.div`
  display :flex;
  flex-direction : column;
  align-items : center;
  max-width : 600px;
  width : 100%;
  min-height: 100vh;
  background-color : ${color.white};
  
`
const UIdataDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 36px;
`
const Appdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width : 100%;

  gap: 36px;
  margin-top: 140px;

`