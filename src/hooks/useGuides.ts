  "use client";

  import { useQuery } from '@apollo/client/react';
  import { GET_GUIDES, GET_GUIDE_BY_ID, GET_BOOKMARKED_GUIDES, TOGGLE_BOOKMARK,SEARCH_SIMILAR_GUIDES } from '@/graphql/queries';
  import { Guide,SimilarGuide } from '@/types/api';
  import { useMutation } from '@apollo/client/react';
interface SearchSimilarGuidesData {
  keywordGuide: {
    searchSimilarByTitle: SimilarGuide[];
  };
}

  interface SearchSimilarGuidesVars {
    title: string;
  }

export function useSearchSimilarGuides(title?: string) {
  const { data, loading, error, refetch } = useQuery<SearchSimilarGuidesData, SearchSimilarGuidesVars>(
    SEARCH_SIMILAR_GUIDES,
    {
      variables: { title: title || "" },
      skip: !title, 
      fetchPolicy: "network-only",
    }
  );

  return {
    guides: data?.keywordGuide?.searchSimilarByTitle || [],
    loading,
    error,
    refetch,
  };
}


  interface GuidesData {
    guidesByCategory: Guide[];
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


