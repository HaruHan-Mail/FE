import axios from 'axios';

const BASE_URL = 'https://haruhan.site/api';

export const getPopularContent = async () => {
  const response = await axios.get(`${BASE_URL}/content/top5`);
  return response.data;
};
