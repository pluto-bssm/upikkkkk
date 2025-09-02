import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";

type Props = {
    title : string,
    catogory : string,
    views : string,
    state : string
}

const VoteBlock = ({ title, catogory, views, state } : Props) => {
  const renderImage = () => {
    switch (catogory) {
      case "학교생활":
        return <img src="svg/School.svg" alt="food" width={40} height={40} />;
      case "유머":
        return <img src="svg/Humors.svg" alt="travel" width={40} height={40} />;
      case "기숙사":
        return <img src="svg/Domitorys.svg" alt="tech" width={40} height={40} />;
      default:
        return null;
    }
  }

  return (
    <VoteBlockLayout>
      <VoteBlocks>
        {renderImage()}
          <InfomationsBlocks>
          <Title>{title}</Title>
            <InfomationsBlock>
              <Infomations>
              <Catogorys>{catogory}</Catogorys>
                <ViewBlock>
                  <img src="svg/Views.svg" height={16} width={16}/>
                  <Views> {views}</Views>
                </ViewBlock>
              
              </Infomations>
            <States>{state}</States>
            </InfomationsBlock>
          </InfomationsBlocks>
      </VoteBlocks>
    </VoteBlockLayout>
  );
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
    display : flex;
    justify-content : start;
    align-items : center;
    gap : 20px;
    padding-left :20px;

`

const Title = styled.p`
  ${font.D2};
`

const Infomations = styled.div`
  display : flex;
  flex-direction : row;
  align-items : center;
  gap : 16px;
`

const InfomationsBlock = styled.div`
  display : flex;
  flex-direction : row;
  align-items : center;

  gap : 200px;
`

const InfomationsBlocks = styled.div`
  display : flex;
  flex-direction : column;
  height : 100%;
  justify-content : center;
  gap : 10px;
`

const Catogorys = styled.p`
  font-size : 12px;
  color : ${color.gray600};
`

const Views = styled.p`
  font-size : 12px;
    color : ${color.gray600};
`

const ViewBlock = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
`


const States = styled.p`
  font-size : 12px;
    color : ${color.gray600};
`