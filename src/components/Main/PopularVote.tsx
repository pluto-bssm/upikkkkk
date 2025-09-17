"use client";
import React from "react";
import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import font from "@/packages/design-system/src/font";
import { mockMainGuideData } from "@/mock/GuideComponent";

const PopularVote = () => {
  const items = mockMainGuideData.slice(0, 3);

  return (
    <Layout>
      <Track>
        {items.map((item) => (
          <Slide key={item.id}>
            <Card>
              <Thumb src={item.thumnail} alt="thumbnail" />
              <Texts>
                <Title>{item.title}</Title>
                <Meta>
                <LookWrap>
                  <Tag>{item.category}</Tag>
                    <LookIcon />
                    <Look>{item.markcount}</Look>
                  </LookWrap>
                </Meta>
              </Texts>
            </Card>
          </Slide>
        ))}
      </Track>
    </Layout>
  );
};

export default PopularVote;

const Layout = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Track = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding: 4px 4px 8px 0;
  margin-left: 6%; 
  
  &::-webkit-scrollbar {
    height: 0px;
  }
`;

const Slide = styled.div`
  flex: 0 0 85%;
  scroll-snap-align: start;
  }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  height: 67px;
  border: 1px solid ${color.gray50};
  border-radius: 8px;
  background: ${color.white};
  padding: 0 16px;
   box-shadow: 
    -4px -4px 10px 0 rgba(0,0,0,0.03),
     4px  4px 10px 0 rgba(0,0,0,0.03);
`;

const Thumb = styled.img`
  width: 28px;
  height: 28px;
`;

const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

const Title = styled.div`
  color: ${color.black};
  font-family: ${font.P13};
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
`;

const Tag = styled.div`
  color: ${color.gray600};
  font-family: ${font.P6};
`;

const LookWrap = styled.div`
  display: flex;
  align-items: center;
`;

const LookIcon = styled.span`
  width: 10px;
  height: 10px;
  background-color: ${color.gray500};
  -webkit-mask: url('/svg/Views.svg') no-repeat center / contain;
  mask: url('/svg/Views.svg') no-repeat center / contain;
  display: inline-block;
  margin-left:8px;
`;

const Look = styled.div`
  color: ${color.gray600};
  font-family: ${font.p2};
  margin-left:2px;
`;


