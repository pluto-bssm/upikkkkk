'use client'

import styled from "@emotion/styled";
import { useRouter,usePathname } from "next/navigation";
import { useState } from "react";
import color from "@/packages/design-system/src/color";
import MemberChose from "@/components/Modal/MemberChose";
import Header from "@/components/common/Header";
import HeaderItemsBox from "@/components/Header/HeaderItemBox";

import { motion, AnimatePresence } from "framer-motion";

export default
function OptionsPage() {   
  
  const router = useRouter()
  const pathname = usePathname()

  const [isOpen,setIsOpen] = useState(false);

  return (
    <OptionsLayout>

      <Header 
        LeftItem={
          <img
            src="/svg/Back.svg"
            width={20}
            height={50}
            onClick={() => {router.back()}}
          />
        } 
        CenterItem={<HeaderItemsBox type={'votesetting'}/>} 
        types="votemake"
      />

      <OptionsSection>
        <OptionItemWrapper onClick={() => setIsOpen(true)}>
          <OptionContent>
            <OptionHeaderRow>
              <OptionTitleText>투표 종료 조건</OptionTitleText>
            </OptionHeaderRow>

            <OptionActionRow>
              <OptionSubtitleText>투표 종료 조건 설정하기</OptionSubtitleText>
              <img src="/svg/Nexts.svg" alt="next" width={20} height={20}/>
            </OptionActionRow>
          </OptionContent>
        </OptionItemWrapper>

        <OptionItemWrapper>
          <OptionContent>
            <OptionHeaderRow>
              <OptionTitleText>선지 작성하기</OptionTitleText>
            </OptionHeaderRow>

            <OptionActionRow>
              <OptionSubtitleText>AI 자동 선지 추천 기능 사용하기</OptionSubtitleText>
              <img src="/svg/Nexts.svg" alt="next" width={20} height={20}/>
            </OptionActionRow>
          </OptionContent>
        </OptionItemWrapper>

        <MemberChose isOpen={isOpen} setIsOpen={setIsOpen} />
      </OptionsSection>

    </OptionsLayout>
  );
}

const OptionsLayout = styled.div`
  max-width: 600px;
  width : 100%;
  background-color : ${color.white};
  height : 100vh;
`

const OptionsSection = styled.div`
  display :flex;
  flex-direction : column;
  margin-top : 100px;
`

const OptionItemWrapper = styled.div`
  max-width : 600px;
  width : 100%;
  display : flex;
  justify-content: center;   
  align-items: center;
  padding : 20px 0px;
  border-bottom : 1px solid #F0F0F0;
`

const OptionContent = styled.div`
  width : 90%;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content: center;
  gap : 20px;
`

const OptionActionRow = styled.div`
  display : flex;
  flex-direction : row;
  width : 100%;
  justify-content: space-between;
`

const OptionHeaderRow = styled.div`
  display : flex;
  flex-direction : row;
  width : 100%;
  justify-content: space-between;
`

const OptionTitleText = styled.p`
  font-size : 12px;
  color : #B3B3B3;
  font-weight : 600;
`

const OptionSubtitleText = styled.p`
  font-size : 16px;
  color : #011627;
  font-weight : 600;
`
