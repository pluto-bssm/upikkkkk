import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
type Props = {
    title : string,
    catogory : string,
    views : string,
    state : string
}

const VoteBlock = ({title,catogory,views,state} : Props) => {
    return(
        <VoteBlockLayout>
            <VoteBlocks>
                {title}
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