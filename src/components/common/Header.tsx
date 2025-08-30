'use client'

import styled from '@emotion/styled'
import color from '@/packages/design-system/src/color';

type Props = {
  LeftItem?: React.ReactNode;
  RightItem?: React.ReactNode;
  CenterItem?: React.ReactNode;
  showInput?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

const Header = ({ LeftItem, RightItem, CenterItem, showInput = false, inputProps }: Props) => {
  return (
    <HeaderPageLayout>
      <HeaderItem>
        <LeftSection>
          {LeftItem}
        </LeftSection>
        <CenterSection>
          {CenterItem}
          {showInput && <StyledInput {...inputProps} />}
        </CenterSection>
        <RightSection>
          {RightItem}
        </RightSection>
      </HeaderItem>
    </HeaderPageLayout>
  );
};

export default Header;

const HeaderPageLayout = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 1000;
  background-color: ${color.white};
  margin-top: 10px;
  
`;

const HeaderItem = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  gap: 16px;
`;

const LeftSection = styled.div`
  justify-self: start;
`;

const CenterSection = styled.div`
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  
  p {
    text-align: center;
    margin: 0;
  }
`;

const RightSection = styled.div`
  justify-self: end;
`;

const StyledInput = styled.input`
  width: 100%;
  max-width: 400px;
  background-color: ${color.gray50}; 
  border: none;
  padding: 10px 16px;
  border-radius: 16px;
  outline: none;
  text-align: left; 
  color: ${color.black};
  
  &::placeholder {
    color: ${color.gray500};
    text-align: left;
  }
  
  &:focus {
    outline: none;
  }
`;
