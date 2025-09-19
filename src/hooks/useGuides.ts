"use client";

import { useQuery } from '@apollo/client/react';
import { GET_GUIDES, GET_GUIDE_BY_ID, GET_BOOKMARKED_GUIDES, TOGGLE_BOOKMARK, GET_ALL_GUIDES } from '@/graphql/queries';
import { Guide } from '@/types/api';
import { useMutation } from '@apollo/client/react';

interface GuidesData {
  guidesByCategory: Guide[];
}

interface AllGuidesData {
  getAllGuides: {
    content: Guide[];
    hasNext: boolean;
    pageNumber: number;
    size: number;
    totalElements: number;
    totalPages: number;
  };
}

// 카테고리별 가이드를 가져오는 훅
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

// 모든 가이드를 가져오는 훅 (페이지네이션 지원)
export function useAllGuides(page: number = 0, size: number = 10, sortBy?: string) {
  const { data, loading, error, refetch } = useQuery<AllGuidesData>(
    GET_ALL_GUIDES,
    {
      variables: { page, size, sortBy },
      fetchPolicy: 'network-only'
    }
  );

  return {
    guides: data?.getAllGuides?.content || [],
    pagination: {
      hasNext: data?.getAllGuides?.hasNext || false,
      pageNumber: data?.getAllGuides?.pageNumber || 0,
      size: data?.getAllGuides?.size || 10,
      totalElements: data?.getAllGuides?.totalElements || 0,
      totalPages: data?.getAllGuides?.totalPages || 0,
    },
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

// 특정 ID의 가이드를 가져오는 훅
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

// 북마크한 가이드 목록을 가져오는 훅
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

// 북마크 토글 훅
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
      console.error('북마크 토글 실패:', err);
      throw err;
    }
  };

  return {
    toggleBookmark: toggle,
    loading,
    error
  };
}
