import axios from 'axios';

const BASE_URL = 'https://haruhan.site/api';

export const registerSubscription = async (data) => {
  const response = await axios.post(`${BASE_URL}/user`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

export const verifyCode = async (data) => {
  const response = await axios.post(`${BASE_URL}/user/confirm-subscribe`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};
