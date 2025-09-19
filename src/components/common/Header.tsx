'use client'

import styled from '@emotion/styled'
import color from '@/packages/design-system/src/color';
import HeaderNavigaionBar from './HeaderNavigationBar';

type Props = {
  LeftItem?: React.ReactNode;
  RightItem?: React.ReactNode;
  CenterItem?: React.ReactNode;
  showInput?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  types: string;
  onOptionClick?: () => void;

  // ✅ 추가된 props
  activeIdx?: number;
  setActiveIdx?: (idx: number) => void;
};

const Header = ({ 
  LeftItem, 
  RightItem, 
  CenterItem, 
  showInput = false, 
  types, 
  inputProps, 
  onOptionClick,
  activeIdx,
  setActiveIdx
}: Props) => {
  return (
    <HeaderPageLayout>
      <HeaderBarSection>
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
      </HeaderBarSection>
      
      {types !== "Nones" && (
        <NavigationBarSection>
          <HeaderNavigaionBar 
            type={types}  
            onOptionClick={onOptionClick}
            activeIdx={activeIdx}
            setActiveIdx={setActiveIdx}
          />
        </NavigationBarSection>
      )}

    </HeaderPageLayout>
  );
};

export default Header;

const HeaderBarSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const NavigationBarSection = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
`

const HeaderPageLayout = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction : column;
  position: fixed;
  z-index: 1000;
  background-color: ${color.white};
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
`
