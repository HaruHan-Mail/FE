import { useMutation } from '@tanstack/react-query';
import { saveNewContent } from '../../apis/adminApi';

/**
 * 컨텐츠 추가를 위한 mutation hook
 */
export const useContentMutation = () => {
  return useMutation({
    mutationFn: (contentData) => saveNewContent(contentData),
    onError: (error) => {
      console.error('컨텐츠 저장 실패:', error);
    }
  });
};

export default useContentMutation; 