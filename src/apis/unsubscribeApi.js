import axios from 'axios';

const BASE_URL = 'https://haruhan.site/api';

export const unsubscribeSubmit = async (data) => {
  console.log('unsubscribeSubmit 호출');
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
