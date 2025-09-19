import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Image from 'next/image';
type Props = {
  title: string,
  catogory: string,
  count: number,
  id: string
}

const GuideBlock = ({ title, catogory, count, id }: Props) => {
  const renderImage = () => {
    switch (catogory) {
      case "학교생활":
        return <Image src="/svg/School.svg" alt="food" width={35} height={35} />;
      case "유머":
        return <Image src="/svg/Humors.svg" alt="travel" width={35} height={35} />;
      case "기숙사":
        return <Image src="/svg/Domitorys.svg" alt="tech" width={35} height={35} />;
      default:
        return null;
    }
  }


  const Router = useRouter();
  const path = usePathname();
  return (
    <VoteBlockLayout onClick={() => { Router.push(`${path}/${id}`) }}>
      <VoteBlocks>
        {renderImage()}
        <InfomationsBlocks>
          <Title>{title}</Title>
          <InfomationsBlock>

            <Infomations>
              <Catogorys>{catogory}</Catogorys>
              <ViewBlock>
                <Image src="/svg/Bookmark.svg" height={12} width={12} alt="북마크" />
                <Views> {count}</Views>
              </ViewBlock>

            </Infomations>
          </InfomationsBlock>
        </InfomationsBlocks>
      </VoteBlocks>
    </VoteBlockLayout>
  );
}

export default GuideBlock;

const VoteBlockLayout = styled.div`
    max-width : 600px;
    width : 100%;
    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction : column;
    gap : 10px;
    background-color : ${color.white};
    border : 1.5px solid ${color.gray50};
        border-radius : 10px;

`

const VoteBlocks = styled.div`
    width : 100%;
    height : 80px;

    display : flex;
    justify-content : start;
    align-items : center;
    gap : 20px;
    padding-left :20px;

`

const Title = styled.p`
  ${font.H1};
`

const Infomations = styled.div`
  display : flex;
  flex-direction : row;
  align-items : center;
  gap : 10px;

`

const InfomationsBlock = styled.div`
  display : flex;
  flex-direction : row;
  align-items : center;
  width : 90%;
  justify-content: space-between;

  
`

const InfomationsBlocks = styled.div`
  display : flex;
  flex-direction : column;
  height : 100%;
  justify-content : center;
  width : 100%;
`

const Catogorys = styled.p`
  font-size : 9px;
  color : ${color.gray600};
  line-height : 100%;
`

const Views = styled.p`
  font-size : 9px;
    color : ${color.gray600};
`

const ViewBlock = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
`


const States = styled.p`
  font-size : 10px;
    color : ${color.gray500};
`