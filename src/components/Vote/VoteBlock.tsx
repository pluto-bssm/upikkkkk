import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";
import { Vote } from "@/types/api";
import { useRouter } from "next/navigation";
import { format, isPast, differenceInDays } from "date-fns";

type Props = {
  vote: Vote;
};

const VoteBlock = ({ vote }: Props) => {
  const router = useRouter();

  if (!vote) return null;

  if (isPast(new Date(vote.finishedAt))) {
    return null;
  }

  const getStateText = () => {
    const finishDate = new Date(vote.finishedAt);
    const today = new Date();
    const daysLeft = differenceInDays(finishDate, today);

    return {
      text:
        daysLeft <= 0
          ? "마감된 투표"
          : `${format(finishDate, "yyyy-MM-dd")}에 마감되는 투표`,
      isUrgent: daysLeft <= 3 && daysLeft > 0,
    };
  };

  const { text /*, isUrgent*/ } = getStateText();

  return (
    <VoteBlocks onClick={() => router.push(`/Vote/${vote.id}`)}>
      <VoteTitle>{vote.title}</VoteTitle>
      <VoteInfo>
        <Category>{vote.category}</Category>
        <Views>참여자 {vote.totalResponses}명</Views>
      </VoteInfo>
      <VoteState>{text}</VoteState>
    </VoteBlocks>
  );
};

export default VoteBlock;

/* ===================== Emotion Styles (feat#8) ===================== */

const VoteBlocks = styled.div`
  width: 90%;
  min-height: 120px;
  background-color: ${color.white};
  border: 1.5px solid ${color.gray50};
  border-radius: 10px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const VoteTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  color: ${color.black};
`;

const VoteInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Category = styled.span`
  background-color: ${color.gray100};
  color: ${color.primary};
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  margin-right: 12px;
`;

const Views = styled.span`
  color: ${color.gray500};
  font-size: 14px;
`;

const VoteState = styled.div`
  color: ${color.gray600};
  font-size: 13px;
  font-style: italic;
`;