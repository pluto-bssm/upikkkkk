import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import { Vote } from "@/types/api";
import { useRouter } from "next/navigation";
import { format, isPast } from "date-fns";

type Props = {
    vote: Vote;
}

const VoteBlock = ({ vote }: Props) => {
    const router = useRouter();
    
    // 투표 상태에 따른 텍스트 표시
    const getStateText = () => {
        if (isPast(new Date(vote.finishedAt))) {
            return "마감된 투표";
        }
        return `${format(new Date(vote.finishedAt), "yyyy-MM-dd")}에 마감되는 투표`;
    };
    
    return(
        <VoteBlockLayout>
            <VoteBlocks onClick={() => router.push(`/Vote/${vote.id}`)}>
                <VoteTitle>{vote.title}</VoteTitle>
                <VoteInfo>
                    <Category>{vote.category}</Category>
                    <Views>참여자 수: {vote.totalResponses}명</Views>
                </VoteInfo>
                <VoteState>{getStateText()}</VoteState>
            </VoteBlocks>
        </VoteBlockLayout>
    )
}

export default VoteBlock;

const VoteBlockLayout = styled.div`
    margin-top : 100px;
    max-width : 600px;
    width : 100%;
    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction : column;
    gap : 10px;

`

const VoteBlocks = styled.div`
    width : 90%;
    height : 100px;
    background-color : ${color.white};
    border : 1.5px solid ${color.gray50};
    border-radius : 10px;

`