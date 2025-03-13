import axios from 'axios';

const BASE_URL = 'https://haruhan.site/api';

// 구독하기
export const registerSubscription = async (data) => {
  const url = `${BASE_URL}/user`;
  console.log('subscribeUser 호출 URL:', url);
  console.log('전송 데이터:', data);
  const response = await axios.post(url, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

// 구독 수신 빈도 및 설정 수정
export const updateSubscriptionSettings = async ({ email, isDaily, preferedTime, token }) => {
  const response = await axios.patch(
    `${BASE_URL}/user/settings`,
    { email, isDaily, preferedTime, token },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  console.log(response.status);
  return response;
};

// 구독 취소하기
export const cancelSubscription = async (data) => {
  console.log('cancelSubscription 호출');
  try {
    const response = await axios.delete(`${BASE_URL}/user`, {
      data: data,
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.data) {
      return {
        stateCode: response.status,
        message: response.statusText || '요청이 성공적으로 처리되었습니다.',
        data: 'Request processed successfully',
      };
    }
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw error.response.data;
    }
    throw error;
  }
};

// 인증번호 확인
export const confirmSubscriptionCode = async (data) => {
  const response = await axios.post(`${BASE_URL}/user/confirm-subscribe`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};
