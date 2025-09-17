// 사용자 관련 타입
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  profileImage?: string;
}

// 투표 관련 타입
export interface VoteOption {
  id: string;
  content: string;
  responseCount: number;
  percentage: number;
}

export interface Vote {
  id: string;
  title: string;
  category: string;
  status: string;
  totalResponses: number;
  finishedAt: string;
  options?: VoteOption[];
  hasVoted?: boolean;
}

// 가이드 관련 타입
export interface Guide {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  category?: string;
  guideType?: string;
  like?: number; // 일반 목록에서 사용
  likeCount?: number; // 상세 정보에서 사용
  revoteCount?: number;
}

// 질문 및 게시판 관련 타입
export interface Comment {
  id: string;
  content: string;
  userName: string;
  createdAt: string;
  updatedAt?: string;
  parentId?: string;
  replies?: Comment[];
}

export interface Question {
  id: string;
  title: string;
  content?: string;
  userName: string;
  userProfileImage?: string;
  createdAt: string;
  updatedAt?: string;
  bookmarkCount: number;
  commentCount: number;
  viewCount: number;
  isBookmarked?: boolean;
}

// 페이지네이션 관련 타입
export interface Page<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
}

// 북마크 관련 타입
export interface Bookmark {
  id: string;
  userId: string;
  guideId: string;
  createdAt: string;
}

// AI 할당량 관련 타입
export interface AIQuota {
  usageCount: number;
  maxUsageCount: number;
  remainingCount: number;
  lastResetDate: string;
  canUseNow: boolean;
}

// 입력 타입
export interface CreateVoteInput {
  title: string;
  category: string;
  options: { content: string }[];
  finishedAt: string;
}

export interface CreateVoteResponseInput {
  voteId: string;
  optionId: string;
}

export interface CreateBoardInput {
  title: string;
  content: string;
}

export interface CreateCommentInput {
  boardId: string;
  content: string;
  parentId?: string;
}

// 문의 관련 타입 (실제 API에 없으므로 내부에서만 사용)
export interface InquiryInput {
  title: string;
  content: string;
  type: string;
  email: string;
}

// 리포트 관련 타입
export interface ReportInput {
  targetId: string;
  reason: string;
  targetType: string;
}
