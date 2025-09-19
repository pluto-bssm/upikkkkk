import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";
import { Vote } from "@/types/api";
import { useRouter } from "next/navigation";
import { format, isPast, differenceInDays } from "date-fns";

type Props = {
    vote: Vote;
}

const VoteBlock = ({ vote }: Props) => {
    const router = useRouter();

    if (!vote) return null;

    // 마감된 투표는 렌더링하지 않음
    if (isPast(new Date(vote.finishedAt))) {
        return null;
    }
    
    const renderImage = () => {
        if (!vote.category) return null;

        switch (vote.category) {
            case "학교생활":
                return <img src="/svg/School.svg" alt="school" width={35} height={35} />;
            case "유머":
                return <img src="/svg/Humors.svg" alt="humor" width={35} height={35} />;
            case "기숙사":
                return <img src="/svg/Domitorys.svg" alt="dormitory" width={35} height={35} />;
            default:
                return null;
        }
    }
    
    const getStateText = () => {
        const finishDate = new Date(vote.finishedAt);
        const today = new Date();
        const daysLeft = differenceInDays(finishDate, today); 

        return {
            text: `${format(finishDate, "yyyy-MM-dd")}에 마감되는 투표`,
            isUrgent: daysLeft <= 3 && daysLeft > 0 
        };
    };

    const { text, isUrgent } = getStateText();
    
    return (
        <VoteBlockLayout>
            <VoteBlocks onClick={() => router.push(`/vote/${vote.id}`)}>
                {renderImage()}
                <InfomationsBlocks>
                    <Title>{vote.title}</Title>
                    <InfomationsBlock>
                        <Infomations>
                            <Catogorys>{vote.category}</Catogorys>
                            <ViewBlock>
                                <img src="/svg/Views.svg" height={14} width={14} />
                                <Views>{vote.totalResponses}</Views>
                            </ViewBlock>
                        </Infomations>
                        <States urgent={isUrgent}>{text}</States>
                    </InfomationsBlock>
                </InfomationsBlocks>
            </VoteBlocks>
        </VoteBlockLayout>
    );
};

export default VoteBlock;

const VoteBlockLayout = styled.div`
    max-width: 600px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    background-color: ${color.white};
    border: 1.5px solid ${color.gray50};
    border-radius: 10px;
    cursor: pointer;
`

const VoteBlocks = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 20px;
    padding-left: 20px;
`

const Title = styled.p`
    ${font.H1};
`

const Infomations = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`

const InfomationsBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 90%;
    justify-content: space-between;
`

const InfomationsBlocks = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    width: 100%;
    gap : 14px;
`

const Catogorys = styled.p`
    font-size: 9px;
    color: ${color.gray600};
    line-height: 100%;
`

const Views = styled.p`
    font-size: 9px;
    color: ${color.gray600};
`

const ViewBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const States = styled.p<{ urgent?: boolean }>`
    font-size: 10px;
    color: ${({ urgent }) => (urgent ? "#ff4444" : color.gray500)};
    font-weight: ${({ urgent }) => (urgent ? "600" : "normal")};
`
