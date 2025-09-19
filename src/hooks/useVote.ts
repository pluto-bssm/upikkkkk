"use client";

import { useQuery, useMutation } from "@apollo/client/react";
import {
  GET_VOTES,
  GET_VOTE_BY_ID,
  CREATE_VOTE,
  CREATE_VOTE_RESPONSE,
  TODAY_VOTE,
} from "@/graphql/queries";
import type { Vote, CreateVoteInput, CreateVoteResponseInput } from "@/types/api";

/* ====================== Votes List ====================== */

interface VotesData {
  vote: {
    getAllVotes: {
      content: Vote[];
    };
  };
}

export function useVotes() {
  const { data, loading, error, refetch } = useQuery<VotesData>(GET_VOTES, {
    fetchPolicy: "network-only",
  });

  return {
    votes: data?.vote?.getAllVotes?.content || [],
    loading,
    error,
    refetch,
  };
}

/* ====================== Vote Detail ====================== */

interface VoteByIdData {
  vote: {
    getVoteById: Vote;
  };
}

export function useVoteById(id: string) {
  const { data, loading, error, refetch } = useQuery<VoteByIdData>(
    GET_VOTE_BY_ID,
    {
      variables: { id },
      fetchPolicy: "network-only",
      skip: !id,
    }
  );

  return {
    vote: data?.vote?.getVoteById,
    loading,
    error,
    refetch,
  };
}

/* ====================== Create Vote ====================== */

interface CreateVoteData {
  vote: {
    createVote: Vote;
  };
}

export function useCreateVote() {
  const [createVoteMutation, { loading, error }] = useMutation<
    CreateVoteData,
    { input: CreateVoteInput }
  >(CREATE_VOTE);

  const createVote = async (input: CreateVoteInput) => {
    const result = await createVoteMutation({
      variables: { input },
      refetchQueries: [{ query: GET_VOTES }],
    });
    return result.data?.vote?.createVote;
  };

  return {
    createVote,
    loading,
    error,
  };
}

/* ====================== Create Vote Response ====================== */

interface VoteResponseData {
  vote: {
    // feat#8: createVoteResponse는 아래 4개만 반환
    createVoteResponse: {
      id: string;
      voteId: string;
      optionId: string;
      createdAt: string;
    };
  };
}

export function useVoteResponse() {
  const [createResponseMutation, { loading, error }] = useMutation<
    VoteResponseData,
    { input: CreateVoteResponseInput }
  >(CREATE_VOTE_RESPONSE);

  const createResponse = async (input: CreateVoteResponseInput) => {
    const result = await createResponseMutation({
      variables: { input },
      refetchQueries: [{ query: GET_VOTE_BY_ID, variables: { id: input.voteId } }],
    });
    return result.data?.vote?.createVoteResponse;
  };

  return {
    createResponse,
    loading,
    error,
  };
}

interface TodayVoteData {
  vote: {
    getLeastPopularOpenVote: Vote
  }
}

export function useTodayVote() {
  const { data, loading, error, refetch } = useQuery<TodayVoteData>(TODAY_VOTE, {
    fetchPolicy: 'network-only'
  });

  return {
    vote: data?.vote?.getLeastPopularOpenVote,
    loading,
    error,
    refetch
  };
}
