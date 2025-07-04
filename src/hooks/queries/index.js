import { useQuery } from '@tanstack/react-query';
import { 
  fetchAllBookmarkContents 
} from '../../apis/userBookmarkApi';
import { 
  fetchAllContents,
  fetchPopularContent,
  fetchContentDetail
} from '../../apis/userContentApi';
import { 
  fetchDashboard,
  fetchAllFeedback
} from '../../apis/adminApi';

const defaultQueryConfig = {
  staleTime: 5 * 60 * 1000,
  cacheTime: 10 * 60 * 1000, 
  retry: 2,
  refetchOnWindowFocus: false,
};

// ===== USER QUERIES =====
export const useBookmarks = (email, token) => {
  return useQuery({
    queryKey: ['bookmarks', email],
    queryFn: () => fetchAllBookmarkContents({ email, token }),
    select: (data) => data.data,
    enabled: !!(email && token),
    ...defaultQueryConfig,
  });
};

export const useContents = (email, token) => {
  return useQuery({
    queryKey: ['contents', email],
    queryFn: () => fetchAllContents({ email, token }),
    select: (data) => data.data,
    enabled: !!(email && token),
    ...defaultQueryConfig,
  });
};

export const usePopularContent = () => {
  return useQuery({
    queryKey: ['popular-content'],
    queryFn: fetchPopularContent,
    select: (data) => data.data,
    ...defaultQueryConfig,
    staleTime: 10 * 60 * 1000, 
  });
};

export const useContentDetail = (contentId) => {
  return useQuery({
    queryKey: ['content-detail', contentId],
    queryFn: () => fetchContentDetail({ contentId }),
    select: (data) => data.data,
    enabled: !!contentId,
    ...defaultQueryConfig,
  });
};

// ===== ADMIN QUERIES =====
export const useDashboard = () => {
  return useQuery({
    queryKey: ['dashboard'],
    queryFn: fetchDashboard,
    select: (data) => data.data,
    ...defaultQueryConfig,
    staleTime: 2 * 60 * 1000, // 대시보드는 2분 캐시
  });
};

export const useFeedbacks = () => {
  return useQuery({
    queryKey: ['feedbacks'],
    queryFn: fetchAllFeedback,
    select: (data) => data.data,
    ...defaultQueryConfig,
    staleTime: 1 * 60 * 1000, // 피드백은 1분 캐시
  });
}; 