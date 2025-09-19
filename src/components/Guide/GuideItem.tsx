'use client';

import styled from "@emotion/styled";
import color from "@/packages/design-system/src/color";
import { Guide as GuideType } from "@/types/api";
import { useRouter } from "next/navigation";

interface GuideItemProps {
  guide: GuideType;
}

const GuideItem = ({ guide }: GuideItemProps) => {
  const router = useRouter();
  
  return (
    <GuideItemContainer onClick={() => router.push(`/Guide/${guide.id}`)}>
      <GuideHeader>
        <GuideTitle>{guide.title}</GuideTitle>
        <GuideCategory>{guide.category || "일반"}</GuideCategory>
      </GuideHeader>
      <GuideContent>
        {guide.content.length > 150 
          ? `${guide.content.substring(0, 150)}...` 
          : guide.content}
      </GuideContent>
      <GuideFooter>
        <GuideLikes>
          <img src="/svg/Bookmark.svg" width={16} height={16} alt="좋아요" />
          <span>{guide.like || 0}</span>
        </GuideLikes>
        <GuideDate>
          {new Date(guide.createdAt).toLocaleDateString()}
        </GuideDate>
      </GuideFooter>
    </GuideItemContainer>
  );
};

export default GuideItem;

const GuideItemContainer = styled.div`
  width: 100%;
  padding: 16px;
  background-color: ${color.white};
  border-radius: 8px;
  border: 1px solid ${color.gray100};
  margin-bottom: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

const GuideHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const GuideTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${color.black};
  margin: 0;
`;

const GuideCategory = styled.span`
  background-color: ${color.gray100};
  color: ${color.primary};
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
`;

const GuideContent = styled.p`
  font-size: 14px;
  color: ${color.gray600};
  line-height: 1.5;
  margin-bottom: 16px;
  white-space: pre-line;
`;

const GuideFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GuideLikes = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: ${color.gray500};
`;

const GuideDate = styled.span`
  font-size: 12px;
  color: ${color.gray400};
`;
