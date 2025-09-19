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

const Question = ({ 
title, 
author, 
date, 
bookmark, 
comments 
}: QuestionProps): React.ReactElement => {
return (
  <Wrap>
    <Row>
      <Body>
        <Title>{title}</Title>
        <Meta>
          <span className="author">{author}</span>
          <span className="date">{date}</span>
          <span className="bm">
            <Image src={bookmarkImg} alt="bookmark" width={18} height={18} />
            <span className="cnt">{bookmark}</span>
          </span>
        </Meta>
      </Body>

      <Badge aria-label="댓글 수">
        <div className="num">{comments}</div>
        <div className="label">댓글</div>
      </Badge>
    </Row>
  </Wrap>
);
};

export default Question;
