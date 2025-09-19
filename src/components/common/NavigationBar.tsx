'use client'

import styled from '@emotion/styled'
import color from '@/packages/design-system/src/color';
import { useRouter } from 'next/navigation';




const NavigationBar = () => {

  const router = useRouter();

  return (
    <NavigationPageLayout>
      <NavigationItem>
        <img src='/svg/Home.svg' width={40} height={40} onClick={() => { router.push("/") }} />
        <img src='/svg/Vote.svg' width={40} height={40} onClick={() => { router.push("/vote") }} />
        <img src='/svg/Guide.svg' width={40} height={40} onClick={() => { router.push("/Guide") }} />
        <img src='/svg/Dashboard.svg' width={40} height={40} onClick={() => { router.push("/dashboard") }} />
      </NavigationItem>
    </NavigationPageLayout>
  );
};

export default NavigationBar;

const NavigationPageLayout = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom : 0px;
  max-height : 50px;
  height : 100%;
  z-index: 1000;
  background-color: ${color.white};
`;

const NavigationItem = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;

`;