import axios from 'axios';

const BASE_URL = 'https://haruhan.site/api';

// 사용자의 찜한 컨텐츠 목록 조회
export const getAllBookmarkContents = async (email) => {
  try {
    const response = await axios.get(`${BASE_URL}/bookmark/${email}`);
    return response.data;
  } catch (error) {
    console.error('찜한 컨텐츠 목록 조회 실패:', error);
    throw error;
  }
};
// 컨텐츠 찜하기
export const saveBookmarkContent = async (email, token, contentId) => {
  try {
    const response = await axios.post(`${BASE_URL}/bookmark`, {
      email,
      token,
      contentId,
    });
    return response.data;
  } catch (error) {
    console.error('콘텐츠 찜하기 실패:', error);
    throw error;
  }
};

// 컨텐츠 찜 해제
export const deleteBookmarkContent = async (email, token, contentId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/bookmark`, {
      email,
      token,
      contentId,
    });
    return response.data;
  } catch (error) {
    console.error('콘텐츠 찜 해제 실패', error);
    throw error;
  }
};
