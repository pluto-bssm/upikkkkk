import { gql } from '@apollo/client';

// 사용자 관련 쿼리
export const GET_CURRENT_USER = gql`
  query GetCurrentUser {
    me {
      id
      name
      email
      role
    }
  }
`;

// 투표 관련 쿼리
export const GET_VOTES = gql`
  query GetVotes {
    vote {
      getAllVotes {
        id
        title
        hasVoted
        category
        status
        totalResponses
        finishedAt
        options {
          id
          content
          responseCount
          percentage
        }
      }
    }
  }
`;


export const GET_VOTE_BY_ID = gql`
  query GetVoteById($id: ID!) {
    vote {
      getVoteById(id: $id) {
        id
        title
        category
        status
        totalResponses
        finishedAt
        options {
          id
          content
          responseCount
          percentage
        }
        hasVoted
      }
    }
  }
`;

// 가이드 관련 쿼리
export const GET_GUIDES = gql`
  query GetGuidesByCategory($category: String) {
    guidesByCategory(category: $category) {
      id
      title
      content
      createdAt
      like
    }
  }
`;

export const GET_GUIDE_BY_ID = gql`
  query GetGuideById($id: ID!) {
    guide {
      guideById(id: $id) {
        id
        title
        content
        createdAt
        category
        guideType
        likeCount
        revoteCount
      }
    }
  }
`;

export const SEARCH_SIMILAR_GUIDES = gql`
  query SearchSimilarGuides($title: String!) {
    keywordGuide {
      searchSimilarByTitle(title: $title) {
        category
        content
        createdAt
        guideType
        id
        keyword
        likeCount
        revoteCount
        title
        userEmail
        userId
        userName
        userProfileImage
      }
    }
  }
`;


// 질문 관련 쿼리
export const GET_QUESTIONS = gql`
  query GetQuestions($page: Int, $size: Int) {
    board {
      getQuestionList(page: $page, size: $size) {
        content {
          id
          title
          userName
          createdAt
          bookmarkCount
          commentCount
          viewCount
        }
        totalElements
        totalPages
      }
    }
  }
`;

export const GET_QUESTION_BY_ID = gql`
  query GetQuestionById($id: ID!) {
    board {
      getQuestionDetail(id: $id) {
        id
        title
        content
        userName
        createdAt
        bookmarkCount
        commentCount
        viewCount
      }
    }
  }
`;

// 댓글 가져오기
export const GET_COMMENTS = gql`
  query GetComments($boardId: ID!, $page: Int, $size: Int) {
    board {
      getComments(boardId: $boardId, page: $page, size: $size) {
        content {
          id
          content
          userName
          createdAt
          updatedAt
          parentId
          replies {
            id
            content
            userName
            createdAt
          }
        }
        totalElements
        totalPages
      }
    }
  }
`;

export const CREATE_VOTE = gql`
  mutation CreateVote($input: CreateVoteInput!) {
    vote {
      createVote(input: $input) {
        id
        title
        category
        status
        totalResponses
        finishedAt  
        hasVoted 
        options {
          id
          content
          responseCount
          percentage
        }
      }
    }
  }
`;

export const AIOPTION_CREATE = gql`
  query MyQuery($count : Int! , $title : String!) {
    optionGenerator {
      generateOptions(count: $count, title: $title) {
        options
        message
      }
    }
  }
`

// 투표 참여 뮤테이션
export const CREATE_VOTE_RESPONSE = gql`
  mutation CreateVoteResponse($input: CreateVoteResponseInput!) {
    voteResponse {
      createVoteResponse(input: $input) {
        id
        userId
        voteId
        optionId
        optionContent
        voteTitle
        createdAt
      }
    }
  }
`;

// 문의하기 (질문 생성으로 대체)
export const CREATE_INQUIRY = gql`
  mutation CreateInquiry($input: CreateBoardInput!) {
    board {
      createQuestion(input: $input) {
        id
        title
        content
        createdAt
      }
    }
  }
`;

// 댓글 생성
export const CREATE_COMMENT = gql`
  mutation CreateComment($input: CreateCommentInput!) {
    board {
      createComment(input: $input) {
        id
        content
        createdAt
      }
    }
  }
`;

// 북마크 관련 쿼리 및 뮤테이션
export const TOGGLE_BOOKMARK = gql`
  mutation ToggleBookmark($guideId: ID!) {
    bookmark {
      toggleBookmark(guideId: $guideId)
    }
  }
`;

export const GET_BOOKMARKED_GUIDES = gql`
  query GetBookmarkedGuides {
    bookmark {
      getBookmarkedGuides {
        id
        title
        content
        createdAt
      }
    }
  }
`;
