import { gql } from '@apollo/client';

export const GET_CURRENT_USER = gql`
  query MyQuery {
    iam {
      getCurrentUser {
        email
        id
        role
        name
        username
      }
    }
  }
`;

/* ===================== 북마크 ===================== */
export const GET_BOOKMARKED_GUIDES = gql`
  query GetBookmarkedGuides {
    bookmark {
      getBookmarkedGuides {
        category
        content
        createdAt
        id
        like
        title
        voteId
      }
    }
  }
`;

export const GET_BOOKMARKS = gql`
  query GetBookmarks {
    bookmark {
      getBookmarks {
        createdAt
        guideId
        id
        userId
      }
    }
  }
`;

export const TOGGLE_BOOKMARK = gql`
  mutation ToggleBookmark($guideId: ID!) {
    bookmark {
      toggleBookmark(guideId: $guideId)
    }
  }
`;

/* ===================== 투표 ===================== */
export const GET_ALL_VOTES = gql`
  query GetAllVotes {
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

export const GET_MY_VOTES = gql`
  query GetMyVotes {
    vote {
      getMyVotes {
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

export const VOTE_ON_OPTION = gql`
  mutation VoteOnOption($voteId: ID!, $optionId: ID!) {
    vote {
      voteOnOption(voteId: $voteId, optionId: $optionId)
    }
  }
`;

export const GET_VOTES = gql`
  query GetVotes {
    vote {
      getAllVotes {
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
      }
    }
  }
`;

export const CREATE_VOTE_RESPONSE = gql`
  mutation CreateVoteResponse($input: CreateVoteResponseInput!) {
    vote {
      createVoteResponse(input: $input) {
        id
        voteId
        optionId
        createdAt
      }
    }
  }
`;

/* ===================== 가이드 ===================== */
export const GET_ALL_GUIDES = gql`
  query GetAllGuides {
    guide {
      getAllGuides {
        id
        title
        content
        category
        createdAt
        like
      }
    }
  }
`;

export const GET_GUIDE_BY_ID = gql`
  query GetGuideById($id: ID!) {
    guide {
      getGuideById(id: $id) {
        id
        title
        content
        category
        createdAt
        like
      }
    }
  }
`;

export const GET_GUIDES_BY_CATEGORY = gql`
  query GetGuidesByCategory($category: String!) {
    guide {
      getGuidesByCategory(category: $category) {
        id
        title
        content
        category
        createdAt
        like
      }
    }
  }
`;

/* feat#8에서 추가된 alias 성격의 쿼리 (동일 스키마 사용) */
export const GET_GUIDES = gql`
  query GetGuides {
    guide {
      getAllGuides {
        id
        title
        content
        category
        createdAt
        like
      }
    }
  }
`;

/* ===================== 질문/게시판 ===================== */
export const GET_QUESTIONS = gql`
  query GetQuestions {
    board {
      getAllPosts {
        id
        title
        content
        userName
        createdAt
        bookmarkCount
        commentCount
      }
    }
  }
`;

export const GET_QUESTION_BY_ID = gql`
  query GetQuestionById($id: ID!) {
    board {
      getPostById(id: $id) {
        id
        title
        content
        userName
        createdAt
        bookmarkCount
        commentCount
      }
    }
  }
`;

export const GET_COMMENTS = gql`
  query GetComments($postId: ID!) {
    board {
      getComments(postId: $postId) {
        id
        content
        userName
        createdAt
      }
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation CreateComment($input: CreateCommentInput!) {
    board {
      createComment(input: $input) {
        id
        content
        userName
        createdAt
      }
    }
  }
`;

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

//오늘의 투표
export const TODAY_VOTE = gql`
query TodayVote {
  vote {
    getLeastPopularOpenVote {
      category
      finishedAt
      hasVoted
      id
      options {
        content
        id
        percentage
        responseCount
      }
      status
      title
      totalResponses
    }
  }
}
`;