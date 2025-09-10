import styled from "@emotion/styled";
import font from "@/packages/design-system/src/font"
import HeaderInputs from "@/packages/ui/src/Inputs/Headerinputs";

export type HeaderType = 
  | 'main' 
  | 'votemake' 
  | 'guide' 
  | 'searchguide' 
  | 'revote' 
  | 'searchvote' 
  | 'reportvote' 
  | 'reportdis'
  | 'bollot'
  | 'votesetting'
  | 'infomation'
  | 'saveQuestion'
  | 'saveGuide'
  | 'makeVote'
  | 'writeQuestion'
  | 'responseVote'
  | 'reports'

type Props = {
  type: HeaderType;
};

const HeaderItemsBox = ({ type }: Props) => {
  const renderItems = () => {
    switch (type) {
      case 'main':
        return (
          <>
            <img key="bell" src="svg/Bell.svg" alt="알림" width={24} height={24} />
            <img key="search" src="svg/Search.svg" alt="검색" width={24} height={24} />
            <img key="user" src="svg/User.svg" alt="사용자" width={24} height={24} />
          </>
        );
      
      case 'guide':
        return (
          <img key="bookmark" src="svg/Bookmark.svg" alt="북마크" width={24} height={24} />
        );  

      case 'votemake':
        return (
          <img key="close" src="svg/Close.svg" alt="닫기" width={24} height={24} />
        );
      
      case 'searchguide':
        return (
          <>
            <HeaderInputs placeholders="원하는 가이드 검색하기"/>
          </>
        );
      
      case 'revote':
        return (
          <>
            <HeaderTitle>재투표 신청하기</HeaderTitle>
          </>
        );
      
      case 'searchvote':
        return (
          <HeaderInputs placeholders="원하는 투표 검색하기"/>
        );
      
      case 'reportvote':
        return (
          <>
            <img key="report" src="svg/Report.svg" alt="리포트" width={24} height={24} />
            <img key="bookmark" src="svg/Bookmark.svg" alt="북마크" width={24} height={24} />
          </>
        );
      
      
      case 'bollot':
        return (
          <>
           <img key="close" src="svg/Close.svg" alt="닫기" width={24} height={24} />
           <img key="options" src="svg/Options.svg" alt="설정" width={24} height={24} />
          </>
        ); 

      case 'reportdis':
        return (
          <>
            <HeaderTitle>신고하기</HeaderTitle>
          </>
        );  

      case 'reports':
        return (
          <>
            <HeaderTitle>문의하기</HeaderTitle>
          </>
        );

      case 'infomation':
        return (
          <>
            <HeaderTitle>계정 정보</HeaderTitle>
          </>
        );    

      case 'votesetting':
        return (
          <>
            <HeaderTitle>투표 설정하기</HeaderTitle>
          </>
        );      
      case 'saveQuestion':
        return (
          <>
            <HeaderTitle>저장한 질문</HeaderTitle>
          </>
        );      
      case 'saveGuide':
        return (
          <>
            <HeaderTitle>저장한 가이드</HeaderTitle>
          </>
        );      
      case 'makeVote':
        return (
          <>
            <HeaderTitle>내가 만든 가이드</HeaderTitle>
          </>
        );      
      case 'writeQuestion':
        return (
          <>
            <HeaderTitle>질문 게시판 글 작성 내역</HeaderTitle>
          </>
        );      
      case 'responseVote':
        return (
          <>
            <HeaderTitle>투표 응답 내역</HeaderTitle>
          </>
        );      
      default:
        return null;
    }
  };

  return (
    <ItemsPageLayout>
      {renderItems()}
    </ItemsPageLayout>
  );
};

export default HeaderItemsBox;

const ItemsPageLayout = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content : center;
`;

const HeaderTitle = styled.p`
   ${font.H9}

`