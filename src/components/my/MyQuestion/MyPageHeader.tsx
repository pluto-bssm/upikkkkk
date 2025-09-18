"use client";

import React from "react";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/common/Header";
import HeaderItemsBox from "@/components/Header/HeaderItemBox";

interface MyPageHeaderProps {
  title: string;
  backLink: string;
  headerType: 'makeVote' | 'writeQuestion' | 'responseVote' | 'saveQuestion' | 'saveGuide';
}

const MyPageHeader = ({ title, backLink, headerType }: MyPageHeaderProps) => {
  return (
    <Header
      LeftItem={
        <Link href={backLink}>
          <Image src="/svg/Back.svg" alt="뒤로가기" width={24} height={24} />
        </Link>
      }
      CenterItem={<HeaderItemsBox type={headerType} />}
      types="None"
    />
  );
};

// 스타일 컴포넌트들은 Header 컴포넌트로 대체되었으므로 제거

export default MyPageHeader;
