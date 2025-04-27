import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  saveBookmarkContent,
  deleteBookmarkContent,
} from '../../apis/userBookmarkApi';

export const useSaveBookmark = () => {
    const qc = useQueryClient()
    return useMutation({
      mutationKey: ['saveBookmark'],
      // mutationFn 필드에 실제 API 호출 함수를 넣습니다.
      mutationFn: ({ email, token, contentId }) =>
        saveBookmarkContent(email, token, contentId),
      onSuccess: () => {
        qc.invalidateQueries(['bookmarks'])
      },
      onError: (error) => {
        console.error('북마크 저장 실패', error)
      }
    })
  }

  export const useDeleteBookmark = () => {
    const qc = useQueryClient()
    return useMutation({
      mutationKey: ['deleteBookmark'],
      mutationFn: ({ email, token, contentId }) =>
        deleteBookmarkContent(email, token, contentId),
      onSuccess: () => {
        qc.invalidateQueries(['bookmarks'])
      },
      onError: (error) => {
        console.error('북마크 삭제 실패', error)
      }
    })
  }
