import { useQuery } from '@apollo/client/react';
import { GET_SAVED_GUIDES, GET_SAVED_QUESTIONS, GET_MY_VOTES } from '@/graphql/queries';
import { User, Question, Vote, Guide } from '@/types/api';

interface SavedGuidesData {
  guide: {
    getSavedGuides: Guide[];
  };
}

interface SavedQuestionsData {
  board: {
    getSavedQuestions: Question[];
  };
}

interface MyVotesData {
  vote: {
    getMyVotes: Vote[];
  };
}

export const useSavedGuides = () => {
  const { data, loading, error } = useQuery<SavedGuidesData>(GET_SAVED_GUIDES, {
    errorPolicy: 'ignore',
    fetchPolicy: 'cache-and-network'
  });

  return {
    savedGuides: data?.guide?.getSavedGuides || [],
    loading,
    error
  };
};

export const useSavedQuestions = () => {
  const { data, loading, error } = useQuery<SavedQuestionsData>(GET_SAVED_QUESTIONS, {
    errorPolicy: 'ignore',
    fetchPolicy: 'cache-and-network'
  });

  return {
    savedQuestions: data?.board?.getSavedQuestions || [],
    loading,
    error
  };
};

export const useMyVotes = () => {
  const { data, loading, error } = useQuery<MyVotesData>(GET_MY_VOTES, {
    errorPolicy: 'ignore',
    fetchPolicy: 'cache-and-network'
  });

  return {
    myVotes: data?.vote?.getMyVotes || [],
    loading,
    error
  };
};
