import axios from 'axios';

const BASE_URL = 'https://haruhan.site/api';

export const patchUserSettings = async ({ email, isDaily, preferedTime, token }) => {
  const response = await axios.patch(
    `${BASE_URL}/user/settings`,
    { email, isDaily, preferedTime, token }, // 데이터 객체
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  console.log(response.status);
  return response;
};
