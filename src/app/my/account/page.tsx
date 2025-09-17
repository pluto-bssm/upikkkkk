"use client";

import React from "react";
import ProfileInfo from "@/components/my/ProfileInfo/ProfileInfo";
import { useUser } from "@/stores/user/user";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";

const AccountInfoPage = (): React.ReactElement => {
  const { user } = useUser();

  return (
    <MainPageLayout>
      <ProfileInfo
        name={user?.name}
        studentId={user?.studentId}
        status={user?.status}
        email={user?.email}
      />
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