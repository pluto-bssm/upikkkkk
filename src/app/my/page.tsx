"use client";

import React from 'react';
import Profile from '@/components/my/Profile/Profile';
import Header from '@/components/common/Header';
import HeaderItemsBox from '@/components/Header/HeaderItemBox';
import styled from '@emotion/styled';
import color from '@/packages/design-system/src/color';
type P = {
    auth?: 'STUDENT' | 'VISITOR';
    className?: string;
    children?: React.ReactNode;
};

const MyPage = ({ auth, className, children }: P) => {
    return (
        <>
        <MainPageLayout>
                    <Header LeftItem={
        <img
        src="/svg/Logo.svg"
        width={50}
        height={50}
         />
      } 
        RightItem={<HeaderItemsBox type={'main'} />}
        types='None'/>
            <Profile/>
        </MainPageLayout>
        </>
    );
};

export default MyPage;

const MainPageLayout = styled.div`
  display :flex;
  flex-direction : column;
  align-items : center;
  max-width : 600px;
  width : 100%;
  min-height: 100vh;
  background-color : ${color.white};
`