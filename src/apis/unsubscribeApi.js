import axios from 'axios';

const BASE_URL = 'https://haruhan.site/api';

export const unsubscribeSubmit = async (email, token) => {
  const response = await axios.delete(
    `${BASE_URL}/user`,
    {
      email: email,
      token: token,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return response.data;
};
