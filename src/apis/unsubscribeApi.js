import axios from 'axios';

const BASE_URL = 'https://haruhan.site/api';

export const unsubscribeSubmit = async (email, token) => {
  const response = await axios
    .delete(`${BASE_URL}/user`, {
      data: { email, token },
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => console.log(res.data));
  return response.data;
};
