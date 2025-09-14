"use client";

import styled from "@emotion/styled";
import IconProfile from "../../../../public/svg/profile";
import React from "react";
import color from '@/packages/design-system/src/color';
import font from '@/packages/design-system/src/font';

const imgFrame = "http://localhost:3845/assets/5e6a8bf9c10e5e7d087dbd3eaed71c9a65468e87.svg";
const imgClose = "http://localhost:3845/assets/0b87515fe0d3d4f29893996b70f2dec4c2c7d00b.svg";
const imgFrame1 = "http://localhost:3845/assets/2dd781a4b0c61f63d7185f6647d45cec6a210666.svg";
const imgFrame2 = "http://localhost:3845/assets/82a67a15b272414210f229b2722f154504afce9f.svg";

const ProfileInfo = () => {
    const u = {
        auth: "STUDENT" ,
        name: "박댁댁",
        email: "fake_bsm_email@bssm.hs.kr",
    };

  return (
    <StyledProfileInfo>
      <ProfileInfoHeader>
        <ProfileInfoHeaderFrame src={imgFrame} alt="header-frame" />
        <ProfileInfoHeaderControls>
          <img src={imgClose} alt="close" />
        </ProfileInfoHeaderControls>
      </ProfileInfoHeader>

      <ProfileInfoMain>
        <ProfileInfoLeft>
          <ProfileInfoAvatar>
            <IconProfile width={64} height={64} />
          </ProfileInfoAvatar>
        </ProfileInfoLeft>

        <ProfileInfoRight>
          <ProfileInfoNameRow>
            <ProfileInfoName>{u.name}</ProfileInfoName>
            <ProfileInfoBadge data-auth={u.auth}>{u.auth === "STUDENT" ? "👩‍💻 재학생" : "👀 방문자"}</ProfileInfoBadge>
          </ProfileInfoNameRow>
          <ProfileInfoEmail>{u.email}</ProfileInfoEmail>

          <ProfileInfoStats>
            <ProfileInfoStatBox>
              <ProfileInfoStatText>저장한 게시물 <ProfileInfoStatNumber>0</ProfileInfoStatNumber></ProfileInfoStatText>
            </ProfileInfoStatBox>
            <ProfileInfoStatBox>
              <ProfileInfoStatText>저장한 질문 <ProfileInfoStatNumber>0</ProfileInfoStatNumber></ProfileInfoStatText>
            </ProfileInfoStatBox>
          </ProfileInfoStats>
        </ProfileInfoRight>
      </ProfileInfoMain>

      <ProfileInfoList>
        <ProfileInfoListSection title="기록">
          <ProfileInfoListItem>내가 만든 투표</ProfileInfoListItem>
          {u.auth === "STUDENT" ? (
            <>
              <ProfileInfoDivider />
              <ProfileInfoListItem>투표 응답 내역</ProfileInfoListItem>
            </>
          ) : null}
          <ProfileInfoDivider />
          <ProfileInfoListItem>내가 만든 투표</ProfileInfoListItem>
        </ProfileInfoListSection>
        <ProfileInfoListSection title="설정">
          <ProfileInfoListItem>계정정보</ProfileInfoListItem>
          <ProfileInfoDivider />
        </ProfileInfoListSection>
        <ProfileInfoListSection title="도움말&지원">
          <ProfileInfoListItem>서비스 소개</ProfileInfoListItem>
          <ProfileInfoDivider />
          <ProfileInfoListItem>문의하기</ProfileInfoListItem>
          <ProfileInfoDivider />
        </ProfileInfoListSection>
      </ProfileInfoList>
  </StyledProfileInfo>
    );
};

export default ProfileInfo;

const StyledProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: ${color.white};
`;

const ProfileInfoHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: #fdfffc;
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;
  margin: 0 auto;
`;

const ProfileInfoHeaderFrame = styled.img`
  width: 24px;
  height: 24px;
`;

const ProfileInfoHeaderControls = styled.div`
  display: flex;
  gap: 12px;
  img { display: block; width: 24px; height: 24px; }
`;

const ProfileInfoMain = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px 20px;
  align-items: center;
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;
  margin: 0 auto;
`;

const ProfileInfoLeft = styled.div``;

const ProfileInfoAvatar = styled.div`
  width: 88px;
  height: 88px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #0e2233;
  svg { display: block; }
`;

const ProfileInfoRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
`;

const ProfileInfoNameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
`;

const ProfileInfoName = styled.div`
  ${font.D1}
  color: ${color.black};
  line-height: 1.2;
`;

const ProfileInfoBadge = styled.span`
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  border-radius: 999px;
  background: ${color.gray100};
  color: ${color.black};
  &[data-auth="VISITOR"] {
    background: #f8f0ff;
    color: #6b36c8;
  }
`;

const ProfileInfoEmail = styled.div`
  ${font.H2}
  color: ${color.gray500};
`;

const ProfileInfoStats = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

const ProfileInfoStatBox = styled.div`
  background: #f0f0f0;
  border-radius: 8px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
`;

const ProfileInfoStatText = styled.div`
  ${font.H3}
  color: ${color.black};
`;

const ProfileInfoStatNumber = styled.span`
  color: ${color.primary};
  margin-left: 6px;
  font-weight: 800;
`;

const ProfileInfoList = styled.div`
  padding: 12px 0 40px 0;
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;
  margin: 0 auto;
`;
const ProfileInfoListSection = (props: { title?: string; children?: React.ReactNode }) => {
  return <div>{props.children}</div>;
};

const ProfileInfoListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  font-weight: 600;
  color: #011627;
`;
const ProfileInfoDivider = styled.div`
  height: 1px;
  background: #f0f0f0;
`;
