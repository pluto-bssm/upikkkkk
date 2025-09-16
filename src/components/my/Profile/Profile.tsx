"use client";

import React from "react";
import styled from "@emotion/styled";
import color from '@/packages/design-system/src/color';
import font from '@/packages/design-system/src/font';
import IconProfile from "../../../../public/svg/profile";
import Link from "next/link";
import { useRouter } from "next/navigation";

// 이미지 에셋
const imgBack = "http://localhost:3845/assets/5e6a8bf9c10e5e7d087dbd3eaed71c9a65468e87.svg";
const imgClose = "http://localhost:3845/assets/0b87515fe0d3d4f29893996b70f2dec4c2c7d00b.svg";
const imgArrow = "http://localhost:3845/assets/82a67a15b272414210f229b2722f154504afce9f.svg";

const Profile = () => {
  const router = useRouter();
  const user = {
    auth: "STUDENT",
    name: "박땡땡",
    email: "fake_bsm_email@bssm.hs.kr",
  };

  return (
    <ProfileContainer>
      {/* 헤더 */}
      <Header>
        <BackButton src={imgBack} alt="뒤로 가기" />
        <CloseButton src={imgClose} alt="닫기" />
      </Header>

      {/* 프로필 정보 */}
      <ProfileSection>
        <ProfileImage>
          <IconProfile width={40} height={40} />
        </ProfileImage>

        <ProfileDetails>
          <NameWrapper>
            <Name>{user.name}</Name>
            <Badge>{user.auth === "STUDENT" ? "재학생" : "방문자"}</Badge>
          </NameWrapper>
          <Email>{user.email}</Email>
        </ProfileDetails>
      </ProfileSection>

      {/* 통계 */}
      <StatsContainer>
        <StatBox>
          <Link href="/my/saveguide" style={{ textDecoration: 'none' }}>
          <StatText>
            저장한 가이드 <StatNumber>0</StatNumber>
          </StatText>
          </Link>
        </StatBox>
          <StatBox>
             <Link href="/my/savequestion" style={{ textDecoration: 'none' }}>
            <StatText>
              저장한 질문 <StatNumber>0</StatNumber>
            </StatText>
             </Link>
          </StatBox>
      </StatsContainer>

      <Divider height="8px" />

      {/* 메뉴 섹션: 기록 */}
      <SectionLabel>기록</SectionLabel>
      
      <Link href="/my/myquestion" style={{ textDecoration: 'none' }}>
        <MenuItem>
          <MenuItemText>내가 만든 투표</MenuItemText>
          <MenuArrow src={imgArrow} alt="더보기" />
        </MenuItem>
      </Link>
      <Divider />

      <MenuItem>
        <MenuItemText>투표 응답 내역</MenuItemText>
        <MenuArrow src={imgArrow} alt="더보기" />
      </MenuItem>
      <Divider />

      <Link href="/my/myquestionhistory" style={{ textDecoration: 'none' }}>
        <MenuItem>
          <MenuItemText>질문 게시판 글 작성 내역</MenuItemText>
          <MenuArrow src={imgArrow} alt="더보기" />
        </MenuItem>
      </Link>
      <Divider />

      {/* 메뉴 섹션: 설정 */}
      <SectionLabel>설정</SectionLabel>
      
      <Link href="/my/account" style={{ textDecoration: 'none' }}>
        <MenuItem>
          <MenuItemText>계정 정보</MenuItemText>
          <MenuArrow src={imgArrow} alt="더보기" />
        </MenuItem>
      </Link>
      <Divider />

      {/* 메뉴 섹션: 도움말 & 지원 */}
      <SectionLabel>도움말 & 지원</SectionLabel>
      
      <MenuItem>
        <MenuItemText>서비스 소개</MenuItemText>
        <MenuArrow src={imgArrow} alt="더보기" />
      </MenuItem>
      <Divider />

      <MenuItem onClick={() => router.push('/my/inquiry')}>
        <MenuItemText>문의하기</MenuItemText>
        <MenuArrow src={imgArrow} alt="더보기" />
      </MenuItem>
      <Divider />
    </ProfileContainer>
  );
};

export default Profile;

// 스타일드 컴포넌트
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: ${color.white};
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: ${color.white};
  width: 100%;
  box-sizing: border-box;
`;

const BackButton = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const CloseButton = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const ProfileSection = styled.div`
  display: flex;
  gap: 16px;
  padding: 0 20px 20px;
  align-items: center;
`;

const ProfileImage = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${color.black};
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 12px 0;
`;

const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Name = styled.div`
  ${font.H3}
  color: ${color.black};
`;

const Badge = styled.div`
  background: ${color.gray50};
  padding: 3px 4px;
  border-radius: 4px;
  font-size: 8px;
  font-weight: 600;
`;

const Email = styled.div`
  ${font.H5}
  color: ${color.gray500};
`;

const StatsContainer = styled.div`
  display: flex;
  margin: 0 20px 20px;
  background: ${color.gray50};
  border-radius: 8px;
`;

const StatBox = styled.div`
  flex: 1;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    height: 100%;
    width: 1px;
    background: ${color.gray200};
  }
`;

const StatText = styled.div`
  ${font.H3}
  color: ${color.black};
  text-align: center;
`;

const StatNumber = styled.span`
  color: ${color.primary};
`;

const Divider = styled.div<{ height?: string }>`
  height: ${props => props.height || '1px'};
  background: ${color.gray50};
  width: 100%;
`;

const SectionLabel = styled.div`
  ${font.p2}
  color: ${color.gray400};
  padding: 10px 20px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 36px;
  cursor: pointer;
`;

const MenuItemText = styled.div`
  ${font.H3}
  color: ${color.black};
  font-weight: 600;
`;

const MenuArrow = styled.img`
  width: 16px;
  height: 16px;
`;
