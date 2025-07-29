import { useSearchParams } from 'react-router-dom';

export const useQueryParams = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');
  const token = searchParams.get('token');

  return { email, token };
};
