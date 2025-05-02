import { useQuery } from '@tanstack/react-query';
import { fetchAllContents } from '../../apis/userContentApi';

export const useContents = (email, token) => {
  return useQuery({
    queryKey: ['contents', email],
    queryFn: () => fetchAllContents({ email, token }),
    select: (data) => data.data,
    enabled: !!(email && token),
    staleTime: 2000,
  });
};
