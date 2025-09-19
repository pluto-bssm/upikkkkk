"use client";

import { useQuery, useMutation } from '@apollo/client/react';
import { GET_VOTES, GET_VOTE_BY_ID, CREATE_VOTE, CREATE_VOTE_RESPONSE, TODAY_VOTE } from '@/graphql/queries';
import { Vote, CreateVoteInput, CreateVoteResponseInput } from '@/types/api';

interface VotesData {
  vote: {
    getAllVotes: Vote[]
  }
}

// 모든 투표 목록을 가져오는 훅
export function useVotes() {
  const { data, loading, error, refetch } = useQuery<VotesData>(GET_VOTES, {
    fetchPolicy: 'network-only'
  });
  
  return {
    votes: data?.vote?.getAllVotes || [],
    loading,
    error,
    refetch
  };
}

interface VoteByIdData {
  vote: {
    getVoteById: Vote
  }
}

// 특정 ID의 투표 정보를 가져오는 훅
export function useVoteById(id: string) {
  const { data, loading, error } = useQuery<VoteByIdData>(GET_VOTE_BY_ID, {
    variables: { id },
    fetchPolicy: 'network-only'
  });
  
  return {
    vote: data?.vote?.getVoteById,
    loading,
    error
  };
}

interface CreateVoteData {
  vote: {
    createVote: Vote
  }
}

// 투표 생성 훅
export function useCreateVote() {
  const [createVoteMutation, { loading, error }] = useMutation<CreateVoteData, { input: CreateVoteInput }>(CREATE_VOTE);
  
  const createVote = async (input: CreateVoteInput) => {
    try {
      const result = await createVoteMutation({
        variables: { input },
        refetchQueries: [{ query: GET_VOTES }]
      });
      return result.data?.vote?.createVote;
    } catch (err) {
      console.error('투표 생성 실패:', err);
      throw err;
    }
  };
  
  return {
    createVote,
    loading,
    error
  };
}

interface VoteResponseData {
  voteResponse: {
    createVoteResponse: {
      id: string;
      userId: string;
      voteId: string;
      optionId: string;
      optionContent: string;
      voteTitle: string;
      createdAt: string;
    }
  }
}

// 투표 참여 훅
export function useVoteResponse() {
  const [createResponseMutation, { loading, error }] = useMutation<VoteResponseData, { input: CreateVoteResponseInput }>(CREATE_VOTE_RESPONSE);
  
  const createResponse = async (input: CreateVoteResponseInput) => {
    try {
      const result = await createResponseMutation({
        variables: { input },
        refetchQueries: [
          { 
            query: GET_VOTE_BY_ID, 
            variables: { id: input.voteId } 
          }
        ]
      });
      return result.data?.voteResponse?.createVoteResponse;
    } catch (err) {
      console.error('투표 참여 실패:', err);
      throw err;
    }
  };
  
  return {
    createResponse,
    loading,
    error
  };
}


interface TodayVoteData {
  vote: {
    getTodayVote: Vote
  }
}

export function useTodayVote() {
  const { data, loading, error, refetch } = useQuery<TodayVoteData>(TODAY_VOTE, {
    fetchPolicy: 'network-only'
  });

  return {
    vote: data?.vote?.getTodayVote,
    loading,
    error,
    refetch
  };
}
