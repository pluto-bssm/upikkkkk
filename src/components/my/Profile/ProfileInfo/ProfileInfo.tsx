"use client";

import React from "react";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";
import Image from 'next/image';

const img = "/svg/placeholder.svg"

const ProfileInfo = (): React.ReactElement => {
  return (
    <StyledProfileInfo data-node-id="316:3877">
      <StyledHeader data-node-id="316:3969">
        <div className="inner">
          <div className="title">계정 정보</div>
          <Image src={img} alt="frame" width={24} height={24} />
        </div>
      </StyledHeader>

      <div className="content" data-node-id="316:3988">
        <div className="row">
          <div className="label">이름</div>
          <div className="value">박가은</div>
        </div>

        <div className="row">
          <div className="label">학번</div>
          <div className="value">2108</div>
        </div>

        <div className="row">
          <div className="label">자격</div>
          <div className="value">재학생</div>
        </div>

        <div className="row">
          <div className="label">이메일</div>
          <div className="value">fake_bsm_email@bssm.hs.kr</div>
        </div>
      </div>

      <div className="footer">로그아웃 | 탈퇴하기</div>
    </StyledProfileInfo>
  );
};

const StyledProfileInfo = styled.div`
  background: ${color.white};
  width: 100%;
  max-width: 390px;
  margin: 0 auto;
  box-sizing: border-box;

  .content {
    padding: 16px 20px;
  }

  .row + .row {
    margin-top: 12px;
  }

  .label {
    color: ${color.gray400};
    font-size: 10px;
    margin-bottom: 4px;
  }

  .value {
    color: ${color.black};
    font-size: 13px;
    ${font.H3}
  }

  .footer {
    padding: 16px 20px 40px;
    color: ${color.gray400};
    font-size: 10px;
  }
`;

const StyledHeader = styled.header`
  padding: 20px 0;

  .inner {
    display: flex;
    align-items: center;
    padding: 0 20px;
  }

  .title {
    position: relative;
    flex: 1;
    text-align: center;
    color: ${color.black};
    font-weight: 600;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

export default ProfileInfo;

