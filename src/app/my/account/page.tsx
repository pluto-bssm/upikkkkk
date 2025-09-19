"use client";

import React from "react";
import ProfileInfo from "@/components/my/ProfileInfo/ProfileInfo";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";

const AccountInfoPage = (): React.ReactElement => {
  return (
    <MainPageLayout>
      <ProfileInfo />
    </MainPageLayout>
  );
};

export default AccountInfoPage;

const MainPageLayout = styled.div`
  display :flex;
  flex-direction : column;
  align-items : center;
  max-width : 600px;
  width : 100%;
  min-height: 100vh;
  background-color : ${color.white};
`