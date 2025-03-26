import axios from 'axios';
import { mockFeedbacks } from '../mocks/feedbackData';

const BASE_URL = 'https://haruhan.site/api';

// 피드백 제출
export const submitFeedback = async (data) => {
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

// 피드백 목록 조회
export const fetchFeedbacks = async (isTest = false) => {
  // 테스트 모드일 경우 목업 데이터 반환
  if (isTest) {
    return {
      stateCode: 200,
      message: "요청이 성공적으로 처리되었습니다.",
      data: mockFeedbacks
    };
  }
  
  // 실제 API 호출
  try {
    
    const response = await axios.get(`${BASE_URL}/feedback`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('피드백 목록 조회 실패:', error);
    throw error;
  }
};
