import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import { ChangeEvent } from 'react';

type Props = {
  placeholders: string;
  value?: string;
  onChange?: (value: string) => void;
};

const HeaderInputs = ({ placeholders, value, onChange }: Props) => {

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }

  };

  return (
    <HeaderInputsPageLayout>
      <HeaderInput type="text" placeholder={placeholders} value={value} onChange={handleChange} />
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
  padding: 10px 24px;
  border-radius: 16px;
  outline: none;
  text-align: left; 
  color : ${color.black};
  width : 80vw;
  max-width : 500px;
  ::placeholder {
    color: ${color.gray500};
    text-align: left;
  }
`;