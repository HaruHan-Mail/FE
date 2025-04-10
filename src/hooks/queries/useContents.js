import { useQuery } from '@tanstack/react-query';
import { fetchAllContents } from '../../apis/userContentApi ';

export const useContents = (email, token) => {
  return useQuery({
    queryKey: ['contents', email],
    queryFn: async () => {
      const result = await fetchAllContents({ email, token });
      if (result.stateCode !== 200) {
        throw new Error(result.message);
      }
      return result.data;
    },
    enabled: !!(email && token),
    staleTime: 2000,
  });
};
