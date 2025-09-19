import styled from "@emotion/styled";
import font from "@/packages/design-system/src/font"
import HeaderInputs from "@/packages/ui/src/Inputs/Headerinputs";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

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
  | 'Main'
  | 'reportguide'
  | 'reportQuestion'

type Props = {
  type: HeaderType;
  isopen?: boolean;
  setIsOpen?: (isopen: boolean) => void;
  questionId?: string; // 북마크 기능을 위한 questionId 추가
  isBookmarked?: boolean; // 북마크 상태
  onBookmarkToggle?: () => void;

};



const HeaderItemsBox = ({ type, setIsOpen, isopen ,  questionId, isBookmarked = false, onBookmarkToggle }: Props) => {
  const path = usePathname();


  const router = useRouter();
  const renderItems = () => {
    switch (type) {

      case 'Main':
        return (
          <>
            <img key="bell" src="/svg/Bell.svg" alt="알림" width={24} height={24} />
            <img key="user" src="/svg/User.svg" alt="사용자" width={24} height={24} />
          </>
        );


      case 'main':
        return (
          <>
            <img key="bell" src="/svg/Bell.svg" alt="알림" width={24} height={24} />
            <img key="search" src="/svg/Search.svg" alt="검색" width={24} height={24} onClick={() => {router.push(`${path}/search`)}} />
            <img key="user" src="/svg/User.svg" alt="사용자" width={24} height={24} onClick={() => {router.push(`/my`)}}  />
          </>
        );
      
      case 'guide':
        return (
          <img key="bookmark" src="/svg/Bookmark.svg" alt="북마크" width={24} height={24} />
        );  

      case 'votemake':
        return (
          <img key="close" src="/svg/Close.svg" alt="닫기" width={24} height={24} />
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

      case 'reportguide':
        return (
          <>
            <img key="report" src="/svg/Report.svg" alt="리포트" width={24} height={24} />
            <img key="bookmark" src="/svg/Bookmark.svg" alt="북마크" width={24} height={24} />
          </>
        );

        case 'reportQuestion':
        return (
          <>
            <img key="report" src="/svg/Report.svg" alt="리포트" width={24} height={24} onClick={() => router.push(`${path}/reportquestion`)}/>
            
          </>
        );
        //<img key="bookmark" src={isBookmarked ? "/svg/Bookmarkcheck.svg" : "/svg/Bookmark.svg"}  alt="북마크" width={24} height={24} />

    case 'reportvote':
      const handleReportClick = () => {
        const targetPath = path.endsWith('/tailvote') 
          ? path.replace('/tailvote', '/report')
          : `${path}/report`;
        router.push(targetPath);
      };

      return (
        <>
          <img 
            key="report" 
            src="/svg/Report.svg" 
            alt="리포트" 
            width={24} 
            height={24} 
            onClick={handleReportClick}
            style={{ cursor: 'pointer' }}
          />
        </>
      );

      
      
      case 'bollot':
        
        return (
          <>
           <img key="close" src="/svg/Close.svg" alt="닫기" width={24} height={24} onClick={() => router.back()}
              style={{ cursor: 'pointer' }}/>
           <img key="options" src="/svg/Options.svg" alt="설정" width={24} height={24} />
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