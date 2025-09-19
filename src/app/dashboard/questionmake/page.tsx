'use client'

import styled from "@emotion/styled";
import { useState } from "react";
import Header from "@/components/common/Header";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";
import { useRouter } from "next/navigation";
import { useCreateQuestion } from "@/hooks/useQuestions";
import MakeCancel from "@/components/Dashboard/MakeCancel"
import CompleteVote from "@/components/Modal/Complete";

interface SubmitButtonProps {
    disabled: boolean;
}

const QuestionMake = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [modalopen , setmodalopen] = useState(false);
    const [isCompleteOpen,setIsCompleteOpen] = useState(false);

    const router = useRouter();
    const { createQuestion, loading: isSubmitting } = useCreateQuestion();

    const handleComplete = () =>{
        router.back();
    }

    const handleSubmit = async () => {
        if (!title.trim()) {
            alert('질문 제목을 입력해주세요.');
            return;
        }
        if (!content.trim()) {
            alert('상세 내용을 입력해주세요.');
            return;
        }

        const result = await createQuestion(title, content);
        
        if (result.success) {
            setIsCompleteOpen(true);
            
        } else {
            alert(result.error || '질문 생성에 실패했습니다.');
        }
    };

    const handleBack = () => {
        setmodalopen(true);
    };

    return (
        <QuestionMakeLayout>
            <Header
                LeftItem={
                    <BackButton
                        src="/svg/Close.svg"
                        width={20}
                        height={50}
                        onClick={handleBack}
                    />
                }
                RightItem={
                    <SubmitButton
                        onClick={handleSubmit}
                        disabled={!title.trim() || !content.trim() || isSubmitting}
                    >
                        {isSubmitting ? '등록 중...' : '등록'}
                    </SubmitButton>
                }
                types="nones"
            />

            <QuestionMakeContent>
                <InputSection>
                    <TitleInput
                        placeholder="질문"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        maxLength={100}
                    />
                    <CharacterCount>{title.length}/100</CharacterCount>
                </InputSection>

                <Divider />

                <ContentSection>
                    <ContentTextarea
                        placeholder="상세 내용을 입력하세요."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        maxLength={1000}
                    />
                    <CharacterCount>{content.length}/1000</CharacterCount>
                </ContentSection>
            </QuestionMakeContent>
            {modalopen &&
            <MakeCancel setIsOpen={setmodalopen} isOpen={modalopen}/>
            }

            {isCompleteOpen && (
                      <CompleteVote
                        isOpen={isCompleteOpen}
                        setIsOpen={setIsCompleteOpen}
                        text1='질문작성을'
                        text2='했어요!'
                        text3='완료'
                        subtext='마이페이지에서 지금까지 한 게시판 질문 내역을 확인할 수 있어요'
                        img='/svg/Completevote.svg'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onfunciton={handleComplete}
            
                      />
                    )}


        </QuestionMakeLayout>
    )
}

export default QuestionMake;

const QuestionMakeLayout = styled.div`
    max-width: 600px;
    width: 100%;
    background-color: ${color.white};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HeaderTitle = styled.h1`
    ${font.H1};
    color: ${color.black};
    margin: 0;
    font-weight: 600;
`;

const BackButton = styled.img`
    cursor: pointer;
    transition: opacity 0.2s ease;
    
    &:hover {
        opacity: 0.7;
    }
`;

const QuestionMakeContent = styled.div`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    background-color: ${color.white};
`;

const InputSection = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const TitleInput = styled.input`
    width: 100%;
    padding: 15px 0;
    border: none;
    outline: none;
    background-color: transparent;
    ${font.H1};
    color: ${color.black};
    font-weight: 600;
    
    &::placeholder {
        color: ${color.gray300};
        font-weight: 400;
    }
`;

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${color.gray100};
`;

const ContentSection = styled.div`
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const ContentTextarea = styled.textarea`
    width: 100%;
    flex: 1;
    min-height: 300px;
    border: none;
    outline: none;
    background-color: transparent;
    resize: none;
    ${font.H2};
    color: ${color.black};
    line-height: 1.6;
    font-family: inherit;
    
    &::placeholder {
        color: ${color.gray300};
    }
`;

const CharacterCount = styled.span`
    ${font.H4};
    color: ${color.gray400};
    text-align: right;
    margin-top: auto;
`;

const SubmitButton = styled.button<SubmitButtonProps>`
    padding: 8px 16px;
    background: ${props => props.disabled ? color.gray200 : color.primary};
    color: ${color.white};
    border: none;
    border-radius: 20px;
    ${font.H3};
    font-weight: 600;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    transition: all 0.2s ease;
    min-width: 60px;
    
    &:hover {
        background: ${props => props.disabled ? color.gray200 : '#e67700'};
    }
`;
