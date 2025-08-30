'use client'

import styled from '@emotion/styled'
import color from '@/app/packages/design-system/src/color';

type Props = {
  LeftItem?: React.ReactNode;
  RightItem?: React.ReactNode;
};

const Header = ({ LeftItem, RightItem }: Props) => {


  return (
    <HeaderPageLayout>
      <HeaderItem>
        <div>
          {LeftItem}
        </div>
        <div>
          {RightItem}
        </div>
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
  top : 0px;
  z-index: 1000;
  background-color: ${color.white};
`;

const HeaderItem = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;

`;