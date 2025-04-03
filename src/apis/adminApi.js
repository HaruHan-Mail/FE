import axios from 'axios';

const BASE_URL = 'https://haruhan.site/api';

// 전체 피드백 조회
export const fetchAllFeedback = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/feedback`);
    return response.data;
  } catch (error) {
    console.error('피드백 목록 조회 실패:', error);
    throw error;
  }
};

// 컨텐츠 추가
export const saveNewContent = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/content`, data);
    return response.stateCode;
  } catch (error) {
    console.error('컨텐츠 추가 실패:', error);
    throw error;
  }
};
