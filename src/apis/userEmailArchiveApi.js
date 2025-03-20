import axios from 'axios';

// 백엔드 API URL
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://haruhan.site/api';

// 사용자의 이메일 아카이브 조회
export const fetchEmailArchive = async (email, token, page = 1, limit = 10) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/emails`, {
      params: { email, page, limit },
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('이메일 아카이브 조회 실패:', error);
    throw error;
  }
};

// 특정 이메일 상세 조회
export const fetchEmailDetail = async (email, token, emailId) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/emails/${emailId}`, {
      params: { email },
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('이메일 상세 조회 실패:', error);
    throw error;
  }
};

// 컨텐츠 찜하기
export const favoriteContent = async (userEmail, token, contentId) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/favorites`, {
      userEmail,
      token,
      contentId
    });
    return response.data;
  } catch (error) {
    console.error('콘텐츠 찜하기 실패:', error);
    throw error;
  }
};

// 사용자의 찜한 컨텐츠 목록 조회
export const fetchUserFavorites = async (email, token) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/favorites`, {
      params: { email },
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('찜한 컨텐츠 목록 조회 실패:', error);
    throw error;
  }
};