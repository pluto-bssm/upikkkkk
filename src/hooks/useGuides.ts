"use client";

import { useQuery } from '@apollo/client/react';
import { GET_GUIDES, GET_GUIDE_BY_ID, GET_BOOKMARKED_GUIDES, TOGGLE_BOOKMARK } from '@/graphql/queries';
import { Guide } from '@/types/api';
import { useMutation } from '@apollo/client/react';

interface GuidesData {
  guidesByCategory: Guide[];
}

export function useGuides(category?: string) {
  const { data, loading, error, refetch } = useQuery<GuidesData>(
    GET_GUIDES, 
    { 
      variables: { category }, 
      fetchPolicy: 'network-only' 
    }
  );

  return {
    guides: data?.guidesByCategory || [],
    loading,
    error,
    refetch
  };
}

interface GuideByIdData {
  guide: {
    guideById: Guide;
  }
}

export function useGuideById(id: string) {
  const { data, loading, error } = useQuery<GuideByIdData>(
    GET_GUIDE_BY_ID, 
    {
      variables: { id },
      fetchPolicy: 'network-only'
    }
  );

  return {
    guide: data?.guide?.guideById,
    loading,
    error
  };
}

interface BookmarkedGuidesData {
  bookmark: {
    getBookmarkedGuides: Guide[];
  }
}

export function useBookmarkedGuides() {
  const { data, loading, error, refetch } = useQuery<BookmarkedGuidesData>(
    GET_BOOKMARKED_GUIDES,
    { fetchPolicy: 'network-only' }
  );

  return {
    guides: data?.bookmark?.getBookmarkedGuides || [],
    loading,
    error,
    refetch
  };
}

interface ToggleBookmarkData {
  bookmark: {
    toggleBookmark: boolean;
  }
}

export function useToggleBookmark() {
  const [toggleMutation, { loading, error }] = useMutation<ToggleBookmarkData, { guideId: string }>(
    TOGGLE_BOOKMARK
  );

  const toggle = async (guideId: string) => {
    try {
      const result = await toggleMutation({
        variables: { guideId },
        refetchQueries: [{ query: GET_BOOKMARKED_GUIDES }]
      });
      return result.data?.bookmark?.toggleBookmark;
    } catch (err) {
      throw err;
    }
  };

  return {
    toggleBookmark: toggle,
    loading,
    error
  };
}
