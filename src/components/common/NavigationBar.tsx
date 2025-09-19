'use client'

import styled from '@emotion/styled'
import color from '@/packages/design-system/src/color';
import { useRouter } from 'next/navigation';
import Image from 'next/image';




const NavigationBar = () => {

  const router = useRouter();

  return (
    <NavigationPageLayout>
      <NavigationItem>
        <Image src='/svg/Home.svg' alt="홈" width={40} height={40} onClick={() => { router.push("/main") }} style={{ cursor: 'pointer' }} />
        <Image src='/svg/Vote.svg' alt="투표" width={40} height={40} onClick={() => { router.push("/vote") }} style={{ cursor: 'pointer' }} />
        <Image src='/svg/Guide.svg' alt="가이드" width={40} height={40} onClick={() => { router.push("/guide") }} style={{ cursor: 'pointer' }} />
        <Image src='/svg/Dashboard.svg' alt="대시보드" width={40} height={40} onClick={() => { router.push("/dashboard") }} style={{ cursor: 'pointer' }} />
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
  height: 56px;
  z-index: 1000;
  background-color: ${color.white};
`;

const NavigationItem = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;

`;