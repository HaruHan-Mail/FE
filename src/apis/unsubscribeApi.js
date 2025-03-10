import axios from 'axios';

const BASE_URL = 'https://haruhan.site/api';

export const unsubscribeSubmit = async (data) => {
  const response = await axios.post(
    `${BASE_URL}/feedback`,
    { feedback_content: data },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return response.data;
};
