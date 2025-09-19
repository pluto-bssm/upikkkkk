"use client";

import React from "react";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";

const imgFrame = "/svg/placeholder.svg"

export default function ProfileInfo(): React.ReactElement {
	return (
		<StyledProfileInfo>
			<Header>
				<HeaderInner>
					<Title>계정 정보</Title>
					<Icon src={imgFrame} alt="frame" />
				</HeaderInner>
			</Header>

			<Main>
				<Row>
					<Label>이름</Label>
					<Value>박가은</Value>
				</Row>

				<Row>
					<Label>학번</Label>
					<Value>2108</Value>
				</Row>

				<Row>
					<Label>자격</Label>
					<Value>재학생</Value>
				</Row>

				<Row>
					<Label>이메일</Label>
					<Value>fake_bsm_email@bssm.hs.kr</Value>
				</Row>
			</Main>

			<Footer>로그아웃 | 탈퇴하기</Footer>
		</StyledProfileInfo>
	);
}



const StyledProfileInfo = styled.div`
	background: ${color.white};
	width: 100%;
	max-width: 600px;
	margin: 0 auto;
	box-sizing: border-box;
`;

const Header = styled.header`
	padding: 20px 0;
`;

const HeaderInner = styled.div`
	display: flex;
	align-items: center;
	padding: 0 20px;
`;

const Title = styled.div`
	position: relative;
	flex: 1;
	text-align: center;
	color: ${color.black};
	font: ${font.D1};
	font-weight: 600;
`;

const Icon = styled.img`
	width: 24px;
	height: 24px;
`;

const Main = styled.main`
	padding: 16px 0;
`;

const Row = styled.div`
	padding: 0 20px;
	margin-top: 12px;
`;

const Label = styled.div`
	color: ${color.gray500};
	font-size: 10px;
	margin-bottom: 4px;
`;

const Value = styled.div`
	color: ${color.black};
	font-size: 13px;
`;

const Footer = styled.footer`
	padding: 16px 20px 40px;
	color: ${color.gray500};
	font-size: 10px;
`;