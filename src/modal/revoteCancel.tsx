'use client'

import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";

interface RevoteCancelProps {
    onClose: () => void;
    onConfirm: () => void;
}

const RevoteCancel = ({ onClose, onConfirm }: RevoteCancelProps) => {
    return (
        <Overlay onClick={onClose}>
            <ModalLayout onClick={(e) => e.stopPropagation()}>
                <Title>재투표 요청을 취소하시겠어요?</Title>
                <Description>지금까지 작성한 내용은 저장되지 않습니다.</Description>
                <ButtonContainer>
                    <CancelButton onClick={onClose}>취소</CancelButton>
                    <ConfirmButton onClick={onConfirm}>확인</ConfirmButton>
                </ButtonContainer>
            </ModalLayout>
        </Overlay>
    )
}

export default RevoteCancel;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 20px;
`;

const ModalLayout = styled.div`
    max-width: 328px;
    width: 100%;
    background-color: ${color.white};
    border-radius: 24px;
    padding: 52px 20px 40px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
    border: 1px solid ${color.gray200};
`;

const Title = styled.h2`
    font-size: 20px;
    font-weight: 600;
    color: ${color.black};
    margin: 0 0 16px 0;
    line-height: 1.2;
`;

const Description = styled.p`
    font-family: ${font.P14};
    color: ${color.gray500};
    margin: 0 0 32px 0;
    line-height: 1.2;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 84px;
    align-items: center;
`;

const CancelButton = styled.button`
    background: none;
    border: none;
    font-family: ${font.P1};
    font-size: 15px;
    font-weight: 600;
    color: ${color.black};
    cursor: pointer;
    padding: 0;
    
    &:hover {
        opacity: 0.7;
    }
`;

const ConfirmButton = styled.button`
    background: none;
    border: none;
    font-family: ${font.P1};
    font-size: 15px;
    font-weight: 600;
    color: ${color.primary};
    cursor: pointer;
    padding: 0;
    
    &:hover {
        opacity: 0.7;
    }
`;
