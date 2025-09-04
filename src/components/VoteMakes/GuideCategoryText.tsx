import styled from "@emotion/styled";

const SpanDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-direction: column;
`;

const SpanP = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #FF9F1C;
`;

const MainP = styled.p`
  font-size: 30px;
  font-weight: 600;
`;

const SubP = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #B3B3B3;
`;

export default function GuideCategoryText() {
  return (
    <SpanDiv>
      <SpanP>카테고리 선택</SpanP>
      <MainP>투표제작하기</MainP>
      <SubP>만들고 싶은  투표의 카테고리를 선택해주세요</SubP>
    </SpanDiv>
  );
}