import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";

type Props = {
  placeholders: string;
};

const HeaderInputs = ({ placeholders }: Props) => {
  return (
    <HeaderInputsPageLayout>
      <HeaderInput type="text" placeholder={placeholders} />
    </HeaderInputsPageLayout>
  );
};

export default HeaderInputs;

const HeaderInputsPageLayout = styled.div`
  display: flex;
`;

const HeaderInput = styled.input`
  background-color: ${color.gray50}; 
  border: none;
  padding: 10px 16px;
  border-radius: 16px;
  outline: none;
  width: 500px;
  text-align: left; 
  color : ${color.black};
  
  ::placeholder {
    color: ${color.gray500};
    text-align: left;
  }
`;