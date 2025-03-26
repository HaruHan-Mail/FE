import axios from 'axios';

const BASE_URL = 'https://haruhan.site/api';

export const fetchPopularContent = async () => {
  const response = await axios.get(`${BASE_URL}/content/top5`);
  return response.data;
};

export const fetchAllContents = async ({ email }) => {
  const response = await axios.get(`${BASE_URL}/content/mine/${email}`);
  return response.data;
};
