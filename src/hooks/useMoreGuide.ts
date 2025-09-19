import { useQuery } from '@apollo/client/react';
import { GET_GUIDE_BY_ID } from '@/graphql/queries';
import { Guide } from '@/types/api';

interface MoreGuideData {
  guideById: Guide;
}

export const useMoreGuide = (id: string) => {
  const { data, loading, error } = useQuery<MoreGuideData>(GET_GUIDE_BY_ID, {
    variables: { id },
    skip: !id,
  });

  return {
    guide: data?.guideById,
    loading,
    error,
  };
};
