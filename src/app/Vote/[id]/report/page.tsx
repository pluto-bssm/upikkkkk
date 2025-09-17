'use client'

import styled from "@emotion/styled";
import { useState } from "react";
import Header from "@/components/common/Header";
import HeaderItemsBox from "@/components/Header/HeaderItemBox";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";
import ReportCancel from "@/components/Modal/ReportCancel";
import { useRouter } from "next/navigation";
import CompleteVote from "@/components/Modal/Complete";


interface ReasonOptionProps {
    selected: boolean;
}

interface SubmitButtonProps {
    disabled: boolean;
}

const Report = () => {
    const [selectedReason, setSelectedReason] = useState('');
    const [detailContent, setDetailContent] = useState('');

    const [modalopen, setmodalopen] = useState(false);

    const [completemodal, setCompleteModal] = useState(false);

    const router = useRouter();

    const CompleteReport = () => {
        router.replace("/")
    }


    const reportReasons = [
        '유해한 내용을 포함하고 있어요',
        '명예훼손 또는 저작권이 침해되었어요',
        '욕설/생명경시/현혹 표현이 사용되었어요',
        '기타'
    ];

    const handleReasonSelect = (reason: string) => {
        setSelectedReason(reason);
    };

    const handleSubmit = () => {
        if (!selectedReason) {
            alert('신고 사유를 선택해주세요.');
            return;
        }
        if (!detailContent.trim()) {
            alert('상세 내용을 입력해주세요.');
            return;
        }
        setCompleteModal(true);
    };

    return (
        <ReportLayout>
            <Header
                LeftItem={
                    <img
                        src="/svg/Back.svg"
                        width={20}
                        height={50}
                        onClick={() => { setmodalopen(true) }}
                    />
                }
                CenterItem={
                    <HeaderItemsBox type={'reportdis'} />
                }
                types="nones"
            />

            <ReportContent>
                <ReportSection>
                    <SectionTitle>신고할 내용</SectionTitle>
                    <PostTitle>투표 신고하기</PostTitle>
                </ReportSection>

                <ReportSection>
                    <SectionLabel>
                        신고 사유 선택 <RequiredMark>*</RequiredMark>
                    </SectionLabel>
                    <ReasonList>
                        {reportReasons.map((reason, index) => (
                            <ReasonOption
                                key={index}
                                selected={selectedReason === reason}
                                onClick={() => handleReasonSelect(reason)}
                            >
                                {reason}
                            </ReasonOption>
                        ))}
                    </ReasonList>
                </ReportSection>
                <ReportContentSection>
                    <ReportSection>
                        <SectionLabel>
                            상세 내용 <RequiredMark>*</RequiredMark>
                        </SectionLabel>
                        <DetailTextarea
                            placeholder="신고 사유에 대해서 더 자세히 설명해주세요"
                            value={detailContent}
                            onChange={(e) => setDetailContent(e.target.value)}
                            maxLength={500}
                        />
                        <CharacterCount>500자 이내로 입력해주세요</CharacterCount>
                    </ReportSection>

                    <SubmitButton
                        onClick={handleSubmit}
                        disabled={!selectedReason || !detailContent.trim()}
                    >
                        신고 접수하기
                    </SubmitButton>
                </ReportContentSection>
            </ReportContent>

            {modalopen && <ReportCancel isOpen={modalopen} setIsOpen={setmodalopen} />}
            {completemodal && <CompleteVote text1="신고가" text2="으로 접수됐어요" text3="성공적" subtext="지속적으로 정상적인 투표를 신고하는 경우
제재의 대상이 될 수 있어요" img="/svg/CompleteVote.svg" onfunciton={CompleteReport} />}
        </ReportLayout>
    )
}

export default Report;

const ReportLayout = styled.div`
    max-width: 600px;
    width: 100%;
    background-color: ${color.white};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items : center;
    padding-bottom : 30px;
`;

const ReportContent = styled.div`
    width: 90%;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top : 100px;

`;

const ReportSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const SectionTitle = styled.h2`
    font-size: 14px;
    color: #666;
    font-weight: 400;
    margin: 0;
`;

const PostTitle = styled.h1`
    font-size: 24px;
    font-weight: 700;
    color: #000;
    margin: 0;
`;

const SectionLabel = styled.label`
    font-size: 16px;
    font-weight: 500;
    color: #000;
    display: flex;
    align-items: center;
    gap: 4px;
`;

const RequiredMark = styled.span`
    color: #ff4757;
    font-size: 16px;
`;

const ReasonList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const ReportContentSection = styled.div`
    margin-top:30px;
`;

const ReasonOption = styled.button<ReasonOptionProps>`
    padding: 20px 20px;
    border: 1px solid ${props => props.selected ? '#FF8A00' : color.gray100};
    border-radius: 16px;
    background-color: ${props => props.selected ? '#FFF5E6' : '#fff'};
    color: ${props => props.selected ? color.gray600 : color.gray600};
    ${font.H1};
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease;
    outline : none;

    &:hover {
        border-color: #FF8A00;
    }
`;

const DetailTextarea = styled.textarea`
    min-height: 130px;
    padding: 20px;
    border: 1px solid #E5E5E5;
    border-radius: 20px;
    font-size: 14px;
    line-height: 1.5;
    resize: none;
    font-family: inherit;
    outline : none;
    background-color : ${color.white};
    &::placeholder {
        color: #999;
    }
    color : ${color.black};
`;

const CharacterCount = styled.p`
    ${font.H3};
    color: #999;
    text-align: left;
    margin: 0;
`;

const SubmitButton = styled.button<SubmitButtonProps>`
    margin-top : 40px;
    width: 100%;
    padding: 20px;
    background: ${props => props.disabled ? color.gray200 : color.primary};
    color: ${props => props.disabled ? '#FFF' : '#fff'};
    border: none;
    border-radius: 40px;
    font-size: 20px;
    font-weight: 600;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    transition: all 0.2s ease;
`;