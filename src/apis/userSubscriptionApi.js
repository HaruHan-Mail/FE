import axiosInstance from './axiosInstance';

// 구독하기
export const registerSubscription = async (data) => {
  return await axiosInstance.post('/user', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

// 구독 수신 빈도 및 설정 수정
export const updateSubscriptionSettings = async ({ email, isDaily, preferedTime, token }) => {
  return await axiosInstance.patch(
    '/user/settings',
    { email, isDaily, preferedTime, token }
  );
};

// 구독 취소하기
export const cancelSubscription = async ( email, token ) => {
  return await axiosInstance.delete(
    '/user',
    {
      data: { email, token }, 
    }
  );
};

// 인증번호 확인
export const confirmSubscriptionCode = async (data) => {
  return await axiosInstance.post(`/user/confirm-subscribe`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
