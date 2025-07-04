import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  saveBookmarkContent,
  deleteBookmarkContent,
} from '../../apis/userBookmarkApi';
import { 
  saveNewContent 
} from '../../apis/adminApi';

// ===== BOOKMARK MUTATIONS =====
export const useSaveBookmark = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationKey: ['saveBookmark'],
    mutationFn: ({ email, token, contentId }) =>
      saveBookmarkContent(email, token, contentId),
    onSuccess: (data, variables) => {
      // 해당 사용자의 북마크 목록 무효화
      queryClient.invalidateQueries(['bookmarks', variables.email]);
      // 전체 북마크 목록도 무효화 (필요시)
      queryClient.invalidateQueries(['bookmarks']);
    },
    onError: (error) => {
      console.error('북마크 저장 실패:', error);
    }
  });
};

export const useDeleteBookmark = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationKey: ['deleteBookmark'],
    mutationFn: ({ email, token, contentId }) =>
      deleteBookmarkContent(email, token, contentId),
    onSuccess: (data, variables) => {
      // 해당 사용자의 북마크 목록 무효화
      queryClient.invalidateQueries(['bookmarks', variables.email]);
      queryClient.invalidateQueries(['bookmarks']);
    },
    onError: (error) => {
      console.error('북마크 삭제 실패:', error);
    }
  });
};

// ===== ADMIN MUTATIONS =====
export const useCreateContent = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationKey: ['createContent'],
    mutationFn: (contentData) => saveNewContent(contentData),
    onSuccess: () => {
      // 관련 쿼리들 무효화
      queryClient.invalidateQueries(['contents']);
      queryClient.invalidateQueries(['popular-content']);
      queryClient.invalidateQueries(['dashboard']);
    },
    onError: (error) => {
      console.error('컨텐츠 생성 실패:', error);
    }
  });
}; 