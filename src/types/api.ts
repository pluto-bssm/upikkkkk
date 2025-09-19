export interface User {
  id: string;
  name: string;
  email: string;
  username: string;
  role: string;
}

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
  createdAt: string;
  finishedAt: string;
  options?: VoteOption[];
  hasVoted?: boolean;
}

export interface Guide {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  category?: string;
  guideType?: string;
  like?: number;
  likeCount?: number;
  revoteCount?: number;
}

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

export interface Page<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
}

export interface Bookmark {
  id: string;
  userId: string;
  guideId: string;
  createdAt: string;
}

export interface AIQuota {
  usageCount: number;
  maxUsageCount: number;
  remainingCount: number;
  lastResetDate: string;
  canUseNow: boolean;
}

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

export interface InquiryInput {
  title: string;
  content: string;
  type: string;
  email: string;
}

export interface ReportInput {
  targetId: string;
  reason: string;
  targetType: string;
}
