import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import { useRouter } from "next/navigation";

const VoteMakeButton = () => {

    const router = useRouter();

    return(
        <VoteMakeButtonLayout onClick={() => {router.push("/VoteMake")}}>
            <img src="/svg/VotemakeButton.svg"  height={30} width={30}/>        
        </VoteMakeButtonLayout>
    )

}

export default VoteMakeButton;

const VoteMakeButtonLayout = styled.div`
    aspect-ratio: 1;
    background-color : ${color.primary};
    height : 42px;
    width : 42px;
    display : flex;
    align-items : center;
    justify-content : center;
    border-radius : 50%;

`