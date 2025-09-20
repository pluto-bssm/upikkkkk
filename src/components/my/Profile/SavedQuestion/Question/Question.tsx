"use client";

import React from "react";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";
import Image from 'next/image';

const bookmarkImg = "/svg/placeholder.svg";

type QuestionProps = {
title: string;
author: string;
date: string;
bookmark: number;
comments: number;
};

const Question = (): React.ReactElement => {
// 목데이터
const mockData: QuestionProps = {
  title: "React에서 상태 관리를 어떻게 효율적으로 할 수 있을까요?",
  author: "개발자123",
  date: "2024-01-15",
  bookmark: 12,
  comments: 8
};

return (
  <Wrap>
    <Row>
      <Body>
        <Title>{mockData.title}</Title>
        <Meta>
          <span className="author">{mockData.author}</span>
          <span className="date">{mockData.date}</span>
          <span className="bm">
            <Image src={bookmarkImg} alt="bookmark" width={18} height={18} />
            <span className="cnt">{mockData.bookmark}</span>
          </span>
        </Meta>
      </Body>

      <Badge aria-label="댓글 수">
        <div className="num">{mockData.comments}</div>
        <div className="label">댓글</div>
      </Badge>
    </Row>
  </Wrap>
);
};

export default Question;

const Wrap = styled.div`
width: 100%;
background: ${color.white};
box-shadow: -4px -4px 10px rgba(0, 0, 0, 0.03),
  4px 4px 10px rgba(0, 0, 0, 0.03);
border-radius: 8px;
box-sizing: border-box;
padding: 20px;
`;

const Row = styled.div`
display: flex;
gap: 16px;
align-items: flex-start;
justify-content: space-between;
`;

const Body = styled.div`
flex: 1;
min-width: 0;
`;

const Title = styled.div`
color: ${color.black};
${font.H1}
margin-bottom: 8px;
word-break: keep-all;
overflow: hidden;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
`;

const Meta = styled.div`
display: flex;
gap: 8px;
align-items: center;
color: ${color.gray600};
font-size: 12px;
line-height: 1;

.bm {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.cnt {
  font-size: 12px;
}
`;

const Badge = styled.div`
width: 38px;
height: 49px;
background: #f0f0f0;
border-radius: 8px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: ${color.gray600};
text-align: center;
flex: 0 0 auto;

.num {
  ${font.D3}
  line-height: 1;
}
.label {
  font-size: 10px;
  margin-top: 2px;
}
`;
