import React from 'react'
import styled from '@emotion/styled'
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function ChoseButton() {

  const router = useRouter();
  const path = usePathname();


  return (
    <ButtonDiv>
      <Button onClick={() => router.push(`${path}/bullots`)}>
        <Image src="/svg/Plus.svg" alt="plus" width={24} height={24} />
        <p>투표 제작하기</p>
      </Button>
    </ButtonDiv>
  )
}

const ButtonDiv = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`

const Button = styled.button`
    width: 90%;
    height: 54px;
    background: #FF9F1C;
    border: none;
    border-radius: 32px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    
    p {
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        color: #ffffffff;
    }
    `