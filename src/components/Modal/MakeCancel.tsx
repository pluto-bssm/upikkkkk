import React from 'react'
import styled from '@emotion/styled'
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

type CancelButtonProps = React.ComponentProps<typeof motion.div> & {

  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;

};

export default function CancelButton({ setIsOpen, ...motionProps }: CancelButtonProps) {

  const router = useRouter();

  function handleCancel() {
    setIsOpen?.(false);
    router.replace("/")
}
  

  return (
    <ModalBackground {...motionProps}>
        <ModalContent>
            <Text>
                <Title>투표 제작을 취소하시겠어요?</Title>
                <SubP>지금까지 작성한 내용은 저장되지 않습니다.</SubP>
            </Text>

            <ButtonGroup>
                <Button onClick={() => {setIsOpen?.(false)}}>취소</Button>
                <Button onClick={() => {handleCancel()}}>확인</Button>
            </ButtonGroup>
        </ModalContent>
    </ModalBackground>
  )
}

const ModalBackground = styled(motion.div)`
    position: fixed;
    width: 100%;
    max-width: 600px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`

const ModalContent = styled.div`
    background-color: #fff;
    padding: 50px 24px;
    border-radius: 24px;
    width: 80%;
    text-align: center;
    border: 2px solid #DADADA;

    button {
        margin: 0 8px;
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
    }

`
const Text = styled.div`
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
    gap : 4px;

`
const Title = styled.p`
    font-size: 20px;
    font-weight: 700;
    color: #011627;
    margin-bottom: 8px;
`

const SubP = styled.p`
    font-size: 14px;
    color: #B3B3B3;
`

const ButtonGroup = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    gap: 16px;
`  

const Button = styled.button`
    font-weight: 700;
    &:first-of-type {
        background-color: #ffffff;
        color: #000000;
    }
    &:last-of-type {
        background-color: #ffffff;
        color: #FF9F1C;
    }
`