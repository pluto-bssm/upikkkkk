"use client";

import { useQuery, useMutation } from '@apollo/client/react';
import { GET_VOTES, GET_VOTE_BY_ID, CREATE_VOTE, CREATE_VOTE_RESPONSE } from '@/graphql/queries';
import { Vote, CreateVoteInput, CreateVoteResponseInput } from '@/types/api';

interface VotesData {
  vote: {
    getAllVotes: Vote[]
  }
}

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
      throw err;
    }
  };
  
  return {
    createResponse,
    loading,
    error
  };
}
