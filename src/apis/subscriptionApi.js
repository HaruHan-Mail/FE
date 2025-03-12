import axios from 'axios';

const BASE_URL = 'https://haruhan.site/api';

export const registerSubscription = async (data) => {
  const url = `${BASE_URL}/user`;
  console.log('registerSubscription 호출 URL:', url);
  console.log('전송 데이터:', data);
  const response = await axios.post(url, data, {
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
