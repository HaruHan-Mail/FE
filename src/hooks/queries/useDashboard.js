import { useQuery } from '@tanstack/react-query';
import { fetchDashboard } from '../../apis/adminApi';

/**
 * 대시보드 데이터를 가져오는 훅
 */
export const useDashboard = () => {
  return useQuery({
    queryKey: ['dashboard'],
    queryFn: () => fetchDashboard(),
    select: (data) => data.data,
    staleTime: 60000, // 1분 동안 캐시 유지
  });
};

export default useDashboard; 