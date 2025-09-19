"use client";

import React from "react";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/common/Header";
import HeaderItemsBox from "@/components/Header/HeaderItemBox";
import { useUser } from "@/hooks/useUser";

const ProfileInfo = (): React.ReactElement => {
  const { user, loading, error } = useUser();
  
  const studentId = user?.email ? user.email.split('@')[0].replace(/[^0-9]/g, '') : "0000";
  const status = "재학생";

  if (loading) {
    return (
      <StyledProfileInfo data-name="계정정보-로딩중">
        <Header
          LeftItem={
            <Link href="/my">
              <Image src="/svg/Back.svg" alt="뒤로가기" width={24} height={24} />
            </Link>
          }
          CenterItem={<HeaderItemsBox type="infomation" />}
          types="None"
        />
        <LoadingContainer>사용자 정보를 불러오는 중...</LoadingContainer>
      </StyledProfileInfo>
    );
  }

  if (error || !user) {
    return (
      <StyledProfileInfo data-name="계정정보-오류">
        <Header
          LeftItem={
            <Link href="/my">
              <Image src="/svg/Back.svg" alt="뒤로가기" width={24} height={24} />
            </Link>
          }
          CenterItem={<HeaderItemsBox type="infomation" />}
          types="None"
        />
        <ErrorContainer>사용자 정보를 불러올 수 없습니다</ErrorContainer>
      </StyledProfileInfo>
    );
  }
  
  return (
    <StyledProfileInfo data-name="계정정보-재학생">
      <Header
        LeftItem={
          <Link href="/my">
            <Image src="/svg/Back.svg" alt="뒤로가기" width={24} height={24} />
          </Link>
        }
        CenterItem={<HeaderItemsBox type="infomation" />}
        types="None"
      />

      <StyledContent>
        <InfoSection>
          <InfoLabel>이름</InfoLabel>
          <InfoValue>{user.name}</InfoValue>
        </InfoSection>

        <InfoSection>
          <InfoLabel>학번</InfoLabel>
          <InfoValue>{studentId}</InfoValue>
        </InfoSection>

        <InfoSection>
          <InfoLabel>자격</InfoLabel>
          <InfoValue>{status}</InfoValue>
        </InfoSection>

        <InfoSection>
          <InfoLabel>이메일</InfoLabel>
          <InfoValue>{user.email}</InfoValue>
        </InfoSection>
      </StyledContent>

      <StyledFooter>
        <FooterActions>
          <FooterAction>로그아웃</FooterAction>
          <FooterDivider>|</FooterDivider>
          <FooterAction>탈퇴하기</FooterAction>
        </FooterActions>
      </StyledFooter>
    </StyledProfileInfo>
  );
};

const StyledProfileInfo = styled.div`
  background: ${color.white};
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;



const StyledContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InfoLabel = styled.div`
  ${font.H6};
  color: ${color.gray400};
`;

const InfoValue = styled.div`
  ${font.H3};
  color: ${color.black};
`;

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 20px;
`;

const FooterActions = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const FooterAction = styled.button`
  ${font.p1};
  color: ${color.gray400};
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const FooterDivider = styled.span`
  color: ${color.gray400};
  ${font.p1};
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: ${color.gray500};
  ${font.p1};
  margin-top: 80px;
`;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: ${color.accent};
  ${font.p1};
  margin-top: 80px;
`;

export default ProfileInfo;
