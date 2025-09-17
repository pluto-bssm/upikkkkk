import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";
import { Vote } from "@/types/api";
import { useRouter } from "next/navigation";
import { format, isPast } from "date-fns";

type Props = {
    vote: Vote;
}

const VoteBlock = ({ vote }: Props) => {
    const router = useRouter();
    
    const renderImage = () => {
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
        if (isPast(new Date(vote.finishedAt))) {
            return "마감된 투표";
        }
        return `${format(new Date(vote.finishedAt), "yyyy-MM-dd")}에 마감되는 투표`;
    };
    
    return (
        <VoteBlockLayout>
            <VoteBlocks onClick={() => router.push(`/Vote/${vote.id}`)}>
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
                        <States>{getStateText()}</States>
                    </InfomationsBlock>
                </InfomationsBlocks>
            </VoteBlocks>
        </VoteBlockLayout>
    )
}

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
    ${font.D4};
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

const States = styled.p`
    font-size: 10px;
    color: ${color.gray500};
`
