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

// 피드백 목록 조회 - 테스트 모드와 실제 API 호출 모드를 구분
export const fetchFeedbacks = async (isTest = false, page = 1, limit = 10) => {
  // 테스트 모드일 경우 목업 데이터 반환
  if (isTest) {
    return {
      stateCode: 200,
      message: "요청이 성공적으로 처리되었습니다.",
      data: {
        feedbacks: mockFeedbacks,
        totalCount: mockFeedbacks.length,
        currentPage: 1,
        totalPages: 1
      }
    };
  }
  
  // 실제 API 호출 (백엔드 API 개발 후 활성화)
  try {
    const response = await axios.get(`${BASE_URL}/feedbacks`, {
      params: { page, limit },
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
